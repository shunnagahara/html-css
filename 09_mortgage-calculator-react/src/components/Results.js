import React from "react";

export default function Results({ showResults }) {
  const resultClass = showResults
    ? "results results--completed"
    : "results results--empty";
  return (
    <section className={resultClass}>
      {!showResults ? (
        <div className="results__empty">
          <img
            src="./assets/images/illustration-empty.svg"
            alt=""
            className="results__illustration"
          />
          <h2 className="results__title">Results shown here</h2>
          <p className="results__description">
            Complete the form and click "calculate repayments" to see what your
            monthly repayments would be.
          </p>
        </div>
      ) : (
        <div className="results__completed">
          <h2 className="results__title">Your results</h2>
          <p className="results__description">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click "calculate
            repayments" again.
          </p>

          <div className="results__summary">
            <div className="results__item results__item--primary">
              <p className="results__label">Your monthly repayments</p>
              <p className="results__amount results__amount--large">
                £1,797.74
              </p>
            </div>

            <div className="results__item">
              <p className="results__label">Total you'll repay over the term</p>
              <p className="results__amount results__amount--small">
                £539,322.94
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
