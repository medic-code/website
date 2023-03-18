interface OrderedListProps extends React.OlHTMLAttributes<HTMLOListElement> {
  variant?: 'ordered';
}

interface UnorderedListProps extends React.HTMLAttributes<HTMLUListElement> {
  variant?: 'unordered';
}

export type ListTypes = OrderedListProps | UnorderedListProps;
