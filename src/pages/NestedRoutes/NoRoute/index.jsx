import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd';

class NoRoute extends Component {
  render() {
    return (
      <div>
        withRouter：
        <Button onClick={this.props.history.goBack}>点击后退</Button>
        <Button onClick={this.props.history.goForward}>点击前进</Button>
      </div>
    );
  }
}

export default withRouter(NoRoute);
