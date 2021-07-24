import React from 'react';
import styled from '@emotion/styled';
import { Flex, Box } from 'rebass'
import tree from '../images/SVG/tree.svg'

const TreeImg = styled.img`
    height: 400px;
    margin-top: -50px;
    margin-left:40px;
`;

const AboutPage = () => {
    return (
        <>
            <h1>About</h1>
            <Flex justifyContent='center'>
                <Box width='50%'>
                    <p>Based in Stockholm, but I usually work from home. I live in an appartment in Enskede with my boyfriend, baby girl and our little white doggo. I believe that life should be fun all day, all night and I don't do well when I am bored.</p>
                    <p>In 2014 I quit my job and started working on my dream to become a web developer. A fun job where I can fully design, code and make lovely things for people. For the designer part of me I studied graphic communications in 2006 when I went to gymnasium, or really when I was a little girl making books about the tv-show Friends and my favorite pop group the Hanson brothers.</p>
                    <p>Now at age 30+ I have found my calling and I love it.</p>
                </Box>
                <TreeImg src={tree} />
            </Flex>
        </>
    );
}

export default AboutPage;