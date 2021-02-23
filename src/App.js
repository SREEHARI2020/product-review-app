import React,{useState,useEffect} from 'react'
import './App.css';
import Login from './components/Login';
import{BrowserRouter,Switch,Route} from 'react-router-dom';
import axios from 'axios';


function App() {
  const [productId, setProductId] = useState()  //Data from forms
  const [viewerId, setViewerId] = useState()

useEffect(() => {
 
  const FetchData=async()=>{

    if((productId>=1 && productId<=20)&& (viewerId>=1 && viewerId<=10) )
    {

    const {data}= await axios(`http://www.i2ce.in/reviews/${productId}/${viewerId}`)
    
    console.log(data)

  }
  }
 
  FetchData();
}, [productId,viewerId])

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
      <Route exact path='/'> <Login
             productId={productId} setProductId={ setProductId} 
             viewerId={viewerId}  setViewerId={setViewerId}
   
            /></Route>
     
   </Switch>
    </div>
    
    </BrowserRouter>
  
  );
}

export default App;
