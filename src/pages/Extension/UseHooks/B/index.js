import React, { Component } from 'react';
import { MyContext } from '../context';

export default function B() {
  return (
    <div style={{ margin: '20px', border: '1px solid red' }}>
      我是B组件
      <C></C>
      <D></D>
    </div>
  );
}

// 函数式组件接收祖先属性
function C() {
  return (
    <div style={{ margin: '20px', border: '1px solid green' }}>
      {/* 需要使用Consumer包裹 */}
      我是函数孙子组件，我爷爷的count是：
      <MyContext.Consumer>{(value) => value.count}</MyContext.Consumer>
    </div>
  );
}

// 类式组件接收祖先属性
class D extends Component {
  // 声明接收context
  static contextType = MyContext;
  render() {
    const { count } = this.context;
    return (
      <div style={{ margin: '20px', border: '1px solid black' }}>
        我是类孙子组件，我爷爷的count是：{count}
      </div>
    );
  }
}
