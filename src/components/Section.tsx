type Props = {
  children?: React.ReactNode;
  className?: string;
};

function Section({ children, className }: Props) {
  return (
    <div className={`${className} px-[10vw] pt-50 md:px-[20vw] md:pt-100`}>
      {children}
    </div>
  );
}

export default Section;
