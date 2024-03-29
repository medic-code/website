import Header from '../core/components/Header';
import Footer from '../core/components/Footer';
import About from '../core/components/About';
import Image from 'next/image';
import iolassist from '../public/Images/1.svg';
import iolassist1 from '../public/Images/2.svg';
import Link from 'next/link';
import { dateToMonthYear, getYearFromDate } from '@/lib/dates';

import { Post } from '../types/post';

import {
  Grid,
  Typography,
  Box,
  Flex,
  fontSizes,
  Button,
  TwitterIcon,
  StackOverflowIcon,
  LinkedInIcon,
  Anchor,
  GitHubIcon,
} from '../design_system/index';
import { useState, useEffect } from 'react';

import styled from 'styled-components';
import { getAllFilesFrontMatter } from '@/lib/mdx';

const Break = styled.div`
  display: none;
  flex-basis: 100%;
  height: 0;
  @media (max-width: 550px) {
    display: revert;
  }
`;

const Block = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
  color: hsl(var(--palette-gray-65));
  background-color: transparent;
  margin-left: -16px;
  padding-left: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  margin-top: -16px;
  margin-bottom: -16px;
  border-radius: 8px;

  @media (hover: hover) {
    &:hover {
      background-color: hsl(var(--palette-blue-05));
      color: hsl(var(--palette-blue-55));
    }
  }
`;

const StyledAnchor = styled(Anchor)`
  margin: 0 0 0 auto;
  @media (max-width: 550px) {
    margin: 0;
  }
`;

const StyledDate = styled(Typography)`
  margin: 0px;
  font-size: var(--paragraph);
  min-width: 60px;
`;

interface Props {
  posts: Post[];
}

const handleClick = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const IndexPage = (props: Props) => {
  const { posts } = props;

  const sortedByYearPosts = posts.sort((post1, post2) =>
    getYearFromDate(post1.date) > getYearFromDate(post2.date) ? -1 : 1
  );

  const year = 0;

  return (
    <>
      <Header />
      <Grid column="1fr minmax(auto, 70ch) 1fr" gap="48px 16px">
        <section>
          <Typography
            className="testComponentClass"
            modifiers="heading1"
            size={fontSizes['--header1']}
          >
            Hello I’m Aaron, an Edinburgh based Doctor passionate about creating
            products and providing impact.
          </Typography>
          <Flex gap="16px" justifyContent="flex-start">
            {/* <Button onClick={() => handleClick('about')}>About Me</Button>
            <Button onClick={() => handleClick('projects')}>Projects</Button> */}
            <Break></Break>
            <StyledAnchor
              href="https://stackoverflow.com/users/12566046/aarons?tab=profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StackOverflowIcon />
            </StyledAnchor>
            <Anchor
              href="http://www.twitter.com/aaronsmithdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </Anchor>
            <Anchor
              href="http://www.github.com/medic-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </Anchor>
            <Anchor
              href="http://www.linkedin.com/in/dr-aaron-smith"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </Anchor>
          </Flex>
        </section>
        <About />
        {/* <section>
          <Typography modifiers="heading1" size={fontSizes['--header1']}>
            All Articles
          </Typography>
          <ul style={{ padding: 0 }}>
            {sortedByYearPosts
              .filter((post) => post.type === 'article')
              .map((post) => {
                const currentYear = new Date(post.date).getFullYear();
                let printYear;
                if (currentYear !== year) {
                  printYear = true;
                  year = currentYear;
                } else {
                  printYear = false;
                }
                return (
                  <li
                    key={post.slug}
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      marginBottom: '1rem',
                    }}
                  >
                    {printYear ? (
                      <Typography
                        modifiers="header3"
                        size={fontSizes['--header3']}
                        margin="32px 0px"
                        fontWeight="var(--semibold)"
                      >
                        {currentYear}
                      </Typography>
                    ) : null}

                    <Anchor href={`/posts/${post.slug}`}>
                      <Block>
                        <StyledDate>
                          {dateToMonthYear(
                            new Date(Date.parse(`${post.date}`)).toString()
                          )}
                        </StyledDate>
                        {post.title}
                      </Block>
                    </Anchor>
                  </li>
                );
              })}
          </ul>
        </section> */}
        <section>
          <Typography modifiers="heading1" size={fontSizes['--header1']}>
            Book Reviews
          </Typography>
          <ul style={{ padding: '0px' }}>
            {sortedByYearPosts
              .filter((post) => post.type === 'blog')
              .map((post) => {
                return (
                  <li
                    key={post.slug}
                    style={{
                      padding: '0px',
                      marginBottom: '1rem',
                      listStyle: 'none',
                    }}
                  >
                    <Anchor href={`/posts/${post.slug}`}>
                      <Block>{post.title}</Block>
                    </Anchor>
                  </li>
                );
              })}
          </ul>
        </section>
        <section>
          <Typography
            id="projects"
            modifiers="heading1"
            size={fontSizes['--header1']}
          >
            Projects
          </Typography>
          <Anchor href="/iolassist">
            <Typography
              modifiers="modifiedHeading2"
              size={fontSizes['--header2']}
              className="navtest"
              color="hsl(var(--palette-green-75))"
            >
              IOL Assist
            </Typography>
            <Typography size={fontSizes['--paragraph']}>
              A mobile app to support cataract surgeons with intra-ocular lens
              choices
            </Typography>
            <Flex gap="16px" justifyContent="center" align-items="center">
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
            </Flex>{' '}
          </Anchor>
        </section>
        <section>
          <Typography modifiers="heading1" size={fontSizes['--header1']}>
            Contact Me
          </Typography>
          <Typography modifiers="paragraph" size={fontSizes['--paragraph']}>
            Want to get in touch ?
          </Typography>
          <Typography modifiers="paragraph" size={fontSizes['--paragraph']}>
            email me at aaronsmith1@tutanota.com
          </Typography>
        </section>
      </Grid>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter();
  return { props: { posts } };
}

export default IndexPage;
