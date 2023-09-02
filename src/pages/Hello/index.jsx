import { Component } from 'react';
import style from './index.module.css';
export default class Hello extends Component {
  render() {
    console.log('shen log: ', { props: this.props }); // 路由组件能接收到路由信息
    return <div className={style.hello}>hello</div>;
  }
}
