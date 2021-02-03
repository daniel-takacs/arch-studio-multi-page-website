import React from 'react';
import './ContactForm.scss'


function ContactForm() {
    return (
        <form>
          <label>
            <input type="text" placeholder="Name"/>
          </label>
          <label>  
            <input type="text" placeholder="Email"/>
          </label>
          <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
          <button>button</button>     
        </form>
    )
}

export default ContactForm
