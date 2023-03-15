import Image, { ImageProps } from 'next/image';
import styled from 'styled-components';
import { Typography, fontSizes } from '@/design_system';

const StyledFigure = styled.figure`
  margin-bottom: 1rem;
`;

const MDXImage = (props: ImageProps) => {
  return (
    <>
      <Image {...props} quality={70} />
      <StyledFigure>
        <Typography size={fontSizes['--paragraph']}>{props.alt}</Typography>
      </StyledFigure>
    </>
  );
};

export default MDXImage;
