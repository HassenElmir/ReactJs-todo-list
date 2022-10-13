import '../components/header.css'
import activity from '../sports.jpeg'
import {Component, useState} from 'react'
import Task from '../components/task.js'

function Header() {
   const[taskName, setTaskName] = useState("")
   const[time, setTime] = useState("")
   const[date, setDate] = useState("")
   const[taskList, setTaskList] = useState([])

 const addTask = () =>{
    setTaskList([...taskList, {task: taskName, time: time, date: date}])
    setTaskName('')
    setTime('')
    setDate('')
    
 }

function remove(id){
    const newList = taskList.filter((l) => l.id !== id);
    setTaskList(newList)

}
     
    return (
        <div>
<div className='container'>
    <h1>Enter your activity</h1>
    
    <input type='text' id='task' placeholder='Enter an activity' onChange={(e) => setTaskName(e.target.value)} />
    <input type='date' id='date' onChange={(e) => setDate(e.target.value)}  />
    <input type='time' id='time' onChange={(e) => setTime(e.target.value)} />
    <input type='submit' value='Add' onClick={addTask}/>

</div>

{taskList.map((task) =>{
    return <Task taskName={task.task} time={task.time} date={task.date} />
    


})}






</div>
    );
    

}
	


export default Header;