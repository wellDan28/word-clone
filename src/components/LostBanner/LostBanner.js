import React from "react";
import Banner from "../Banner/Banner";

const LostBanner = ({ answer }) => {
  return (
    <Banner variant="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
};
export default LostBanner;
