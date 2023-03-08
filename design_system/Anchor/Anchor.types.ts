interface UnderlineAnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  modifiers?: string[] | 'underline';
  size?: string;
}

export default UnderlineAnchorProps;
