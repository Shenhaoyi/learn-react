import React, { useState } from 'react';
import { produce } from 'immer';
import { Button } from 'antd';

/* 使用 immer 修改复杂对象 */
const Immer: React.FC = () => {
  const [obj, setObj] = useState({
    a: {
      c: {
        e: 0,
        f: 0,
      },
      d: 0,
    },
    b: 0,
  });
  const handleClick = () => {
    const newObj = produce(obj, (obj) => {
      obj.a.c.e++;
    });
    setObj(newObj);
  };

  return (
    <div>
      <Button onClick={handleClick}>点击+1</Button>
      <div>{JSON.stringify(obj)}</div>
    </div>
  );
};

export default Immer;
