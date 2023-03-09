export default interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  modifiers?: string;
  size?: string;
  margin?: string;
}

export interface IProps {
  modifiers?: string;
  size?: string;
  fontWeight?: string;
  margin?: string;
}
