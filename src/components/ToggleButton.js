import React, { useState } from 'react';

const ToggleButtonOnOff = () => {
  const [isOff, setIsOff] = useState(true);

  return (
    <div>
        <button onClick={() => setIsOff(!isOff)} > { isOff ? 'ON' : 'OFF' } </button>
    </div>
  );
}

export default ToggleButtonOnOff;