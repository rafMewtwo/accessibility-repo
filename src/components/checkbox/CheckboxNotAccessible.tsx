import React, { useState } from 'react';

const CheckboxNotAccessible = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <label>Checkbox não acessível</label>
    </div>
  );
};

export default CheckboxNotAccessible;
