import { Button, TextField, Typography } from '@material-ui/core'
import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import './Login.css'
const Login = () => {

    // const history=useHistory();
    const [productId, setProductId] = useState()
    const [viewerId, setViewerId] = useState()
    const [error,setError] =useState({})


    const validate=()=>{
        let valid={}
        valid.productId=productId>=1 && productId<=20? "":" product-Id should be numbers between 1 and 20"
        valid.viewerId=viewerId>=1 && viewerId<=10? "":" viewer-Id should be numbers between 1 and 10"
        
        return valid;
    }
    const handleSubmit=(e)=>{
        e.preventDefault();

        let obj=validate();

        setError(obj);

       

        // if(error.username==="" && error.password===""){
        //     history.push('/home')
        // }
        


    }

    return (
    
            <div className="Forms-container">   

                
         <Typography component="h1" variant="h5">
          Search For Products
        </Typography>
        <form >
        {error?<div className="Forms-error">{error.productId}</div>:""}   
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
           
            label="Product ID"
         
           onChange={(e)=>setProductId(e.target.value)}
             value={productId}
           
            autoFocus
           
           
          
          />
           {error?<div className="Forms-error">{error.viewerId}</div>:""}   
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
           
            label="Viewer ID"
         
           onChange={(e)=>setViewerId(e.target.value)}
            value={viewerId}
           
            autoFocus
           
           
          
          />
         
          <Button
          onClick={(e)=>handleSubmit(e)}
            fullWidth
            variant="contained"
            color="primary"
            
          >
            Sign In
          </Button> </form>
        </div>
    )
}

export default Login
