import React from "react";
import Banner from "../Banner/Banner";

const LostBanner = ({ answer, reset }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    reset();
  };
  return (
    <Banner variant="sad" onSubmit={handleSubmit}>
      <form>
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>

        <button type="submit" className="reset-button">
          Reset
        </button>
      </form>
    </Banner>
  );
};
export default LostBanner;
