import React, { ChangeEvent, useState } from 'react';

const RadioButtonGroupAccessible = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div role="radiogroup" aria-labelledby="radio-group-label">
      <div>
        <input
          type="radio"
          id="option1"
          name="radioGroup"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
          aria-checked={selectedOption === 'option1'}
          role="radio"
        />
        <label htmlFor="option1">Option 1</label>
      </div>

      <div>
        <input
          type="radio"
          id="option2"
          name="radioGroup"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
          aria-checked={selectedOption === 'option2'}
          role="radio"
        />
        <label htmlFor="option2">Option 2</label>
      </div>
    </div>
  );
};

export default RadioButtonGroupAccessible;
