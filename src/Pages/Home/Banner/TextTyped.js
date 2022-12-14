import React from "react";
import Typed from "react-typed";

const TextTyped = () => {
  return (
    <div className="text-3xl font-semibold h-32">
      <div>
        <Typed
          strings={[
            "Welcome To my portfolio...",
            "Can you say me how can i help you?",
            "Please send me a massage.",
            "I will try to reply very soon...",
            "Thank you very much for visiting my portfolio.",
          ]}
          typeSpeed={100}
          backSpeed={100}
          backDelay={2000}
          loop
        />
      </div>
    </div>
  );
};

export default TextTyped;
