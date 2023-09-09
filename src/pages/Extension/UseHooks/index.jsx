import React, { useState, useEffect } from 'react';

export default function UseHooks() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('shen log: ', '组件渲染就执行');
  });

  useEffect(() => {
    console.log('shen log: ', '组件第一次挂载就执行');
    const timer = setInterval(() => {
      setCount((oldValue) => oldValue + 1); // 使用函数
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log('shen log: ', '组件卸载啦');
    };
  }, []);

  useEffect(() => {
    console.log('shen log: ', '初始化或者count更新啦', { count });
  }, [count]);

  const add = () => {
    // setCount(count + 1); // 直接传值
    setCount((oldValue) => oldValue + 1); // 使用函数
  };

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={add}>点我+1</button>
    </div>
  );
}
