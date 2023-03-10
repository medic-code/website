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
            <Anchor href="/" className="testbtn">
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
            <Flex gap="16px">
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
              blindness in the world, 45% are due to cataracts (Lancet Glob
              Health 2021; 9: e144–60).
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              The impact of cataract surgery on the quality of life of patients
              is undeniable. The removal of cataract does not only improve
              visual-specific functions, such as the capacity to read clearly or
              drive, but also clearly influences the social behaviour and
              emotional status of patients (Akpolat, Ther Adv Ophthalmol. 2022
              Jan-Dec). Cataract surgery has been linked with lower risk for
              total and cause-specific mortality (Tseng, JAMA Ophthalmol. 2018
              Jan; 136(1): 3–10.) Improving visual acuity of patients helps with
              their mobility, avoiding accidents and falls (Gutierrez Robledo, J
              Ophthalmol. 2021 Mar 15;2021:2169571) Improved visual stimuli is
              significantly associated with lower risk of dementia development
              (Lee, JAMA Intern Med 2022 Feb 1;182(2):134-141).
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              Seeing better greatly improves the health of the patient, as well
              as their independence, autonomy and self-realisation. Cataract
              surgery can help to attain precisely these.
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              Technological advances have allowed the surgery to be less
              invasive and to be performed in 15 to 30 minutes. The essentials
              of the surgery is to replace the cataract with an artificial lens
              that allows the patient to see. Each intraocular lens (IOL) is
              different for each individual and must be carefully calculated
              taking into account measurements of the eye as well as data on the
              lenses to be placed. An adequate calculation will lead to adequate
              refractive outcomes.
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              Despite advances, the process of calculating the lens varies
              greatly depending on the patient. There are devices that can
              perform the calculation, but they are not available to all
              ophthalmologists. Carrying out the calculation manually involves a
              series of data that is sometimes difficult to obtain. There are
              web pages dedicated to displaying this data, but their design is
              not very intuitive. At the same time, if it is necessary to
              recalculate or change a lens in the operating room, it is
              difficult to do it with the technology we have today. This can
              lead to choosing the wrong lens, resulting in less than optimal
              vision for the patient. In addition, this is a substantial time
              waster and can get in the way of workflow in the operating room or
              office.
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              IOL Assist aims to provide the key information to perform IOL
              calculations in a fast, concise and reliable way. This will mainly
              help doctors with a wide variety of lenses at their disposal, or
              those who are constantly changing locations. Additional features
              of this app include: -Quick review of viscoelastics -Links to the
              official pages of the mentioned products -Links to other
              calculators
            </Typography>
          </section>
          <section>
            <Typography modifiers="heading1" size={fontSizes['--header1']}>
              Technical Details
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              The application is a full-stack application using React Native and
              Expo on the frontend and Express and MongoDb on the backend. React
              Native and Expo was chosen due to its large 3rd party support,
              cross platform availability and easy to get setup and start
              building. Having some experience of React previously made learning
              React Native easier.
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              Whilst for large applications Expo would not be particularly best
              practice particularly when performance is absolute requirement. In
              this application which forms a minimum of capabilities Expo seemed
              well suited for the job.
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              Using MongoDb was a choice that was easy to get set up and the
              modelling of data based upon discussions changed with new
              knowledge and so made it easy to change the schema when necessary.
              MongoDb is well suited towards aggregate data which suited the
              data requirements of IOL lens data.
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              The API itself was relatively simple given that most of the
              requests were read operations. There were 3 main end-points to the
              backend for reading, adding and modifying lens data.{' '}
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              The infrastructure of the application is a monolith which suited
              the scale of the application currently.{' '}
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              The backend was hosted on railway.app due to ease getting set up
              and its integration with Github meant that on push it would
              trigger a new deployment which suited development. The frontend
              deployment is currently pending, whilst submitting to the Apple
              App Store is a known process, there are a few aspects to the
              application that prevent submitting this at the current time.
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
              This project was a first of many for me personally. It taught me
              how complicated creating a product can be and requires many
              iterations to get to something of value.
            </Typography>
            <Typography modifiers="heading3" size={fontSizes['--header3']}>
              What I wouldve done differently
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              That creating something takes some planning but should not be
              planned to nth degree. Its better to create a minimal slice and
              get feedback and iterate than to try and build large chunks.
            </Typography>

            <Typography modifiers="heading3" size={fontSizes['--header3']}>
              What I wouldve done differently
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              In hindsight I spend weeks of reading and planning which couldve
              been better spent in the creating phase. Whilst some of it was
              useful to have ahead of time, the analyse paralysis impeded
              progress. In the future it would be better to create user stories
              to focus the minimum requirements necessary. Whilst the technical
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
