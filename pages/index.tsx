import Header from '../core/components/Header';
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
} from '../design_system/index';
import React from 'react';

import styled from 'styled-components';

const ImagePlaceHolder = styled.div`
  width: 100%;
  height: 200px;
  background-color: grey;
  margin-top: 20px;
`;

const indexPage = () => {
  return (
    <>
      <Header />
      <Grid column="1fr minmax(auto, 70ch) 1fr" gap="64px 16px">
        <Flex flexDirection="column" gap="32px">
          <Box>
            <Typography modifiers="heading1" size={fontSizes['header1']}>
              Hello! I’m Aaron, a Edinburgh based Doctor passionate about
              products and impact
            </Typography>
          </Box>
          <Flex gap="16px" justifyContent="space-between">
            <Button>About Me</Button>
            <Button>Projects</Button>
            <TwitterIcon />
            <StackOverflowIcon />
            <LinkedInIcon />
          </Flex>
        </Flex>
        <section>
          <Typography modifiers="heading1" size={fontSizes['header2']}>
            About Me
          </Typography>
          <Typography modifiers="paragraph" size={fontSizes['paragraph']}>
            Hello! I’m Aaron, a Edinburgh based Doctor passionate about products
            and impact
          </Typography>
        </section>
        <section>
          <Typography modifiers="heading1" size={fontSizes['header2']}>
            Projects
          </Typography>
          <ImagePlaceHolder />
        </section>
        <section>
          <Typography modifiers="heading1" size={fontSizes['header2']}>
            Contact Me
          </Typography>
          <Typography modifiers="paragraph" size={fontSizes['paragraph']}>
            Want to get in touch ?
          </Typography>
          <Typography modifiers="paragraph" size={fontSizes['paragraph']}>
            email me at aaronsmith1@tutanota.com
          </Typography>
        </section>
      </Grid>
    </>
  );
};

export default indexPage;
