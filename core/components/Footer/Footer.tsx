import {
  StackOverflowIcon,
  TwitterIcon,
  LinkedInIcon,
  Grid,
  Anchor,
  Typography,
  Flex,
  fontSizes,
} from '../../../design_system/index';

import {
  FooterWrapper,
  FooterContent,
  FooterLine,
  FooterPadding,
} from './Styles';

const Footer = () => {
  return (
    <footer>
      <FooterLine />
      <Grid column="1fr minmax(auto,70ch) 1fr" gap="16px">
        <FooterWrapper>
          <FooterContent>
            <Typography
              modifiers="heading2"
              size={fontSizes['--header2']}
              color="hsl(187 15% 87%)"
            >
              Aaron Smith
            </Typography>
            <Flex flexDirection="column" alignItems="flex-start">
              <Anchor href="/">
                <Typography modifiers="heading3" size={fontSizes['--header3']}>
                  Home
                </Typography>
              </Anchor>
              <Anchor modifiers="underline" href="#about">
                <Typography modifiers="heading3" size={fontSizes['--header3']}>
                  About
                </Typography>
              </Anchor>
              <Anchor href="#projects">
                <Typography modifiers="heading3" size={fontSizes['--header3']}>
                  Projects
                </Typography>
              </Anchor>
            </Flex>
          </FooterContent>
          <Flex flexDirection="column" gap="16px">
            <Flex justifyContent="center" gap="48px">
              <Anchor
                href="https://stackoverflow.com/users/12566046/aarons?tab=profile"
                target="_blank"
                rel="noopener noreferrer"
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
                href="http://www.linkedin.com/in/dr-aaron-smith"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </Anchor>
            </Flex>
            <Typography>© {new Date().getFullYear()} - Aaron Smith</Typography>
          </Flex>
        </FooterWrapper>
        <FooterPadding />
      </Grid>
    </footer>
  );
};

export default Footer;
