import React from 'react';
import '../assets/index.css';

export default function ShopInfo({ formData, setFormData}){
    function handleChange(event){
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    return(
        <div>
            <div className='steps' id='steps-s'>
                <div className='one'><h3>1</h3></div>
                <div className='two'><h3>2</h3></div>
                <div className='three'><h3>3</h3></div>
            </div>
            <div className='heading'>
                    <h1>Business Details</h1>
                    <h4>Just one step away from setting up your account!</h4>
                </div>
            <form>
                <input
                    type="text"
                    placeholder='Business Name'
                    onChange={handleChange}
                    name = "businessName"
                    value= {formData.businessName}
                />
                <input
                    type="text"
                    placeholder='Nature of Business'
                    onChange={handleChange}
                    name = "natureOfBusiness"
                    value= {formData.natureOfBusiness}
                />
                <input
                    type="text"
                    placeholder='Company Registeration Number'
                    onChange={handleChange}
                    name = "regNo"
                    value= {formData.regno}
                />
            </form>
            
        </div>
    )
}