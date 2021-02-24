import React from 'react'
import { Pagination } from './Pagination'
import './Review.css'
import ReviewCard from './ReviewCard'

const Review = ({currentposts,totalposts,postsperpage,paginate}) => {
    return (
     <div className="Container">   
         <div className="Review-page-container">
            {currentposts?currentposts.map((post)=>(
            
              <ReviewCard post={post}/>
                  
            )) 
              
            : <div>Loading...</div>}


          
          </div>
             <div className="Pagination-container">
          <Pagination  currentposts={currentposts} paginate={paginate} postsperpage={postsperpage} totalposts={totalposts}/>
            </div>
   </div>
    )
}

export default Review
