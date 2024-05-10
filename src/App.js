import appStore from './Utils/appStore';
import {Provider} from "react-redux"
import Body from './Components/Body';
// import dotenv from 'dotenv'

// dotenv.config()



function App() {
  return (
   
        <div className="App">
           <Provider store={appStore}>
          <Body/>
           </Provider>
    </div>
    
  );
}

export default App;
