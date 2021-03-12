import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./component/common/Nav";
import About from "./component/common/About";

import FirstHoc from "./hoc/firsthoc";

import secondcomponenthoc from "./hoc/secondcomponenthoc";
import Todo from "./component/todo";

class App extends React.Component {
  // lifecycle
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  componentDidMount() {
    console.log("componentdidmout");
  }
  componentWillUpdate(nextProp, nextState, nextContex) {
    console.log("componentWillUpdate", nextProp, nextState, nextContex);
  }
  componentDidUpdate(prevtProp, prevState, prevContex) {
    console.log("componentDidUpdate", prevtProp, prevState, prevContex);
  }
  render() {
    return (
      <div className="text-center m-2 p-2">
        <Nav />
        <FirstHoc classes="rtl">
          {/* add person */}
          <Switch>
            <Route path="/" exact component={Todo} />
            <Route path="/about" component={About} />
          </Switch>
        </FirstHoc>
      </div>
    );
  }
} //end App
export default secondcomponenthoc(App);
