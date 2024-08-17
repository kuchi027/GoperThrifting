import React from 'react';

const StepTwo = ({ formData, handleChange, handleFileChange, handleNextStep, handlePrevStep }) => {
  return (
    <div className="step">
      <h2>POST YOUR AD</h2>
      <input
        type="text"
        name="price"
        placeholder="Set a Price*"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <div className="image-upload">
        <label>
          <input type="file" onChange={handleFileChange} required />
          <span>Upload upto X Photos</span>
        </label>
      </div>
      <button onClick={handlePrevStep}>Back</button>
      <button onClick={handleNextStep}>Next</button>
    </div>
  );
};

export default StepTwo;
