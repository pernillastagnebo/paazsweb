import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styled from '@emotion/styled';
import Header from './components/header';
import StartPage from './components/start-page';
import AboutPage from './components/about-page';
import ExperiencePage from './components/experience-page';
import PortfolioPage from './components/portfolio-page';
import ContactPage from './components/contact-page';
import Footer from './components/footer';
import { Flex } from 'rebass';

const Container = styled.div`
  height: 100%;
`;

const MainContent = styled(Flex)`
  height: calc(100vh - 40px);
  width: 100%;
  padding: 10px;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  return (
  <Router>
    <Container>
      <Header />
      <MainContent>
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/experience">
            <ExperiencePage />
          </Route>
          <Route path="/portfolio">
            <PortfolioPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/">
            <StartPage />
          </Route>
        </Switch>
      </MainContent>
      <Footer />
    </Container>
    
    </Router>
  );
}

export default App;
