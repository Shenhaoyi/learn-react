import React, { useState, useEffect, useRef } from 'react';
import { MyContext } from './context';
import B from './B';
import Pure from './Pure';
import UseReducer from './UseReducer';
import { Tabs } from 'antd';
import Immer from './Immer';

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

  const items = [
    {
      key: '1',
      label: 'useState',
      children: (
        <>
          <div>count: {count}</div>
          <button onClick={add}>点我+1</button>
        </>
      ),
    },
    {
      key: '2',
      label: 'useRef',
      children: (
        <>
          <div>
            <input ref={inputRef} onChange={handleChange} />
            您输入的内容是:{inputValue}
          </div>
        </>
      ),
    },
    {
      key: '3',
      label: 'createContext',
      children: (
        <>
          {/* key必须是value */}
          <MyContext.Provider value={{ count }}>
            <B></B>
          </MyContext.Provider>
        </>
      ),
    },
    {
      key: '4',
      label: 'PureComponent',
      children: (
        <>
          <Pure></Pure>
        </>
      ),
    },
    {
      key: '5',
      label: 'useReducer',
      children: (
        <>
          <UseReducer></UseReducer>
        </>
      ),
    },
    {
      key: '6',
      label: '使用immer',
      children: (
        <>
          <Immer></Immer>
        </>
      ),
    },
  ];

  return <Tabs defaultActiveKey="1" items={items} />;
}
