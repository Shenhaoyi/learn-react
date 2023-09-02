import React, { Component } from 'react';
import Item from './Item';
import style from './index.module.css';

export default class List extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        {this.props.list.map((item) => {
          return <Item key={item.name} {...item}></Item>;
        })}
      </div>
    );
  }
}
