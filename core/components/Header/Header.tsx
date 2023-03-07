import React from 'react';
import {
  LogoIcon,
  HamburgerIcon,
  Grid,
  Anchor,
  Typography,
  green,
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
              <IconHidden>
                <Anchor size="16px" href="/">
                  <HamburgerIcon />
                </Anchor>
              </IconHidden>
            </Flex>
            <TitleFlex>
              <Typography
                modifiers="heading1"
                size={fontSizes['header1']}
                color={green[800]}
              >
                Aaron Smith
              </Typography>
              <Typography modifiers="heading4" size={fontSizes['header3']}>
                Doctor / Software Developer
              </Typography>
            </TitleFlex>
          </HeaderContent>
        </Grid>
        <HeaderPadding/>
      </HeaderWrapper>
    </>
  );
};

export default Header;
