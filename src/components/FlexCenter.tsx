type Props = {
  children?: React.ReactNode;
  className?: string;
};

function FlexCenter({ children, className }: Props) {
  return (
    <div className={`flex min-w-0 items-center justify-center ${className}`}>
      {children}
    </div>
  );
}

export default FlexCenter;
