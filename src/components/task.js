import React from 'react'
import activity from '../sports.jpeg'

export default function Task({taskName, time, date}){
    return(
        <div>
        


        <div className='card'>
    <img src={activity} />
    <div className='text-container'>
        <h1>{taskName}</h1>
        <h2>{date}</h2>
        <h2>{time}</h2>
     

    </div>

</div>
        </div>
    )
    

}