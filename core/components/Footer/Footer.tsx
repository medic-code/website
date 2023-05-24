import {
  StackOverflowIcon,
  TwitterIcon,
  LinkedInIcon,
  GitHubIcon,
  Grid,
  Anchor,
  Typography,
  Flex,
  fontSizes,
  Heading1,
  Heading3,
} from '../../../design_system/index';

import {
  FooterWrapper,
  FooterContent,
  FooterLine,
  FooterPadding,
} from './Styles';

import { BASE_URL } from '../../../core/constants';

const Footer = () => {
  return (
    <footer>
      <FooterLine />
      <Grid column="1fr minmax(auto,70ch) 1fr" gap="16px">
        <FooterContent>
          <Heading1 margin="0.5rem 0 0.5rem 0">Aaron Smith</Heading1>
          <Flex flexDirection="column" alignItems="flex-start">
            <Anchor href="/">
              <Heading3 margin="0.5rem 0 0.5rem 0">Home</Heading3>
            </Anchor>
            <Anchor modifiers="underline" href={BASE_URL + '/#about'}>
              <Heading3 margin="0.5rem 0 0.5rem 0">About</Heading3>
            </Anchor>
            <Anchor href={BASE_URL + '/#projects'}>
              <Heading3 margin="0.5rem 0 0.5rem 0">Projects</Heading3>
            </Anchor>
          </Flex>
        </FooterContent>
        <Flex flexDirection="column" gap="16px">
          <Flex justifyContent="center" gap="48px">
            <Anchor
              href="https://stackoverflow.com/users/12566046/aarons?tab=profile"
              target="_blank"
              rel="noopener noreferrer"
              margin="0 0 0 auto"
            >
              <StackOverflowIcon />
            </Anchor>
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
          <Typography>© {new Date().getFullYear()} - Aaron Smith</Typography>
        </Flex>
        <FooterPadding />
      </Grid>
    </footer>
  );
};

export default Footer;
