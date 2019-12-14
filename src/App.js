import React, {useEffect, useState} from 'react';

const App = () => {

    const handleClick = () => {
        alert("wow");
    };

  return (
      <div>
        <button onClick={handleClick}>Тыкни</button>
      </div>
  );
}

export default App;
