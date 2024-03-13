import React from 'react';
import { Button } from 'antd';
import ForwardRef from './ForwardRef';

export default function AntDesign() {
  return (
    <div>
      <Button
        className="aaa bbb"
        style={{
          width: '100px',
          height: '50px',
        }}
        type="primary"
      >
        测试
      </Button>
      <hr></hr>
      <ForwardRef></ForwardRef>
      <hr></hr>
    </div>
  );
}
