type CircleProps = {
  size: number;
  top: number;
  left: number;
  color?: "pink" | "blue" | "purple" | "orange";
};

const variantsColor = {
  pink: "circle-pink",
  blue: "circle-blue",
  purple: "circle-purple",
  orange: "circle-orange",
};

function Circle({ size, top, left, color = "pink" }: CircleProps) {
  return (
    <div
      className={`absolute rounded-full ${variantsColor[color]}`}
      style={{
        width: size,
        height: size,
        top,
        left,
      }}
    />
  );
}

export default Circle;
