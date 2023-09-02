import React, { Component } from 'react'

export default class Search extends Component {
  handleChange = (event) => {
    this.props.handleChange(event.target.value)
  }
  render() {
    return (
      <div>
        搜索github用户：
        <input placeholder="输入关键词，点击搜索" onChange={this.handleChange}></input>
        <button onClick={this.props.handleSearch}>搜索</button>
      </div>
    );
  }
}
