import styled from 'styled-components';

export const HeaderContent = styled.div`
  grid-column: 2 / 3;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1;
  padding-top: 20px;
`;

export const TitleFlex = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HeaderWrapper = styled.header`
  padding: 0 32px;
`;

export const IconHidden = styled.div`
  display: none;

  @media (max-width: 550px) {
    display: block;
  }
`;
