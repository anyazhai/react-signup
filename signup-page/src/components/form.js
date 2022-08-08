import React, {useState, useEffect} from 'react';
import '../assets/index.css';
import General from './General';
import ShopInfo from './ShopInfo';
import Contact from './Contact';
// import {Link} from "react-router";

export default function Form(){
    const [page, setPage] = useState(0);

    const initialValues = {
        userName: "", 
        fullName: "",
        email: "",
        password: "",
        rPassword: "",
        businessName: "",
        natureOfBusiness: "",
        country: "",
        state: "",
        city: "",
        landmark: "",
        address: "",
        pincode: "",
        mobileno: ""
    }

    const [formData, setFormData] = useState({initialValues})

    const FormTitles = ["General Info", "Shop Details", "Contact Details"]

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    const PageDisplay = () => {
        if(page === 0){
            return <General formData = {formData} setFormData = {setFormData}/>
        }
        else if(page === 1){
            return <ShopInfo formData = {formData} setFormData = {setFormData}/>
        }
        else if(page === 2){
            return <Contact formData = {formData} setFormData = {setFormData}/>
        }
    }


    return(

        <div>
            <div id='image'>

            </div>
            <div className='card'>
                <div className='page-display'>{ PageDisplay()}</div>

                <div className='buttons'>
                    <button className='btn btn-primary'
                    // disabled = {page === 0}
                    onClick={() => { page === 0 ? setPage((currPage) => currPage):
                        setPage((currPage) => currPage - 1)
                    }}
                    >{page === 0 ? "Sign In": "Previous"}
                    </button>
                    <button className='btn btn-secondary'
                    onClick={() => { page === FormTitles.length-1 ? handleSubmit() :
                        setPage((currPage) => currPage + 1)
                    }}
                    >{page === FormTitles.length-1 ? "Submit": "Next"}</button>
                    </div>
            </div>
        </div>
        
    )
}

// setPage((currPage) => currPage + 1)