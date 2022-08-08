import React from 'react';
import '../assets/index.css';

export default function Contact({ formData, setFormData}){
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
            <div className='steps' id='steps-c'>
                <div className='one'><h3>1</h3></div>
                <div className='two'><h3>2</h3></div>
                <div className='three'><h3>3</h3></div>
            </div>
            <div className='heading'>
                    <h1>Contact Details</h1>
                    <h4>One last step. You are almost there!</h4>
                </div>
            <form className='contact'>
                <div className='flex'>
                    <input
                        type="text"
                        placeholder='Country'
                        onChange={handleChange}
                        name = "country"
                        value= {formData.country}
                    />
                    <input
                        type="text"
                        placeholder='State'
                        onChange={handleChange}
                        name = "state"
                        value= {formData.state}
                    />
                </div>
                <div className='flex'>
                <input
                    type="text"
                    placeholder='City/District'
                    onChange={handleChange}
                    name = "city"
                    value= {formData.city}
                />
                <input
                    type="text"
                    placeholder='Landmark/Locality'
                    onChange={handleChange}
                    name = "landmark"
                    value= {formData.landmark}
                />
                </div>

                <div className='flex'>
                <input
                    type="text"
                    placeholder='Street/complete address'
                    onChange={handleChange}
                    name = "address"
                    value= {formData.address}
                />
                </div>

                <div className='flex'>
                <input
                    type="text"
                    placeholder='Pincode'
                    onChange={handleChange}
                    name = "pincode"
                    value= {formData.pincode}
                />
                <input
                    type="text"
                    placeholder='Mobile Number'
                    onChange={handleChange}
                    name = "mobileno"
                    value= {formData.mobileno}
                />
                </div>

            </form>
            
        </div>
    )
}