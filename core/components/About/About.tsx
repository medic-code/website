import { Typography, fontSizes, Grid } from '../../../design_system/index';
import { Section } from './styles';

const About = () => {
  return (
    <Section>
      <Grid column="1fr minmax(auto,70ch) 1fr">
        <Typography
          id="about"
          modifiers="heading1"
          size={fontSizes['--header2']}
        >
          About Me
        </Typography>

        <Typography
          modifiers="paragraph"
          size={fontSizes['--paragraph']}
          color="hsl(var(--palette-gray-75))"
        >
          Hello! I’m Aaron, a Edinburgh based Doctor passionate about products
          and impact
        </Typography>
      </Grid>
    </Section>
  );
};

export default About;
