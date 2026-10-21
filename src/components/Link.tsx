type Props = {
  href?: string;
  children?: React.ReactElement;
  className?: string;
};

function Link({ children, href, className }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className}`}
    >
      {children}
    </a>
  );
}

export default Link;
