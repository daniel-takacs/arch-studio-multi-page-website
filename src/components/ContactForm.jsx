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

const initialState = {
    name: "",
    email: "",
    text: "",
    nameError: "",
    emailError: "",
    textError: "",
}
export default class  ContactForm extends React.Component {
  state = initialState;

  handleChange = (e) => {
    const isCheckbox = e.target.type === "checkbox";
    this.setState({
      [e.target.name]: isCheckbox
      ? e.target.checked
      : e.target.value
    });
};

validate = () => {
  let nameError= "";
  let emailError= "";
  let textError= "";

  //name error

  if(!this.state.name ) {
    nameError = "Can't be empty";
  }
  if (nameError) {
    this.setState ({ nameError });
    return false;
  }

//email error

  if (!this.state.email.includes('@')){
    emailError = "Please use a valid email address"
    ;
  }

  if (emailError) {
    this.setState({ emailError });
    return false;
  }

//text error

  if (!this.state.text) {
    textError = "Can't be empty";
  }

  if(textError) {
    this.setState({ textError });
    return false;
  }


  return true;
}


handleSubmit = event => {
  event.preventDefault();
  const isValid = this.validate();
  if(isValid) {
    console.log(this.state);
    this.setState(initialState)
  }
}
 
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <input 
                name="name" 
                placeholder="Name" 
                value={this.state.name} 
                onChange={this.handleChange}
                />
                <div style={{ color: 'red'}}>{this.state.nameError}</div>
          </label>
          <label>  
            <input 
                name="email" 
                placeholder="Email" 
                value={this.state.email} 
                onChange={this.handleChange}/>
                <div style={{ color: 'red'}}>{this.state.emailError}</div>
          </label>
          <textarea name="" 
                    cols="30" 
                    rows="5" 
                    placeholder="Message"
                    value={this.state.text} 
                    onChange={this.handleChange}>
          </textarea>
          <div style={{ color: 'red'}}>{this.state.textError}</div>
          <ContactButtonWrapper><Button><ArrowForwardOutlinedIcon /></Button></ContactButtonWrapper>     
        </form>
    )
  }
}

