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
    nameError: "",
    emailError: "",
}
export default class  ContactForm extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
      ? event.target.checked
      : event.target.value
    });
};

validate = () => {
  let nameError= "";
  let emailError= "";

  //name error

  if(!this.state.name ) {
    nameError = "Can't be empty";
  }

//email error

  if (!this.state.email.includes('@')){
    emailError = "Please use a valid email address"
    ;
  }

  if (nameError || emailError) {
    this.setState({ nameError, emailError });
    return false;
  }
  return true;
}


handleSubmit = event => {
  event.preventDefault();
  const isValid = this.validate();
  if(isValid) {
    this.setState(initialState)
  }
}
 
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <div className="name">
            <input 
                name="name" 
                placeholder="Name" 
                value={this.state.name} 
                onChange={this.handleChange}
                />
          </div>
            <span style={{ color: 'red'}}>{this.state.nameError}</span>
         <div className="email">
            <input 
                name="email" 
                placeholder="Email" 
                value={this.state.email} 
                onChange={this.handleChange}/>
                
          </div>
            <span style={{ color: 'red'}}>{this.state.emailError}</span>
          <div className="textarea">
            <textarea name="" 
                    id=""
                    cols="30" 
                    rows="5" 
                    placeholder="Message"
                    required>
            </textarea>
          </div>
            <span style={{ color: 'red'}}>{this.state.textError}</span>
            <ContactButtonWrapper >
            <Button type="submit"><ArrowForwardOutlinedIcon /></Button>
            </ContactButtonWrapper>
        </form>
    )
  }
}
