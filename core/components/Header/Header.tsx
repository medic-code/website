import React from 'react';
import {
  LogoIcon,
  HamburgerIcon,
  Grid,
  Anchor,
  Typography,
} from '../../../design_system/index';
import { fontSizes } from '../../../design_system/lib';
import styled from 'styled-components';
import {
  HeaderContent,
  HeaderWrapper,
  HeaderPadding,
  Flex,
  TitleFlex,
  IconHidden,
} from './Styles';

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <Grid column="1fr minmax(auto,70ch) 1fr" gap="16px">
          <HeaderContent>
            <Flex>
              <Anchor size="16px" href="/">
                <LogoIcon />
              </Anchor>
            </Flex>
            <TitleFlex>
              <Typography
                modifiers="modifiedHeading1"
                size={fontSizes['--header1']}
                color="var(--palette-green-00)"
                margin="0px 0px 0px 0px"
              >
                Aaron Smith
              </Typography>
              <Typography modifiers="heading4" size={fontSizes['--header3']}>
                Doctor / Software Developer
              </Typography>
            </TitleFlex>
          </HeaderContent>
        </Grid>
        <HeaderPadding />
      </HeaderWrapper>
    </>
  );
};

export default Header;
