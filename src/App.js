import React,{useState,useEffect} from 'react'
import './App.css';
import Login from './components/Login';
import{BrowserRouter,Switch,Route} from 'react-router-dom';
import axios from 'axios';
import Review from './components/Review';


function App() {
  const [productId, setProductId] = useState()  //Data from forms
  const [viewerId, setViewerId] = useState()
  const[posts,Setposts]=useState([]);
  const[currentpage,Setcurrentpage]=useState(1);
 const[postsperpage,Setpostsperpage]=useState(3);

useEffect(() => {
 
  const FetchData=async()=>{

    if((productId>=1 && productId<=20)&& (viewerId>=1 && viewerId<=10) )
    {

    const {data:{reviews}}= await axios(`http://www.i2ce.in/reviews/${productId}/${viewerId}`)
    
    console.log(reviews)
    Setposts(reviews);

  }
  }
 
  FetchData();
}, [productId,viewerId])

const indexofLastPost=currentpage*postsperpage;
const indexofFirstPost=indexofLastPost-postsperpage;
const currentposts=posts.slice(indexofFirstPost,indexofLastPost);

console.log(indexofLastPost, indexofFirstPost,currentposts)

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
      <Route exact path='/'> <Login
             productId={productId} setProductId={ setProductId} 
             viewerId={viewerId}  setViewerId={setViewerId}
   
            /></Route>
      <Route exact path='/review'> <Review
            currentposts={currentposts} 
   
            /></Route>
     
   </Switch>
    </div>
    
    </BrowserRouter>
  
  );
}

export default App;
