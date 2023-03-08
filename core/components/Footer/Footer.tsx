import {
  StackOverflowIcon,
  TwitterIcon,
  LinkedInIcon,
  Grid,
  Anchor,
  Typography,
  Flex,
  fontSizes,
  green,
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
      <Grid column="1fr minmax(auto,60ch) 1fr" gap="16px">
        <FooterWrapper>
          <FooterContent>
            <Typography
              modifiers="heading2"
              size={fontSizes['header2']}
              color={green['800']}
            >
              Aaron Smith
            </Typography>
            <Flex flexDirection="column" alignItems="flex-start">
              <Typography
                modifiers="heading3"
                size={fontSizes['header3']}
                color={green['800']}
              >
                Home
              </Typography>
              <Typography
                modifiers="heading3"
                size={fontSizes['header3']}
                color={green['800']}
              >
                About
              </Typography>
              <Typography
                modifiers="heading3"
                size={fontSizes['header3']}
                color={green['800']}
              >
                Projects
              </Typography>
            </Flex>
          </FooterContent>
          <FooterPadding />
          <Flex flexDirection="column" gap="24px">
            <Flex justifyContent="center" gap="48px">
              <Anchor>
                <StackOverflowIcon />
              </Anchor>
              <Anchor>
                {' '}
                <TwitterIcon />
              </Anchor>
              <Anchor>
                {' '}
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
