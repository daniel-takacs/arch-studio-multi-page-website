import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { ContactContainer, ContactHeroImgContainer, ContactHeroImg,
            ContactIntroContainer, ContactText, ContactP, ContactH2, ContactDetailsContainer,
        ContactDetails, DetailsH2, DetailsH4, DetailsP, DetailsButton, 
    ContactMapContainer, ContactMapImg, ContactFormContainer, ContactFormWrapper, ContactFormH2, Button} from './ContactElements';
import ContactImgMobile from '../../assets/images/contact/mobile/image-hero.jpg';
import ContactImgTablet from '../../assets/images/contact/tablet/image-hero.jpg';
import ContactImgDesktop from '../../assets/images/contact/desktop/image-hero.jpg';
import ContactMapImage from '../../assets/images/contact/mobile/image-map.png';
import ContactForm from '../../components/ContactForm';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';


function Contact() {
    return (
        <>
            <ContactHeroImgContainer>
                <ContactHeroImg className="imgfilter" src={ContactImgMobile} />
                <ContactHeroImg className="imgfilter" src={ContactImgTablet} />
                <ContactHeroImg className="imgfilter" src={ContactImgDesktop} />
            </ContactHeroImgContainer>
            <ContactContainer>
                <ContactIntroContainer>
                    <ContactText>
                        <ContactH2>Tell us about your project</ContactH2>
                        <ContactP>We’d love to hear more about your project. Please, leave a message below or give 
                        us a call. We have two offices, one in Texas and one in Tennessee. If you find 
                        yourself nearby, come say hello!
                        </ContactP>
                    </ContactText>
                </ContactIntroContainer>
                <ContactDetailsContainer>
                    <DetailsH2>Contact Details</DetailsH2>
                        <ContactDetails>
                            <DetailsH4>Main Office</DetailsH4>
                            <DetailsP>Mail:	archone@mail.com</DetailsP>
                            <DetailsP>Address: 1892 Chenoweth Drive TN</DetailsP>
                            <DetailsP>Phone: 123-456-3451</DetailsP>
                            <DetailsButton>
                                <Button onClick={() => { alert('clicked') }}>View on Map<ArrowForwardOutlinedIcon /></Button>
                            </DetailsButton>
                        </ContactDetails>
                    <ContactDetails>
                        <DetailsH4>Office II</DetailsH4>
                        <DetailsP>Mail: archtwo@mail.com</DetailsP>
                        <DetailsP>Address: 3399 Wines Lane TX</DetailsP>
                        <DetailsP>Phone: 832-123-4321</DetailsP>
                        <DetailsButton>
                                <Button onClick={() => { alert('clicked') }}>View on Map<ArrowForwardOutlinedIcon /></Button>
                        </DetailsButton>
                    </ContactDetails>   
                </ContactDetailsContainer>
                <ContactMapContainer>
                    <ContactMapImg className="imgfilter" src={ContactMapImage} />
                </ContactMapContainer>
                <ContactFormContainer>
                    <ContactFormH2>Connect with us</ContactFormH2>
                    <ContactFormWrapper>
                        <ContactForm />
                    </ContactFormWrapper>
                </ContactFormContainer>
            </ContactContainer>
        </>
    )
}

export default Contact
