import React from "react";
import ReactDOM from "react-dom";

import ExampleComponent from "./ExampleComponent.jsx";

class App extends React.Component
{
  render()
  {
    return (
      <div>
       <p>
         Hello React!
       </p>
       <ExampleComponent />
      </div>
   );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
