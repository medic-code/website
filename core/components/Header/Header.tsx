import React from 'react';
import {
  LogoIcon,
  HamburgerIcon,
  Grid,
  Anchor,
  Typography,
  Heading1,
  Heading4,
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
          </HeaderContent>
        </Grid>
        <HeaderPadding />
      </HeaderWrapper>
    </>
  );
};

export default Header;
