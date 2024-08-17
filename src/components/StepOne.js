import React from 'react';

const StepOne = ({ formData, handleChange, handleNextStep }) => {
  return (
    <div className="step">
      <h2>POST YOUR AD</h2>
      <input
        type="text"
        name="title"
        placeholder="Ad title *"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description *"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <button onClick={handleNextStep}>Next</button>
    </div>
  );
};

export default StepOne;
