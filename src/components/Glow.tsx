type Props = {
  size?: number;
  blur?: number;
  color?: string;
  opacity?: number;
  className?: string;
};

function Glow({ size, blur, color, opacity, className }: Props) {
  return (
    <div
      className={`pointer-events-none absolute -z-10 rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        opacity,
        filter: `blur(${blur}px)`,
      }}
    />
  );
}

export default Glow;
