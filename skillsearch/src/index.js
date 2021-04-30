import React from 'react';
import {render} from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";


//Components
import App from "./Components/App";


const Root = () => {
  return (
          <BrowserRouter>
            <Route path="/" component={App} />
          </BrowserRouter>


  )
}
export default render(<Root />, document.getElementById("root"));