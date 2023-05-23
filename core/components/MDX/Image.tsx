import Image, { ImageProps } from 'next/image';
import styled from 'styled-components';
import { Typography, fontSizes } from '@/design_system';

const StyledFigure = styled.figure`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
`;

const ImageStyle = styled.div`
  margin: auto;
  max-width: 100%;
  max-height: 90%;
`;
const MDXImage = (props: ImageProps) => {
  return (
    <>
      <ImageStyle>
        <Image {...props} quality={100} alt={props.alt} />
        <StyledFigure>
          <Typography size={fontSizes['--paragraph']}>{props.alt}</Typography>
        </StyledFigure>
      </ImageStyle>
    </>
  );
};

export default MDXImage;
