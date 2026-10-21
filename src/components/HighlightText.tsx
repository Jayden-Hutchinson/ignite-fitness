import Flex from "./Flex";

type Props = {
  text: string;
  className?: string;
};

function HighlightText({ text, className }: Props) {
  const [first, second] = text.split(" ");

  return (
    <Flex className={`gap-4 text-3xl font-bold md:text-6xl ${className}`}>
      <span>{first}</span>
      <span className="text-orange-500">{second}</span>
    </Flex>
  );
}

export default HighlightText;
