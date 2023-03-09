type alignItems = 'baseline' | 'center' | 'flex-start' | 'flex-end' | 'stretch';

type alignContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'space-between'
  | 'space-around';

type flexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

type flexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

type justifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export interface FlexProps {
  alignItems?: alignItems;
  alignContent?: alignContent;
  flexDirection?: flexDirection;
  gap?: string;
  justifyContent?: justifyContent;
  wrap?: flexWrap;
}
