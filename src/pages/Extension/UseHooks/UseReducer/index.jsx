import React, { useReducer } from 'react';
import { Button } from 'antd';

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return {
        count: state.count + action.num,
      };
    case 'minus':
      return {
        count: state.count - action.num,
      };
    default: {
      throw new Error();
    }
  }
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <div>{state.count}</div>
      <Button onClick={() => dispatch({ type: 'add', num: 1 })}>点击+1</Button>
      <Button onClick={() => dispatch({ type: 'add', num: 2 })}>点击+2</Button>
      <Button onClick={() => dispatch({ type: 'minus', num: 1 })}>点击-1</Button>
      <Button onClick={() => dispatch({ type: 'minus', num: 2 })}>点击-2</Button>
    </div>
  );
}
