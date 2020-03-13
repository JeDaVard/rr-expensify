import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Dashboard from '../components/Dashboard';
import AddExpense from "../components/AddExpense";
import EditExpense from "../components/EditExpense";
import Help from "../components/Help";
import About from "../components/About";
import NotFound from "../components/NotFound";

const AppRouter = () => (
  <BrowserRouter>
    <>
      <Header />
      <Switch>
        <Route path={"/"} component={Dashboard} exact={true} />
        <Route path={"/create"} component={AddExpense} />
        <Route path={"/edit/:id"} component={EditExpense} />
        <Route path={"/help"} component={Help} />
        <Route path={"/about"} component={About} />
        <Route component={NotFound} />
      </Switch>
    </>
  </BrowserRouter>
);

export default hot(module)(AppRouter);
