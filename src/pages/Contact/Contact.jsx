import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { ContactContainer, ContactHeroImgContainer, ContactHeroImg, ContactMainContainer,
            ContactIntroContainer, ContactText, ContactIntroH2, ContactIntroP,  ContactDetailsContainer,
        ContactDetails, ContactDetailsContent, DetailsH2, DetailsH4, DetailsP, DetailsButton, 
     ContactFormContainer, ContactFormWrapper, ContactFormH2, Button, ContactHeroContainer} from './ContactElements';
import ContactImgMobile from '../../assets/images/contact/mobile/image-hero.jpg';
import ContactImgTablet from '../../assets/images/contact/tablet/image-hero.jpg';
import ContactImgDesktop from '../../assets/images/contact/desktop/image-hero.jpg';
import ContactMapImage from '../../assets/images/contact/mobile/image-map.png';
import ContactMapImageTablet from '../../assets/images/contact/tablet/image-map.png';
import ContactMapImageDesktop from '../../assets/images/contact/desktop/image-map.png';

import ContactForm from '../../components/ContactForm';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'



function Contact() {
    return (
        <>
            <ContactContainer>
                <ContactHeroContainer>
                    <ContactHeroImgContainer>
                    <ContactHeroImg className="imgfilter" src={ContactImgMobile} />
                    <ContactHeroImg className="imgfilter" src={ContactImgTablet} />
                    <ContactHeroImg className="imgfilter" src={ContactImgDesktop} />
                    </ContactHeroImgContainer>
               
                    <ContactText>
                        <ContactIntroH2>Tell us about your project</ContactIntroH2>
                        <ContactIntroP>We’d love to hear more about your project. Please, leave a message below or give 
                        us a call. We have two offices, one in Texas and one in Tennessee. If you find 
                        yourself nearby, come say hello!
                        </ContactIntroP>
                    </ContactText>
                
                </ContactHeroContainer>
                <ContactMainContainer>
                <ContactDetailsContainer>
                    <DetailsH2>Contact Details</DetailsH2>
                    <ContactDetails>
                        <ContactDetailsContent>
                            <DetailsH4>Main Office</DetailsH4>
                            <DetailsP>Mail:	archone@mail.com</DetailsP>
                            <DetailsP>Address: 1892 Chenoweth Drive TN</DetailsP>
                            <DetailsP>Phone: 123-456-3451</DetailsP>
                        </ContactDetailsContent>
                        <DetailsButton>
                            <Button>View on Map<ArrowForwardOutlinedIcon /></Button>
                        </DetailsButton>
                    </ContactDetails>
                    <ContactDetails>
                        <ContactDetailsContent>
                            <DetailsH4>Office II</DetailsH4>
                            <DetailsP>Mail: archtwo@mail.com</DetailsP>
                            <DetailsP>Address: 3399 Wines Lane TX</DetailsP>
                            <DetailsP>Phone: 832-123-4321</DetailsP>
                        </ContactDetailsContent>
                        <DetailsButton>
                                <Button>View on Map<ArrowForwardOutlinedIcon /></Button>
                        </DetailsButton>
                    </ContactDetails>   
                </ContactDetailsContainer>
                <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} style= {{height: '60vh' }}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                    </MapContainer>
                <ContactFormContainer>
                    <ContactFormH2>Connect with us</ContactFormH2>
                    <ContactFormWrapper>
                        <ContactForm />
                    </ContactFormWrapper>
                </ContactFormContainer>
                </ContactMainContainer>
            </ContactContainer>
        </>
    )
}

export default Contact
