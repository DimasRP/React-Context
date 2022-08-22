import React from 'react'

const  CardImage = ({data}) => {
   return (  
       <div>
            <img src={data.avatar}/>
       </div>
   );
}
 
export default CardImage ; 