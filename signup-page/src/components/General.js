import React from 'react';
import '../assets/index.css';

export default function General({ formData, setFormData}){
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
            <div className='steps' id='steps-g'>
                <div className='one'><h3>1</h3></div>
                <div className='two'><h3>2</h3></div>
                <div className='three'><h3>3</h3></div>
            </div>
            <div className='form'>
                <div className='heading'>
                    <h1>Welcome,</h1>
                    <h4>Let's set up your merchant account!</h4>
                </div>
                <form id='general'>
                    <div className='flex'>
                        <input
                            type="text"
                            placeholder='Username'
                            onChange={handleChange}
                            name = "userName"
                            value= {formData.userName}
                        />
                        <input
                            type="text"
                            placeholder='Full Name'
                            onChange={handleChange}
                            name = "fullName"
                            value= {formData.fullName}
                            
                        />
                    </div>
                    <div className='flex'>
                        <input
                            type="email"
                            placeholder='Email ID'
                            onChange={handleChange}
                            name = "email"
                            value= {formData.email}
                        />
                    </div>
                    <div className='flex'>
                    
                            <input
                                type="password"
                                placeholder='Password'
                                onChange={handleChange}
                                name = "password"
                                value= {formData.password}
                            />
                            <a>Forgotten password?</a>
                        
                        <input
                            type="password"
                            placeholder='Repeat Password'
                            onChange={handleChange}
                            name = "rPassword"
                            value= {formData.rPassword}
                        />
                    </div>
                </form>
                
            </div>
        </div>
    )
}