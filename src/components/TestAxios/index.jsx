import React, { Component } from 'react';
import axios from 'axios';

export default class index extends Component {
  handleClick = async () => {
    const responseType = 'blob';
    axios({
      method: 'get',
      url: 'http://localhost:3000/students',
      responseType,
    }).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      },
    );
  };
  render() {
    return <button onClick={this.handleClick}>点我获取数据</button>;
  }
}
