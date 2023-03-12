import styled from 'styled-components';
import Image from 'next/image';

import {
  LogoIcon,
  Typography,
  fontSizes,
  Flex,
  Anchor,
  BackArrow,
} from '@/design_system';
import Layout from '../core/Layout/index';
import Grid from '../design_system/Grid/index';
import iolassist from '../public/Images/1.svg';
import iolassist1 from '../public/Images/2.svg';
import Link from 'next/link';

const IconPadding = styled.div`
  padding-top: 20px;
`;

const IolAssist = () => {
  return (
    <Layout footer>
      <Grid column="1fr minmax(auto,70ch) 1fr" gap="0px 16px">
        <IconPadding>
          <Flex flexDirection="column" alignItems="flex-start" gap="32px">
            <Anchor href="/">
              <LogoIcon />
            </Anchor>
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
          <Typography
            margin="16px 0px 0px 0px"
            fontWeight="var(--bold)"
            size={fontSizes['--header1']}
            color="hsl(var(--palette-green-75))"
          >
            IOL Assist
          </Typography>
        </IconPadding>

        <article>
          <section>
            <Typography size={fontSizes['--paragraph']}>
              A mobile app to support cataract surgeons with intra-ocular lens
              choices
            </Typography>
            <Flex gap="16px" justifyContent="center">
              <Image
                src={iolassist}
                alt="IOL Assist Lens"
                width={208}
                height={450}
                style={{
                  border: '1px solid hsl(var(--palette-gray-10))',
                  borderRadius: '30px',
                }}
              />
              <Image
                src={iolassist1}
                alt="IOL Assist Viscoelastic"
                width={208}
                height={450}
                style={{
                  border: '1px solid hsl(var(--palette-gray-10))',
                  borderRadius: '30px',
                }}
              />
            </Flex>
          </section>
          <section>
            <Typography
              margin="16px 0px 0px 0px"
              fontWeight="var(--semibold)"
              size={fontSizes['--header1']}
              color="hsl(var(--palette-green-75))"
            >
              The Project
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              Cataract has consistently been the main contributor to blindness
              in adults over 50 years old. Of the 33.6 million cases of
              blindness in the world, 45% are due to cataracts (
              <Anchor
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.thelancet.com/journals/langlo/article/PIIS2214-109X(20)30489-7/fulltext"
                modifiers={['underline']}
              >
                Lancet Glob Health 2021; 9: e144–60
              </Anchor>
              ).
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              Seeing better greatly improves the health of the patient, as well
              as their independence, autonomy and self-realisation. Cataract
              surgery can help to attain precisely these.
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              The surgery at a basic level is to replace the cataract with an
              artificial lens that allows the patient to see. Each intraocular
              lens (IOL) is different for each individual and must be carefully
              calculated taking into account measurements of the eye as well as
              data on the lenses to be placed. An adequate calculation will lead
              to adequate refractive outcomes.
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              The process of calculating the lens varies greatly depending on
              the patient. There are devices that can perform the calculation,
              but they are not available to all ophthalmologists. Carrying out
              the calculation manually involves a series of data that is
              sometimes difficult to obtain. There are web pages dedicated to
              displaying this data, but their design is not very intuitive.
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              At the same time, if it is necessary to recalculate or change a
              lens in the operating room, it is difficult to do it with the
              technology we have today. This can lead to choosing the wrong
              lens, resulting in less than optimal vision for the patient. In
              addition, this is a substantial time waster and can get in the way
              of workflow in the operating room or office.
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              IOL Assist{"'"}s aim is to provide the key information to perform
              IOL calculations in a fast, concise and reliable way. This will
              help doctors with a wide variety of lenses at their disposal, or
              those who are constantly changing locations.
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              Additional features of this app include an library of
              viscoelastics, and Links to the official pages of both IOL and
              Viscoelastic products as well as links to well known calculators
            </Typography>
          </section>
          <section>
            <Typography modifiers="heading1" size={fontSizes['--header1']}>
              Technical Details
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              The application uses React Native and Expo on the frontend and
              Express and MongoDb on the backend. React Native and Expo was
              chosen due to its large 3rd party support, cross platform
              availability and easy to get setup and start building. Having some
              experience of React previously made learning React Native easier.
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              Whilst for large applications Expo would not be particularly best
              practice particularly when performance is absolute requirement. In
              this first iteration of the application Expo seemed well suited
              for the job.
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              MongoDb is easy to get set up with hosting and its intuitive query
              language. Additionally modelling of data based changed upon
              discussions which made technical changes easy to make. knowledge
              and so made it easy to change the schema when necessary. Also the
              aggregate shape of the data meant that MongoDb was well suited.
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              The API has 3 main end-points to the backend for reading, adding
              and modifying lens data.{' '}
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              The infrastructure of the application is a monolith which suited
              the scale of the application currently.{' '}
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              The backend was hosted on railway.app due to ease getting set up
              and its integration with Github meant that on push it would
              trigger a new deployment which suited development. The frontend
              deployment is currently pending. Whilst submitting to the Apple
              App Store is a known process, there are data and legal
              implications that need addressed prior to launching.
            </Typography>
          </section>
          <section>
            <Typography modifiers="heading1" size={fontSizes['--header1']}>
              Personal Growth
            </Typography>
            <Typography modifiers="heading3" size={fontSizes['--header3']}>
              What I learned
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              This project was the first time thinking in terms of a product. It
              taught me how complicated creating a product can be and requires
              many iterations to get to something of value.
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              The implementation of an idea is complex, however the what of a
              product is the most important aspect to understand. This can be
              done before any code is written.
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              The project was designed from scratch and allowed me to get to
              grips with Figma and to understand some core design principles.
              The design of an idea allows you to execute much more efficiently.
              Once design has been agreed the implementation becomes a lot
              easier.
            </Typography>
            <Typography modifiers="heading3" size={fontSizes['--header3']}>
              What I would done differently
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              Its better to create a minimal slice and get feedback and iterate
              than to try and build large chunks.
            </Typography>

            <Typography modifiers="heading3" size={fontSizes['--header3']}>
              What I would do in the future
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              In hindsight, I spend weeks of reading and planning which couldve
              been better spent in the creating. Whilst some of it was useful to
              have ahead of time, the analyse paralysis impeded progress.
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              In the future it would be better to create user stories to focus
              the minimum requirements necessary. Whilst the technical
              challenges were in part learning opportunities, it wouldve been
              much better to have got design prototype feedback prior to coding.
            </Typography>
          </section>
        </article>
      </Grid>
    </Layout>
  );
};
export default IolAssist;
