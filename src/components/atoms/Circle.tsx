type CircleProps = {
  color?: "pink" | "blue" | "purple" | "orange";
  className: string;
};

const variantsColor = {
  pink: "circle-pink",
  blue: "circle-blue",
  purple: "circle-purple",
  orange: "circle-orange",
};

function Circle({ color = "pink", className }: CircleProps) {
  return (
    <div
      className={`absolute rounded-full ${variantsColor[color]} ${className}`}
    />
  );
}

export default Circle;
