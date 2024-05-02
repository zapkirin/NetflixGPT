
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Login from './Components/Login';
import Browse from './Components/Browse';
import appStore from './Utils/appStore';
import {Provider} from "react-redux"


const appComponents=createBrowserRouter([
  {
    path:'/',
    element:<Login/>
  },
  {
    path:'/browse',
    element:<Browse/>
  }
])


function App() {
  return (
    <Provider store={appStore}>
        <div className="App">
        <RouterProvider router={appComponents}/>
    </div>
    </Provider>
    
  );
}

export default App;
