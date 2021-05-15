import {Link, NavLink, Redirect, Route, Switch, useRouteMatch,} from "react-router-dom";
import Categories from "../pages/Categories";
import PrivateRoute from "./PrivateRoute";

export default function CategoriesRouter() {
  const {url} = useRouteMatch();
  return (
    <div>
      <ul>
        <li>
          <NavLink exact to={`${url}`} activeClassName="active">
            All
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/terror`} activeClassName="active">
            Terror
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/action`} activeClassName="active">
            Action
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/anime`} activeClassName="active">
            Anime
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/categories" component={Categories}/>
        <PrivateRoute path="/categories/terror" component={TerrorRouter}/>

        <Route exact path="/categories/action">
          <h1>Category Action</h1>
        </Route>
        <Route exact path="/categories/anime">
          <h1>Category Anime</h1>
        </Route>

        <Route path="*">
          <Redirect to="/404"/>
        </Route>
      </Switch>
    </div>
  );
}

function TerrorRouter() {
  const {url} = useRouteMatch();

  return (
    <div>
      <ul>
        <li>
          <Link to="/categories/terror">All</Link>
        </li>
        <li>
          <Link to="/categories/terror/gore">Gore</Link>
        </li>
        <li>
          <Link to="/categories/terror/suspense">Suspense</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={`${url}`}>
          <h3>Category Terror</h3>
        </Route>
        <Route exact path={`${url}/gore`}>
          <h3>Gore</h3>
        </Route>
        <Route exact path={`${url}/suspense`}>
          <h3>Suspense</h3>
        </Route>
        <Route path="*">
          <Redirect to="/404"/>
        </Route>
      </Switch>
    </div>
  );
}
