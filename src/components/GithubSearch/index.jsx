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
  handleSearch = async () => {
    const url = `/github/users?q=${this.state.keyword}`;
    // 发请求
    console.log('shen log: ', this.state.keyword);
    if (!url) return;

    axios({
      method: 'get',
      url,
    }).then(
      (response) => {
        console.log(response);
        const list = response?.data?.map?.((item) => {
          const { login: name, avatar_url: avatarUrl } = item;
          return {
            name,
            avatarUrl,
          };
        });
        this.setState({
          list: list || [],
        });
      },
      (error) => {
        console.error(error);
      },
    );
  };
  render() {
    return (
      <>
        <Search
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
        ></Search>
        <List keyword={this.state.keyword} list={this.state.list}></List>
      </>
    );
  }
}
