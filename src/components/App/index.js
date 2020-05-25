import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./style.css";
import StreamCreate from "../StreamCreate";
import StreamList from "../StreamList";
import StreamEdit from "../StreamEdit";
import StreamDelete from "../StreamDelete";
import StreamShow from "../StreamShow";
import Header from "../Header";
import history from "../../history";

function App() {
  return (
    <div className="App ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList}></Route>
            <Route path="/streams/new" exact component={StreamCreate}></Route>
            <Route
              path="/streams/edit/:id"
              exact
              component={StreamEdit}
            ></Route>
            <Route
              path="/streams/delete/:id"
              exact
              component={StreamDelete}
            ></Route>
            <Route path="/streams/:id" exact component={StreamShow}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
