import React, { Component } from 'react';
import Child from './Child';
export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };
  // 捕获在生命周期中发生的错误，如果有报错就不要将组件渲染出来
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch() {
    // 一般在这里错误上报
    console.log('shen log: ', '渲染组件错误');
  }
  render() {
    return (
      <div>
        ErrorBoundary
        {this.state.hasError ? '存在错误' : <Child></Child>}
      </div>
    );
  }
}
