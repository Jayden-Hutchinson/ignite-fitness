import { useState } from "react";

type Props = {
  text: string[];
  className?: string;
  onClick?: () => void;
};

function Expandable({ text, className, onClick }: Props) {
  const [expanded, setExpanded] = useState(false);

  const [first, ...rest] = text;

  function handleClick() {
    setExpanded((prev) => !prev);

    if (!onClick) {
      return;
    }

    onClick();
  }

  return (
    <div className={className}>
      <p className="mb-4">{first}</p>

      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden" aria-hidden={!expanded}>
          {rest.map((paragraph, index) => (
            <p
              key={index}
              className={`mb-4 transition-opacity duration-2000 ${
                expanded ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transitionDelay: expanded ? `${index * 200}ms` : "0ms",
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <button
        onClick={handleClick}
        className="cursor-pointer py-2 text-sm text-orange-500"
      >
        {expanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}

export default Expandable;
