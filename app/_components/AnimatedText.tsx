import React from "react";

const quote = {
  inital: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      dleay: 0.5,
    },
  },
};

const AnimatedText = ({
  text,
  className = "",
}: {
  text: string;
  className: string;
}) => {
  return (
    <h2>
      {text.split(" ").map((word, index) => (
        <span key={word + "-" + index} className=''>
          {word}&nbsp;
        </span>
      ))}
    </h2>
  );
};

export default AnimatedText;
