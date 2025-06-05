import React from 'react'
import './Form.css'
import Sumbit from './Sumbit'
export default function Form() {
    const thanks =()=>{
        set
    }
  return (
    <div>
        <div className='form'>
            <h2>Get Started Today</h2>
            <p>Fill in Your details and take control of your tasks</p>
            
            <form action="">
                
                <div className="d-flex">
                <div>
                    <label htmlFor="" className='fw-semibold'>First Name</label><br />
                    <input type="text" name="FN" id="FN" placeholder='Enter Your first name'/>
                </div> &nbsp;&nbsp;&nbsp;
                <div>
                    <label htmlFor="" className='fw-semibold'>Last Name</label><br />
                    <input type="text" name="LN" id="LN" placeholder='Enter Your last name'/>
                </div>
                </div>
                
                <label htmlFor="" className='fw-semibold mt-2'>Gender</label>
                <div className='d-flex gap-3'>
                <section> <input type="radio" name="Gender" id="Male" /> &nbsp;Male &nbsp; </section>
                <section>  <input type="radio" name="Gender" id="feMale" /> &nbsp;Female</section>
                </div>
               
               <label htmlFor=""className='fw-semibold mt-2'>Language</label>
               <section className='mt-3 section'> <input type="checkbox" name="" id=""  /> <label htmlFor="">English</label> </section>
               <section className='mt-3 section'> <input type="checkbox" name="" id="" className=''/> <label htmlFor="">Hindi</label></section>
               <section className='mt-3 section'> <input type="checkbox" name="" id="" /> <label htmlFor="">Marathi</label> </section>
                <br />
                <label htmlFor="" className='fw-semibold'>Email Address</label><br />
                <input className='email' type="email" name="email" id="email"  placeholder='enter Your email address'/><br />
            
                <input type="checkbox" name="term" id="term"  className='mt-4'/>&nbsp; 
                <label htmlFor="" className='fw-semibold'>I agree to the <em className='text-danger '> terms and conditions </em></label><br />
                <br />
                <button onClick={thanks}>Done</button>
            </form>
        </div>
        {}
     
    </div>
  )
}
