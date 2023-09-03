import React, { Component } from 'react';
import store from '../../redux/store';

export default class Count extends Component {
  selectRef = React.createRef();

  componentDidMount() {
    // 订阅store数据更新的回调
    store.subscribe(() => {
      // this.render(); // 不管用
      this.setState({});
    });
  }

  getSelectValue = () => {
    return Number(this.selectRef.current.value);
  };

  //加法
  increment = () => {
    store.dispatch({
      type: 'add',
      data: this.getSelectValue(),
    });
  };
  //减法
  decrement = () => {
    store.dispatch({
      type: 'minus',
      data: this.getSelectValue(),
    });
  };
  //奇数再加
  incrementIfOdd = () => {
    if (store.getState() % 2 !== 0) {
      store.dispatch({
        type: 'add',
        data: this.getSelectValue(),
      });
    }
  };
  //异步加
  incrementAsync = () => {
    store.dispatch({
      type: 'add',
      data: this.getSelectValue(),
    });
  };

  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
        <select ref={this.selectRef}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    );
  }
}
