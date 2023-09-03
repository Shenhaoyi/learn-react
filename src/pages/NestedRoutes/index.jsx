import React, { Component } from 'react';
import MyNavLink from '../../components/MyNavLink';
import { Switch, Route, Redirect } from 'react-router-dom';
import Route1 from './Route1';
import Route2 from './Route2';
import Route3 from './Route3';
import { Button } from 'antd';
import NoRoute from './NoRoute';

const number = Math.random();
const name = 'shen';

export default class NestedRoutes extends Component {
  routeChange = (params) => {
    return () => {
      const { replace = true, path, state = null } = params;
      console.log('shen log: ', { state });
      const { history } = this.props;
      if (replace) {
        history.replace(path, state);
      } else {
        history.push(path, state);
      }
    };
  };
  render() {
    return (
      <>
        <div>二级路由：</div>
        <div>
          <MyNavLink to={`/nested-routes/route1/${number}/${name}`}>
            route1(params传参)
          </MyNavLink>
          &nbsp;
          <MyNavLink
            to={`/nested-routes/route2/?number=${number}&name=${name}`}
          >
            route2(search传参)
          </MyNavLink>
          &nbsp;
          <MyNavLink
            to={{
              pathname: '/nested-routes/route3',
              state: {
                number,
                name,
              },
            }}
          >
            route3(state传参)
          </MyNavLink>
        </div>
        <div>
          编程式路由导航：
          <Button
            onClick={this.routeChange({
              path: `/nested-routes/route1/${number}/${name}`,
            })}
          >
            route1(params传参，replace)
          </Button>
          &nbsp;
          <Button
            onClick={this.routeChange({
              path: `/nested-routes/route2/?number=${number}&name=${name}`,
            })}
          >
            route2(search传参，replace)
          </Button>
          &nbsp;
          <Button
            onClick={this.routeChange({
              path: '/nested-routes/route3',
              state: {
                number,
                name,
              },
            })}
          >
            route3(state传参，replace，哈希路由时不支持！)
          </Button>
        </div>
        <br />
        <div>
          {/* 一般组件里面进行路由跳转 */}
          <NoRoute></NoRoute>
        </div>
        <Switch>
          <Route
            path="/nested-routes/route1/:number/:name"
            component={Route1}
          />
          <Route path="/nested-routes/route2/" component={Route2} />
          <Route path="/nested-routes/route3/" component={Route3} />
          <Redirect to={`/nested-routes/route1/${number}/${name}`} />
        </Switch>
      </>
    );
  }
}
