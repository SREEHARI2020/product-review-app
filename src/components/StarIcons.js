import React from 'react'
import StarIcon from '@material-ui/icons/Star';
const StarIcons = ({limit}) => {

    let array=[];
    for(let i=1;i<=limit ;i++)
    {
     array.push(<StarIcon/>)
  }
    return (
        <div className="Review-stars">
             {array.map(item=>(item))}
        </div>
    )
}

export default StarIcons
