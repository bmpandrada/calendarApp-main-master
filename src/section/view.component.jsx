import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


const url = 'http://localhost:3000/appointment';

// second argument

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);


  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

    const updateRemove = (id) => {
        const removeThis = users.filter((data)=>data.id !== id);
        fetch(`http://localhost:3000/appointment`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(null) 
          })
        setUsers(removeThis)
    }

   const navigate = useNavigate()
  
   const onSubmitted = () => {
    console.log('hi')
  }

  return (
    <>
      <h3 className="title title text-2xl font-medium leading-tight text-gray-800">Appointment
      <button
      className='inline-block mb-3 px-7 py-3 bg-blue-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1 w-100'
      onClick={()=>navigate('/users')}
      type='button'>Add</button>
</h3>
    
    
  
        {users.map((user) => {
          const { id, message, status, date } = user;
          return (<div className='containerData relative overflow-x-auto'>
            <table className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" onSubmit={onSubmitted} key={id}>
            <thead>
              <tr>
                <th scope="col" className="px-6 py-3">Date</th>
                <th scope="col" className="px-6 py-3">Message</th>
                <th scope="col" className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">{date}</td>
                <td className="px-6 py-4">{message}</td>
                <td className="px-6 py-4">{status}</td>
                <button  
          className="bg-red-500 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" 
          type='submit'
          onClick={()=>updateRemove(id)}>Delete</button>
       
          <button className="bg-green-500 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" onClick={() => setUsers()}>Update</button>
              </tr>
              
            </tbody>
          </table>
          </div>);
        })}
   
    
    </>
  );
};

export default UseEffectFetchData;
