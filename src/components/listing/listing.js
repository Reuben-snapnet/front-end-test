import React from 'react'
import Singlelist from '../SingleList/Singlelist'
const Listing = ({ listing, setEventList}) => {
     

    const getSingleList = (id)=>{
    
       setEventList(listing.filter((list)=> list.id == id))
    }
    
    return (
        <div  className="listdetails" onClick={()=> getSingleList(listing.id)}>
            <div className='list' >
                <div className='listdetails'>
                    {listing.date}
                </div>
                <div style={{fontSize:'bold'}}>
                    {listing.title}
                </div>
            </div>
            


            

        </div>
    )
}

export default Listing
