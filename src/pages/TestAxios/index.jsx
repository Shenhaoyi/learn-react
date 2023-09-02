import React, { Component } from 'react';
import axios from 'axios';

export default class index extends Component {
  handleClick = (path) => {
    return async () => {
      axios({
        method: 'get',
        url: path,
      }).then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.error(error);
        },
      );
    };
  };
  render() {
    return (
      <>
        <button onClick={this.handleClick('/api1/students')}>
          获取学生数据
        </button>
        <button onClick={this.handleClick('/api2/cars')}>点我汽车数据</button>
      </>
    );
  }
}
