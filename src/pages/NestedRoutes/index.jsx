import React, { Component } from 'react';
import MyNavLink from '../../components/MyNavLink';
import { Switch, Route, Redirect } from 'react-router-dom';
import Route1 from './Route1';
import Route2 from './Route2';
import Route3 from './Route3';

const number = Math.random();
const name = 'shen';

export default class NestedRoutes extends Component {
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
        <br />
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
