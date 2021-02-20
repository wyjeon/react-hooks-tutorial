import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  /* 
    2. useEffect
    클래스형 컴포넌트의 
    componentDidMount + componentDidUpdate
    합친 형태로 보아도 무방하다.

  useEffect(() => {
    console.log('렌더링이 완료되었습니다!');
    console.log({
      name,
      nickname,
    });
  });

  // 2.1 컴포넌트가 처음 나타날 때만 실행된다.
  useEffect(() => {
    console.log('마운트 될 때만 실행됩니다.');
  }, []);

  // 2.2 특정 값이 업데이트 될 때만 실행된다.
  useEffect(() => {
    console.log(name);
  }, [name]); // 두번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값을 넣어준다.

  */

  // 2.3 뒷정리(Cleanup)
  useEffect(() => {
    /* 
      렌더링 될 때마다
      뒷정리 함수가 계속 보여진다.
    */
    console.log('effect');
    console.log(name);

    return () => {
      /* 
        뒷정리 함수가 호출될 때 
        업데이트 되기 직전 값을 보여준다.
      */
      console.log('cleanup');
      console.log(name);
    };
  });
  //}, []);
  /* 
    만약 오직 언마운트 될 때만 
    뒷정리 함수를 호출하고 싶다면
    useEffect 함수의 두번째 파라미터에
    비어있는 배열을 넣으면 된다.
  */

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
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
