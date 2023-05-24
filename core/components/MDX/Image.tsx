import Image, { ImageProps } from 'next/image';
import styled from 'styled-components';
import { Typography, fontSizes } from '@/design_system';

const StyledFigure = styled.figure`
  margin: 0;
  display: flex;
  justify-content: center;
  font-style: italic;
`;

const ImageStyle = styled.div`
  margin: auto;
  width: 85%;
`;
const MDXImage = (props: ImageProps) => {
  return (
    <>
      <ImageStyle>
        <Image {...props} quality={100} alt={props.alt} />
        <StyledFigure>
          <Typography margin="1rem 0 1rem 0" size={fontSizes['--paragraph']}>
            {props.alt}
          </Typography>
        </StyledFigure>
      </ImageStyle>
    </>
  );
};

export default MDXImage;
