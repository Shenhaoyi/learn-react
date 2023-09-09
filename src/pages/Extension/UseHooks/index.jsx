import React, { useState } from 'react';

export default function UseHooks() {
  const [count, setCount] = useState(0);
  const add = () => {
    // setCount(count + 1); // 直接传值
    setCount((oldValue) => oldValue + 1); // 使用函数
  };
  return (
    <>
      <div>count: {count}</div>
      <button onClick={add}>点我+1</button>
    </>
  );
}
