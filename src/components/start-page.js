import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import styled from '@emotion/styled';
import profilePic from '../images/profilePic.jpg';
import { Flex } from 'rebass'

const Container = styled(Flex)`
    justify-content: center;
    width: 100%;
    height: 70%;
`;

const ProfileImg = styled.img``;

const TextContainer = styled(Flex)`
    margin-left: 20px;
    flex-direction: column;
    justify-content: center;
`;

const Headline = styled.h1`
    font-family: 'Fuggles', cursive;
    font-weight: normal;
    font-size: 5rem;
    margin: 0;
`;

const SubHeadline = styled.h3`
    font-weight: normal;
    font-size: 1rem;
    margin: -22px 0 50px 10px;
`;

const StartPage = () => {
    return (
        <Container>
            <ProfileImg src={profilePic} />
            <TextContainer>
                <Headline>Pernilla Stagnebo</Headline>
                <SubHeadline>Designer and web developer</SubHeadline>
            </TextContainer>
            </Container>
    );
}

export default StartPage;