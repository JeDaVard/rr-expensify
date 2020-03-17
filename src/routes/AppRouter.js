import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Header from "../components/Header";
import Dashboard from '../components/Dashboard';
import AddExpense from "../components/AddExpense";
import EditExpense from "../components/EditExpense";
import Help from "../components/Help";
import About from "../components/About";
import NotFound from "../components/NotFound";
import Login from "../components/Login";
import PrivateRoute from './PrivateRoute';


export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <>
      <Header />
      <Switch>
        <Route path={"/"} component={Login} exact={true} />
        <PrivateRoute path={"/dashboard"} component={Dashboard} />
        <PrivateRoute path={"/create"} component={AddExpense} />
        <PrivateRoute path={"/edit/:id"} component={EditExpense} />
        <Route path={"/help"} component={Help} />
        <Route path={"/about"} component={About} />
        <Route component={NotFound} />
      </Switch>
    </>
  </Router>
);
const mapStateToProps = (state) => ({
  isAuth: !!state.isAuthenticated.uid
});
export default AppRouter;
