import React, { useReducer } from 'react';

function reducer(state, action) {
  console.log(action); //<input name='name' value='wyjeon'>
  console.log(action.name); //name
  console.log(action.value); //wyjeon

  return {
    ...state,
    [action.name]: action.value,
    // [input의 name="", name or nickname] : [input의 value]
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: '',
  });

  const { name, nickname } = state;

  const onChange = e => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
