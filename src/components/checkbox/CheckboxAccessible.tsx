import React, { useState } from 'react';

const CheckboxAccessible = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <input
        type="checkbox"
        id="accessible-checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        aria-checked={checked}
        role="checkbox"
      />
      <label htmlFor="accessible-checkbox">Checkbox acessível</label>
    </div>
  );
};

export default CheckboxAccessible;
