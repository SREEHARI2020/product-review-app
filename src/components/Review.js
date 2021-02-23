import React from 'react'

const Review = ({currentposts}) => {
    return (
        <div>
            {currentposts?currentposts.map((post)=>(<div>{post.comment}</div>)) : <div>Loading...</div>}
        </div>
    )
}

export default Review
