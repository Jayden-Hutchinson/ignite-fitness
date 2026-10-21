type Props = {
  children?: React.ReactNode;
  className?: string;
};

function Section({ children, className }: Props) {
  return (
    <div className={`${className} px-[10vw] pt-100 md:px-[20vw]`}>
      {children}
    </div>
  );
}

export default Section;
