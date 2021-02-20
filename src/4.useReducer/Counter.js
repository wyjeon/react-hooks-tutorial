import React, { useReducer } from 'react';

/* 
  4. useReducer
  리듀서는 현재의 상태와, 
  업데이트를 위해 필요한 정보를 담은 액션 값을
  전달 받아 새로운 상태를 반환하는 함수이다.
*/
function reducer(state, action) {
  // action.type 에 따라 다른 작업 수행
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      // 아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
}

const Counter = () => {
  /* 
    useReducer의 첫 번째 파라미터는 '리듀서 함수'
    두 번째 파라미터는 해당 '리듀서의 기본 값'을 넣어준다.

    useReducer를 사용했을 때
    state 값과 dispatch 함수를 받아온다.

    state는 현재 가르키고 있는 상태,
    dispatch는 액션을 발생시키는 함수이다.

    dispatch(action)와 같은 형태로 
    함수 안에 파라미터로 액션 값을 넣어주면 
    리듀서 함수가 호출된다.
  */
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b> 입니다.
      </p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
      {/* 액션 값은 { type: 'INCREMENT' } 와 같은 형태로 이루어져 있다. */}
    </div>
  );
};

export default Counter;
