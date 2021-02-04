import React from 'react';
import './ContactForm.scss';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import styled from 'styled-components';

const Button = styled.button`
    background-color: #1B1D23;
    color: #fff;
    padding: 18px;
    outline: none;
    border: none;
    cursor: pointer;
`;
const ContactButtonWrapper = styled.div `
  display: flex;
  justify-content: flex-end;
`
function ContactForm() {
    return (
        <form>
          <label>
            <input type="text" placeholder="Name"/>
          </label>
          <label>  
            <input type="text" placeholder="Email"/>
          </label>
          <textarea name="" id="" cols="30" rows="5" placeholder="Message"></textarea>
          <ContactButtonWrapper><Button><ArrowForwardOutlinedIcon /></Button></ContactButtonWrapper>     
        </form>
    )
}

export default ContactForm
