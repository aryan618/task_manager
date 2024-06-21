import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const TaskCard = ({id, title, date, description,deleteTask }) => {
  const [showDescription, setShowDescription] = useState(false);
  const navigate= useNavigate();
  console.log('TaskCard props:',  id,title, date, description ); // Log props

  const changeVisibilityDescription = (event) => {
    event.stopPropagation();
    setShowDescription(!showDescription);
  };

  const deleteCard = async (event) => {
    event.stopPropagation();
    console.log('Deleting card');
    // Implement delete functionality here
    try{
      //const response= await axios.delete(`http://localhost:5000/deleteTask/${id}`);
      await deleteTask(id);
    } catch(e){
      console.log(e.message);
    }
  };

  return (
    <div onClick={changeVisibilityDescription} style={styles.card}>
      <h3>{title}</h3>
      <p>{date}</p>
      {showDescription && <p>{description}</p>}
      <button onClick={(event) => {
        event.stopPropagation();
        deleteCard(event);
      }}>Delete</button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
};

export default TaskCard;
