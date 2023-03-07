type justifyItems = 'start' | 'end' | 'center' | 'stretch';

type alignItems = 'start' | 'end' | 'center' | 'stretch' | 'baseline';

type justifyContent =
  | 'start'
  | 'end'
  | 'center'
  | 'stretch'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

type alignContent =
  | 'start'
  | 'end'
  | 'center'
  | 'stretch'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

export interface GridProps {
  gap?: string;
  alignItems?: alignItems;
  justifyContent?: justifyContent;
  alignContent?: alignContent;
  justifyItems?: justifyItems;
  column: string;
  rows?: string;
}
