import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { ContactContainer, ContactIntroImgContainer, ContactIntroImg,
            ContactIntroTextContainer, ContactP, ContactH2, ContactDetailsContainer,
        ContactDetails, DetailsH2, DetailsH5, DetailsP, DetailsButton, 
    ContactMapContainer, ContactMapImg, ContactFormContainer, ContactFormH2} from './ContactElements';
import ContactImg from '../../assets/images/contact/mobile/image-hero.jpg';
import ContactMapImage from '../../assets/images/contact/mobile/image-map.png';
import ContactForm from '../../components/ContactForm';

function Contact() {
    return (
        <>
            <ContactContainer>
                <ContactIntroImgContainer>
                    <ContactIntroImg className="imgfilter" src={ContactImg} />
                </ContactIntroImgContainer>
                    <ContactIntroTextContainer>
                        <ContactH2>Tell us about your project</ContactH2>
                        <ContactP>We’d love to hear more about your project. Please, leave a message below or give 
                        us a call. We have two offices, one in Texas and one in Tennessee. If you find 
                        yourself nearby, come say hello!
                        </ContactP>
                    </ContactIntroTextContainer>
                <ContactDetailsContainer>
                    <ContactDetails>
                        <DetailsH2>Contact Details</DetailsH2>
                        <DetailsH5>Main Office</DetailsH5>
                        <DetailsP>Mail:	archone@mail.com</DetailsP>
                        <DetailsP>Address: 1892 Chenoweth Drive TN</DetailsP>
                        <DetailsP>Phone: 123-456-3451</DetailsP>
                        <DetailsButton>View on map</DetailsButton>
                    </ContactDetails>
                    <ContactDetails>
                        <DetailsH2>Contact Details</DetailsH2>
                        <DetailsH5>Office II</DetailsH5>
                        <DetailsP>Mail: archtwo@mail.com</DetailsP>
                        <DetailsP>Address: 3399 Wines Lane TX</DetailsP>
                        <DetailsP>Phone: 832-123-4321</DetailsP>
                        <DetailsButton>View on map</DetailsButton>
                    </ContactDetails>   
                </ContactDetailsContainer>
                <ContactMapContainer>
                    <ContactMapImg className="imgfilter" src={ContactMapImage} />
                </ContactMapContainer>
                <ContactFormContainer>
                    <ContactFormH2>Connect with us</ContactFormH2>
                    <ContactForm />
                </ContactFormContainer>
            </ContactContainer>
        </>
    )
}

export default Contact
