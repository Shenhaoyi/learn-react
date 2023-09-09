import React, { useState, useEffect, useRef } from 'react';
import { MyContext } from './context';
import B from './B';

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

  const [inputValue, setInputValue] = useState('');
  // const handleChange = (e) => {
  //   setInputValue(e.target.value)
  // }
  // 使用useRef
  const inputRef = useRef();
  const handleChange = () => {
    setInputValue(inputRef.current.value);
  };

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={add}>点我+1</button>
      <hr></hr>
      useRef
      <div>
        <input ref={inputRef} onChange={handleChange} />
        您输入的内容是:{inputValue}
      </div>
      <hr></hr>
      createContext
      {/* key必须是value */}
      <MyContext.Provider value={{ count }}>
        <B></B>
      </MyContext.Provider>
    </div>
  );
}
