type Props = {
  children: string;
  highlight?: string;
  className?: string;
};

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function Heading({ children, highlight, className = "" }: Props) {
  if (!highlight) return <h1 className={className}>{children}</h1>;

  const parts = children.split(new RegExp(`(${escapeRegExp(highlight)})`, "i"));
  return (
    <h1
      className={`font-manrope text-center text-2xl font-bold md:text-6xl ${className}`}
    >
      {parts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={i} className="text-accent">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </h1>
  );
}

export default Heading;
