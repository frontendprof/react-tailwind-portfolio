import React from "react";
import {BrowserRouter as Router, Router} from "react-router-dom";


function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Showcase />
      </Route>

      <Route path="projects">
        <Projects />
      </Route>

      <Route>
        <Hire path="/hire" />
      </Route>

    </Router>
  );
}

export default App;
