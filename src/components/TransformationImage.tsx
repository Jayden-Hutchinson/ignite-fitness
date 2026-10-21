type Props = {
  src?: string;
};

function TransformationImage({ src }: Props) {
  return <img src={src} className="rounded-lg" />;
}

export default TransformationImage;
