// useState를 사용할 때 import를 통해 불러온다.
import React, { useState } from 'react';

const Counter = () => {
  /* 
    비구조화 할당
    
    함수가 호출되면 배열을 반환한다.
    첫번쨰 원소는 '상태 값'이고
    두번쨰 원소는 '상태를 설정하는 함수'이다.
    
    이 함수에 파라미터를 넣어 호출하면
    전달받은 파라미터 값이 바뀌고
    컴포넌트는 리렌더링 된다.
  */
  const [value, setValue] = useState(0); // 기본 값은 0이다.

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b> 입니다.
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default Counter;

/* 
    1. useState
    함수형 컴포넌트에서도 가변적인 상태를 지니고 있게 해준다.
  */
