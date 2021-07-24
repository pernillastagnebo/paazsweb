import React from 'react';
import styled from '@emotion/styled';
import react from '../images/logos/react.svg';
import reactNative from '../images/logos/react-native.svg';
import dotNet from '../images/logos/microsoft-net.svg';
import html from '../images/logos/html5.svg';
import css from '../images/logos/css-3.svg';
import graphql from '../images/logos/graphql.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faPalette } from '@fortawesome/free-solid-svg-icons'
import { Flex } from 'rebass'

const ExpContainer = styled(Flex)`
    text-align: left;
    margin: 10px 10px 30px;
`;

const CategoryImg = styled(FontAwesomeIcon)`
    margin-right: 20px;
    color: #AAA;
    padding: 10px;
    border: 1px solid #CCC;
    border-radius: 50%;
    height: 20px;
    min-width: 20px;
`;

const TextWrapper = styled.div`
`;

const Title = styled.div`
`;

const Period = styled.div`
    font-style: italic;
    font-size: 0.6rem;
    margin-bottom: 10px;
`;

const Description = styled.div`
    font-size: 0.6rem;
    margin-bottom: 10px;
`;

const Logo = styled.img`
    height: 20px;
    width: 20px;
    margin-right: 5px;
`;


const data = [
    {
        category: faLaptopCode,
        title: "Front end developer",
        period: 'April 2019 - ongoing. Msis, Stockholm',
        description: 'Working with React.js and Graphql in the Solna office and at home during Covid 19. Mspecs is a web based program for real estate agents.',
        logos: [html, css, react, graphql],
    },
    {
        category: faLaptopCode,
        title: "Front end developer",
        period: 'August 2011 - november 2011. Bonnier News, Stockholm',
        description: 'Worked with .Net on www.di.se and React Native on the app for Dagens Industri.',
        logos: [html, css, dotNet, reactNative],
    },
    {
        category: faPalette,
        title: "Graphic artist",
        period: 'August 2018- february 2019. TEMA Skolfoto Grevie',
        description: 'Designed and made picture albums of every class for different schools.',
        logos: [],
    }

];

const ExperiencePage = () => {
    return (
        <>
            <h1>Experience</h1>
            coming soon...
            {/* {data.map((data, index) => (
                <ExpContainer key={index}>
                    <CategoryImg icon={data.category} />
                    <TextWrapper>
                        <Title>{data.title}</Title>
                        <Period>{data.period}</Period>
                        <Description>{data.description}</Description>
                            {data.logos.map((logo, i) =>
                                <Logo key={i}src={logo} />
                            )}
                    </TextWrapper>
                </ExpContainer>
            ))} */}
        </>
    );
}

export default ExperiencePage;