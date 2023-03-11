import Header from '../core/components/Header';
import Footer from '../core/components/Footer';
import About from '../core/components/About';
import Image from 'next/image';
import iolassist from '../public/Images/1.svg';
import iolassist1 from '../public/Images/2.svg';

import {
  Grid,
  Typography,
  Box,
  Flex,
  fontSizes,
  Button,
  TwitterIcon,
  StackOverflowIcon,
  LinkedInIcon,
  Anchor,
  GitHubIcon,
} from '../design_system/index';
import React from 'react';

import styled from 'styled-components';

const Break = styled.div`
  display: none;
  flex-basis: 100%;
  height: 0;
  @media (max-width: 550px) {
    display: revert;
  }
`;

const StyledAnchor = styled(Anchor)`
  margin: 0 0 0 auto;
  @media (max-width: 550px) {
    margin: 0;
  }
`;

const ImagePlaceHolder = styled.div`
  width: 100%;
  height: 200px;
  background-color: grey;
  margin-top: 20px;
`;

const handleClick = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const indexPage = () => {
  return (
    <>
      <Header />
      <Grid column="1fr minmax(auto, 70ch) 1fr" gap="48px 16px">
        <section>
          <Typography
            className="testComponentClass"
            modifiers="heading1"
            size={fontSizes['--header1']}
          >
            Hello I’m Aaron, Edinburgh based Doctor passionate about products
            and impact.
          </Typography>
          <Flex gap="16px" justifyContent="flex-start">
            <Button onClick={() => handleClick('about')}>About Me</Button>
            <Button onClick={() => handleClick('projects')}>Projects</Button>
            <Break></Break>
            <StyledAnchor
              href="https://stackoverflow.com/users/12566046/aarons?tab=profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StackOverflowIcon />
            </StyledAnchor>
            <Anchor
              href="http://www.twitter.com/aaronsmithdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </Anchor>
            <Anchor
              href="http://www.github.com/medic-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </Anchor>
            <Anchor
              href="http://www.linkedin.com/in/dr-aaron-smith"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </Anchor>
          </Flex>
        </section>
        <About />
        <section>
          <Typography
            id="projects"
            modifiers="heading1"
            size={fontSizes['--header1']}
          >
            Projects
          </Typography>
          <Anchor href="/iolassist">
            <Typography
              modifiers="modifiedHeading2"
              size={fontSizes['--header2']}
              className="navtest"
              color="hsl(var(--palette-green-75))"
            >
              IOL Assist
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              A mobile app to support cataract surgeons with intra-ocular lens
              choices
            </Typography>
            <Flex gap="16px" justifyContent="center" align-items="center">
              <Image
                src={iolassist}
                alt="IOL Assist Lens"
                width={208}
                height={450}
                style={{
                  border: '1px solid hsl(var(--palette-gray-10))',
                  borderRadius: '30px',
                }}
              />
              <Image
                src={iolassist1}
                alt="IOL Assist Viscoelastic"
                width={208}
                height={450}
                style={{
                  border: '1px solid hsl(var(--palette-gray-10))',
                  borderRadius: '30px',
                }}
              />
            </Flex>{' '}
          </Anchor>
        </section>
        <section>
          <Typography modifiers="heading1" size={fontSizes['--header1']}>
            Contact Me
          </Typography>
          <Typography modifiers="paragraph" size={fontSizes['--paragraph']}>
            Want to get in touch ?
          </Typography>
          <Typography modifiers="paragraph" size={fontSizes['--paragraph']}>
            email me at aaronsmith1@tutanota.com
          </Typography>
        </section>
      </Grid>
      <Footer />
    </>
  );
};

export default indexPage;
