interface UnderlineAnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  modifiers?: string[] | 'underline';
  size?: string;
  margin?: string;
}

export default UnderlineAnchorProps;
