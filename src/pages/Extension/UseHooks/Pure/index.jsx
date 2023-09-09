import React, { PureComponent, Component } from 'react';

export default class Pure extends PureComponent {
  state = {
    count: 0,
  };

  // 继承Component时可以这么写
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.count !== this.state.count
  // }

  render() {
    console.log('Parent---render');
    const handleClick = () => {
      this.setState((state) => ({ count: state.count + 1 }));
      // this.setState({});
    };
    return (
      <div style={{ margin: '20px', border: '1px solid red' }}>
        <h3>我是Pure组件, count为{this.state.count}</h3>
        <button onClick={handleClick}>点我+1</button>
        <Child1></Child1>
        <br />
        <Child2></Child2>
      </div>
    );
  }
}

class Child1 extends PureComponent {
  render() {
    console.log('Child1---render');
    return (
      <div style={{ margin: '20px', border: '1px solid green' }}>
        <h3>我是Child1组件</h3>
      </div>
    );
  }
}

class Child2 extends Component {
  shouldComponentUpdate() {
    return false; // 没有任何状态，可以直接返回false
  }
  render() {
    console.log('Child2---render');
    return (
      <div style={{ margin: '20px', border: '1px solid green' }}>
        <h3>我是Child2组件</h3>
      </div>
    );
  }
}
