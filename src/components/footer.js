import React from 'react';
import { Flex } from 'rebass';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const FooterContainer = styled(Flex)`
  background-color: #065054;
  height: 40px;
  width: 100%;
  position: fixed;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.a`
  margin-right: 20px;
`;

const Image = styled(FontAwesomeIcon)`
  color: white;
  :hover{
    font-size: 30px;
  }
`;

const icons = [
  { image: faInstagram, title:'Visit my instagram "A touch of Paaz"', destination: 'https://instagram.com/a.touch.of.paaz'},
  { image: faGithub, title:'Visit my Github', destination: 'https://github.com/pernillastagnebo'},
  { image: faLinkedinIn, title:'Visit my Linkedin', destination: 'https://se.linkedin.com/in/pernilla-stagnebo-7289aa106/en'},
  { image: faEnvelope, title:'Contact me', destination: '/contact'},

]

const Footer = () => (
      <FooterContainer>
        {icons.map(icon => (
          <Icon href={icon.destination} target='_blank' title={icon.title}>
            <Image icon={icon.image} />
          </Icon>
        ))}
      </FooterContainer>
  );

export default Footer;
