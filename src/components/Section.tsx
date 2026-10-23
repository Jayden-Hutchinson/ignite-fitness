type Props = {
  children?: React.ReactNode;
  className?: string;
};

function Section({ children, className }: Props) {
  return (
    <div
      className={`${className} relative overflow-x-clip px-[5vw] py-25 md:px-[10vw] md:py-50`}
    >
      {children}
    </div>
  );
}

export default Section;
