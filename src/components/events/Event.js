import axios from 'axios';
import React, { useEffect, useState, } from 'react'
import Listing from '../listing/listing'
import Singlelist from '../SingleList/Singlelist';

const Event = () => {

    const [eventList, setEventList] = useState([])



    useEffect(() => {
        axios.get('http://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router/events').then(res => setEventList(res.data));
    }, [])



    console.log('eventList ', eventList)

    return (
        <div className='list'>
            {eventList.map(list =>
                <Listing listing={list} setEventList={setEventList} key={list.id} />
            )}
        
        </div>
    )

}

export default Event
