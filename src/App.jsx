import React, { Component } from 'react';
import { RouterProvider} from "react-router-dom";
import { router } from './routing';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <div>
        <RouterProvider router={router}/>
      </div>
    );
  }
}
 
export default App;
