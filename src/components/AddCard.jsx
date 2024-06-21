import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddCard = () => {
    const [title, setTitle]=useState("");
    const [date, setDate]= useState("");
    const [description, setDescription]=useState("");
    const navigate= useNavigate();
    
    const addCard = async (e) => {
        e.preventDefault();
        try {
            const content= {title,date,description};
            const response= await axios.post("http://localhost:5000/addTask",content);
            console.log(response.data);
            setTitle('');
            setDate('');
            setDescription('');
            navigate('/');
        }catch (error){
            console.log(error);
        }
    }
  return (
    <div>
        <form onSubmit={addCard}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" value={title} onChange={e=>setTitle(e.target.value)} />
  
        <label htmlFor="date">Date</label>
        <input type="text" name="date" value={date} onChange={e=>setDate(e.target.value)}/>
              
        <label htmlFor="description">Description</label>
        <input type="text" name="description" value={description} onChange={e=>setDescription(e.target.value)}/>    
            
        <button type="submit">Submit</button>
        </form>    


    </div>
  )
}

export default AddCard