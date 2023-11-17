import { GiPlasticDuck } from "react-icons/gi";
import React, { useEffect, useState } from "react";

export const AnimatedDuck = () => {
  const [rotation, setRotation] = useState(0);

  const rotateDuck = () => {
    setRotation(rotation + 45);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      rotateDuck();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        transform: `rotate(${rotation}deg)`,
        transition: "transform 1s",
      }}
    >
      {rotation}
      <GiPlasticDuck
        size={75}
        style={{
          color: "yellow",
        }}
      />
    </div>
  );
};
