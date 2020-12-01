import React from 'react'
import {FooterContainer, FooterSubscription, 
        FooterSubHeading, FooterSubText, Form, FormInput, 
         FooterLinksContainer, FooterLinksWrapper, FooterLinksItems,
         FooterLink, FooterLinkTitle, SocialMedia, SocialMediaWrapper,
         SocialLogo,SocialIcon, SocialIcons, SocialIconLink, WebsiteRights  } from './Footer.elements'
        import {Button} from '../../globalStyles'
import {FaFacebook, FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterSubscription>
                    <FooterSubHeading>
                        Join our exclusive membership to receive the latest news and trends
                    </FooterSubHeading>
                    <FooterSubText>You can unsubscribe at any time</FooterSubText>
                    <Form>
                        <FormInput name="email" type="email" placeholder="your email" />
                        <Button>Subscribe</Button>
                    </Form>
                </FooterSubscription>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to="/sign-up">How it works</FooterLink>
                            <FooterLink to="/">Testimonials</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Investors</FooterLink>
                            <FooterLink to="/">Terms of Service</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Contact us</FooterLinkTitle>
                            
                            <FooterLink to="/">Contact</FooterLink>
                            <FooterLink to="/">Support</FooterLink>
                            <FooterLink to="/">Destinations</FooterLink>
                            <FooterLink to="/">Sponsorships</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            
                            <FooterLink to="/">Submit Videos</FooterLink>
                            <FooterLink to="/">Ambassadors</FooterLink>
                            <FooterLink to="/">Agency</FooterLink>
                            <FooterLink to="/">Influencer</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/">Facebook</FooterLink>
                            <FooterLink to="/">Github</FooterLink>
                            <FooterLink to="/">Twitter</FooterLink>
                            <FooterLink to="/">Linkedin</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrapper>
                        <SocialLogo to="/">
                            <SocialIcon />
                                ECOM
                        </SocialLogo>
                        <WebsiteRights>JT © 2020</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank"
                                            aria-label="Facebook">
                                    <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                                            aria-label="Github">
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                                            aria-label="Twitter">
                                    <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                                            aria-label="Linkedin">
                                    <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrapper>
                </SocialMedia>
            </FooterContainer>
        </>
    )
}

export default Footer
