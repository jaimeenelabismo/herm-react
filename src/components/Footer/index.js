import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLink,FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle} from './FooterElements'
import { SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll/modules';
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>  About Jaime   </FooterLinkTitle>
                                <FooterLink to="/signin">Jaime</FooterLink>
                                <FooterLink to="/signin">Ivan</FooterLink>
                                <FooterLink to="/signin">Ramirez</FooterLink>
                                <FooterLink to="/signin">Osorio</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>  About Jaime   </FooterLinkTitle>
                                <FooterLink to="/signin">Jaime</FooterLink>
                                <FooterLink to="/signin">Ivan</FooterLink>
                                <FooterLink to="/signin">Ramirez</FooterLink>
                                <FooterLink to="/signin">Osorio</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>  About Jaime   </FooterLinkTitle>
                                <FooterLink to="/signin">Jaime</FooterLink>
                                <FooterLink to="/signin">Ivan</FooterLink>
                                <FooterLink to="/signin">Ramirez</FooterLink>
                                <FooterLink to="/signin">Osorio</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>  About Jaime   </FooterLinkTitle>
                                <FooterLink to="/signin">Jaime</FooterLink>
                                <FooterLink to="/signin">Ivan</FooterLink>
                                <FooterLink to="/signin">Ramirez</FooterLink>
                                <FooterLink to="/signin">Osorio</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            dolla
                        </SocialLogo>
                        <WebsiteRights>dolla @{new Date().getFullYear()}</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.facebook.com/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.facebook.com/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.facebook.com/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
