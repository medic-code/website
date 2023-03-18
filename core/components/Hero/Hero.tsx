import {
  Typography,
  fontSizes,
  Anchor,
  LogoIcon,
  Flex,
  BackArrow,
  Pill,
} from '../../../design_system/index';

import styled from 'styled-components';
import { HeroProps } from './types';

const IconPadding = styled.div`
  padding-top: 20px;
`;

const HeroPadding = styled.div`
  padding-bottom: 20px;
`;

export const Hero = ({ title, date, lastUpdated }: HeroProps) => {
  return (
    <>
      <Flex flexDirection="column" alignItems="flex-start" gap="32px">
        <IconPadding>
          <Anchor href="/">
            <LogoIcon />
          </Anchor>
        </IconPadding>
        <Anchor
          href="/"
          className="testbtn"
          color="hsl(var(--palette-gray-65))"
        >
          <Flex alignItems="center">
            <BackArrow />
            Home
          </Flex>
        </Anchor>
      </Flex>
      <IconPadding>
        <Typography
          margin="0px 0px 0px 0px"
          color="hsl(var(--palette-gray-65))"
          modifiers="heading1"
          size={fontSizes['--header1']}
        >
          {title}
        </Typography>
      </IconPadding>
      <Flex flexDirection="column" alignItems="baseline">
        <Typography
          color="hsl(var(--palette-gray-65));"
          fontWeight="--semibold"
          margin="0 0 8px 0"
          size={fontSizes['--caption']}
        >
          Posted: {date}
        </Typography>
        <Pill>Last Updated: {lastUpdated}</Pill>
      </Flex>
      <HeroPadding></HeroPadding>
    </>
  );
};
