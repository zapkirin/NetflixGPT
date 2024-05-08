
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Login from './Components/Login/Login';
import Browse from './Components/Browse/Browse';
import appStore from './Utils/appStore';
import {Provider} from "react-redux"
import Overview from './Components/Overview/Overview';
// import dotenv from 'dotenv'

// dotenv.config()
const appComponents=createBrowserRouter([
  {
    path:'/',
    element:<Login/>
  },
  {
    path:'/browse',
    element:<Browse/>,
    children:[
      {
        path:'overview/:movieId',
        element:<Overview/>
  }],
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
