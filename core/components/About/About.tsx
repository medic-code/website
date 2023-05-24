import {
  Typography,
  fontSizes,
  Grid,
  Box,
  Anchor,
  Heading1,
} from '../../../design_system/index';
import { Section, StyledCV } from './styles';

const About = () => {
  return (
    <Section>
      <Grid column="1fr minmax(auto,70ch) 1fr" gap="16px">
        <Box>
          <Heading1>About Me</Heading1>
          <Typography
            size={fontSizes['--paragraph']}
            color="hsl(var(--palette-gray-75))"
          >
            I{"'"}ve been a clinician for over eight years with experience in
            over 12 specialities. In addition, I was course Lead in the Online
            MSc Internal Medicine for three years teaching Acute Medicine and
            Clinical Skills Principles to a worldwide audience.
          </Typography>
          <Typography
            size={fontSizes['--paragraph']}
            color="hsl(var(--palette-gray-75))"
          >
            Most recently I have been a Clinical Lead at a healthcare tech
            company in the cancer space supporting primary care users and NHS
            Stakeholders through implementing digital products.
          </Typography>

          <Typography
            size={fontSizes['--paragraph']}
            color="hsl(var(--palette-gray-75))"
          >
            I value growth and collaboration with others, working with amazing
            people gives me energy. Outside work, I bake, travel, play the
            guitar, write and push myself to learn new things. In my spare time,
            I taught myself full-stack web development with experience in
            JavaScript, React, React Native and MongoDB.
          </Typography>

          <Typography
            size={fontSizes['--paragraph']}
            color="hsl(var(--palette-gray-75))"
          >
            I am passionate about bringing healthcare impact through technology.
            If anyone wants to chat about healthcare, code, or ideas for
            projects always happy to be contacted to chat!
          </Typography>
          {/* <Anchor
            href="https://drive.google.com/file/d/1IVVA6FRjpMTf_GEHvwb-UZ0ESLu04DXE/view?usp=sharing"
            target="_blank"
            rel="noreferrer noop"
          >
            <StyledCV>Curriculum Vitae</StyledCV>
          </Anchor> */}
        </Box>
      </Grid>
    </Section>
  );
};

export default About;
