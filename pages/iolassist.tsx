import styled from 'styled-components';
import Image from 'next/image';

import { LogoIcon, Typography, fontSizes, Flex } from '@/design_system';
import Layout from '../core/Layout/index';
import Grid from '../design_system/Grid/index';
import iolassist from '../public/Images/1.svg';
import iolassist1 from '../public/Images/2.svg';

const IconPadding = styled.div`
  padding-top: 20px;
`;

const IolAssist = () => {
  return (
    <Layout footer>
      <Grid column="1fr minmax(auto,70ch) 1fr" gap="0px 16px">
        <IconPadding>
          <LogoIcon />
          <Typography modifiers="heading1" size={fontSizes['--header1']}>
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
            <Typography margin="16px 0 0 0" modifiers="heading2" size={fontSizes['--header2']}>
              The Project
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              A mobile app to support cataract surgeons with intra-ocular lens
              choices
            </Typography>
          </section>
          <section>
            <Typography modifiers="heading2" size={fontSizes['--header2']}>
              Technical Details
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              A mobile app to support cataract surgeons with intra-ocular lens
              choices
            </Typography>
          </section>
          <section>
            <Typography modifiers="heading2" size={fontSizes['--header2']}>
              Non-technical Details
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              A mobile app to support cataract surgeons with intra-ocular lens
              choices
            </Typography>
          </section>
          <section>
            <Typography modifiers="heading2" size={fontSizes['--header2']}>
              Personal Growth
            </Typography>
            <Typography modifiers="heading3" size={fontSizes['--header3']}>
              What I learned
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              A mobile app to support cataract surgeons with intra-ocular lens
              choices
            </Typography>
            <Typography modifiers="heading3" size={fontSizes['--header3']}>
              What I will take going forwards
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              A mobile app to support cataract surgeons with intra-ocular lens
              choices
            </Typography>
            <Typography modifiers="heading3" size={fontSizes['--header3']}>
              What I would have done differently
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              A mobile app to support cataract surgeons with intra-ocular lens
              choices
            </Typography>
          </section>
        </article>
      </Grid>
    </Layout>
  );
};
export default IolAssist;
