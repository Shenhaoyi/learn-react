import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search';
import List from './List';

export default class GithubSearch extends Component {
  state = {
    keyword: '',
    list: [],
  };

  handleChange = (keyword) => {
    this.setState({
      keyword,
    });
  };

  updateList = (data = []) => {
    const list = data.map((item) => {
      const { login: name, avatar_url: avatarUrl } = item;
      return {
        name,
        avatarUrl,
      };
    });
    this.setState({
      list,
    });
  };

  // 使用fetch请求
  handleSearchFetch = async () => {
    const url = `/github/users?q=${this.state.keyword}`;
    try {
      const response = await fetch(url); // 请求是否触达服务端
      const data = await response.json();
      this.updateList(data);
    } catch (error) {
      console.error(error);
    }
  };

  handleSearch = async () => {
    const url = `/github/users?q=${this.state.keyword}`;
    // 发请求
    try {
      const response = await axios({
        method: 'get',
        url,
      });
      this.updateList(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    return (
      <>
        <Search
          handleChange={this.handleChange}
          handleSearch={this.handleSearchFetch}
        ></Search>
        <List keyword={this.state.keyword} list={this.state.list}></List>
      </>
    );
  }
}
