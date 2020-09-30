import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header/>
      

      {/* <Router> */}
        {/* <Switch> */}
          {/* <Route path="/search"> */}
          {/* </Route> */}
          {/* <Route path="/"> */}
            <div className="page">
              <Sidebar />
              <Videos/>
            </div>
          {/* </Route>
        </Switch>
      </Router> */}
     
    </div>
  );
}

export default App;
