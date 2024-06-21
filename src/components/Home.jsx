import React, { useEffect, useState } from 'react';
import TaskCard from './TaskCard';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const navigate=useNavigate();
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/tasks');
        console.log('Fetched tasks:', response.data); // Check the structure of response data
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const addCard=()=>{
    console.log(`Adding card`);
    navigate('/addCard');
  }
  const deleteTask = async (taskId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/deleteTask/${taskId}`);
      if (response.status === 200) {
        setTasks(tasks.filter(task => task._id !== taskId));
      } else {
        console.log('Error deleting task');
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };
  return (
    <div>
      <h1>List of all the tasks</h1>
      <br />
      <button onClick={addCard}>Add new task</button>
      {tasks.map(task => (
        <TaskCard 
          id={task._id} 
          title={task.title} 
          date={task.date} 
          description={task.description} 
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default Home;
