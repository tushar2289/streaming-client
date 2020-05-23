import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./style.css";
import StreamCreate from "../StreamCreate";
import StreamList from "../StreamList";
import StreamEdit from "../StreamEdit";
import StreamDelete from "../StreamDelete";
import StreamShow from "../StreamShow";
import Header from "../Header";

function App() {
  return (
    <div className="App ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList}></Route>
          <Route path="/streams/new" exact component={StreamCreate}></Route>
          <Route path="/streams/edit" exact component={StreamEdit}></Route>
          <Route path="/streams/delete" exact component={StreamDelete}></Route>
          <Route path="/streams/show" exact component={StreamShow}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
