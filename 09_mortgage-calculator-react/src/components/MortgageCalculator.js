import React, { useState } from "react";
import Form from "./Form";
import Results from "./Results";

export default function MortgageCalculator() {
  const [showResults, setShowResults] = useState(false);

  const handleCalculate = () => {
    setShowResults(true);
  };

  const handleClear = () => {
    setShowResults(false);
  };

  return (
    <main className="mortgage-calculator">
      <Form onCalculate={handleCalculate} onClear={handleClear}></Form>
      <Results showResults={showResults}></Results>
    </main>
  );
}
