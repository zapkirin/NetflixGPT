
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Login from './Components/Login';
import Browse from './Components/Browse';

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
    <div className="App">
        <RouterProvider router={appComponents}/>
    </div>
  );
}

export default App;
