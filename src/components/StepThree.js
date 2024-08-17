import React from 'react';

const StepThree = ({ formData, handlePrevStep, handleSubmit }) => {
  return (
    <div className="step">
      <h2>POST YOUR AD</h2>
      <p>Product condition rating *</p>
      <div className="condition-options">
        <label>
          <input type="radio" name="condition" value="Perfect" required />
          Perfect
        </label>
        <label>
          <input type="radio" name="condition" value="Average" required />
          Average
        </label>
        <label>
          <input type="radio" name="condition" value="Okay" required />
          Okay
        </label>
      </div>
      <button onClick={handlePrevStep}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default StepThree;
