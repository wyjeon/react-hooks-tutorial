import React, { createContext, useContext } from 'react';

/*
  3. useContext
  함수형 컴포넌트에서 Context를
  보다 쉽게 사용할 수 있다.
*/

const ThemeContext = createContext('black');

const ContextSample = () => {
  const theme = useContext(ThemeContext);

  const style = {
    width: '24px',
    height: '24px',
    background: theme,
  };

  return <div style={style} />;
};

export default ContextSample;
