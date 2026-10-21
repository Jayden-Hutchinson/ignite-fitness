type Props = {
  children: React.ReactNode;
  className?: string;
};

function Flex({ children, className }: Props) {
  return <div className={`flex min-w-0 ${className}`}>{children}</div>;
}

export default Flex;
