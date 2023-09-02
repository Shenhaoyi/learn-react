import { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class MyNavLink extends Component {
  render() {
    return (
      <NavLink
        activeStyle={{
          background: '#ddd',
        }}
        {...this.props}
        // 标签体内容通过children传进来，直接透传下去
      />
    );
  }
}
