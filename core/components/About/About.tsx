import {
  Typography,
  fontSizes,
  Grid,
  Box,
  Anchor,
} from '../../../design_system/index';
import { Section, StyledCV } from './styles';

const About = () => {
  return (
    <Section>
      <Grid column="1fr minmax(auto,70ch) 1fr" gap="16px">
        <Box>
          <Typography
            id="about"
            modifiers="heading1"
            size={fontSizes['--header1']}
          >
            About Me
          </Typography>

          <Typography
            size={fontSizes['--paragraph']}
            color="hsl(var(--palette-gray-75))"
          >
            I{"'"}ve been a clinician for over eight years with experience in
            over 12 specialities. I{"'"}ve also been a Course Lead in the Online
            MSc Internal Medicine for three years teaching Acute Medicine and
            Clinical Skills Principles.
          </Typography>
          <Typography
            size={fontSizes['--paragraph']}
            color="hsl(var(--palette-gray-75))"
          >
            I value growth and collaboration with others, working with amazing
            people gives me energy. Life should be a learning journey to be
            explored.
          </Typography>

          <Typography
            size={fontSizes['--paragraph']}
            color="hsl(var(--palette-gray-75))"
          >
            I{"'"}ve most recently been a Clinical Lead and Product Owner at a
            Healthcare Tech company in the cancer space. Helping steer NHS
            Stakeholders through implementing digital products as well as a role
            in clinical governance.
          </Typography>

          <Typography
            size={fontSizes['--paragraph']}
            color="hsl(var(--palette-gray-75))"
          >
            For over two years, I have been doing full-stack web development
            with experience in React, React Native and MongoDB. I am passionate
            about bringing change through technology to user onboarding all the
            way through to implementation.
          </Typography>
          <Anchor
            href="https://drive.google.com/file/d/1IVVA6FRjpMTf_GEHvwb-UZ0ESLu04DXE/view?usp=sharing"
            target="_blank"
            rel="noreferrer noop"
          >
            <StyledCV>Curriculum Vitae</StyledCV>
          </Anchor>
        </Box>
      </Grid>
    </Section>
  );
};

export default About;
