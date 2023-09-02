import React, { Component } from 'react';
import style from './index.module.css';

export default class index extends Component {
  render() {
    const { name, avatarUrl } = this.props;
    return (
      <div key={index} className={style.item}>
        {name}
        <img src={avatarUrl} alt="empty" />
      </div>
    );
  }
}
