import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import Filter from './filter.components';
import axios from 'axios';
const url = 'http://localhost:3000/appointment';



 const Create = () => {
    const [message, setMessage] = useState('');
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('Pending');
    const [single, setSingle] = useState({});
    const [isAppoinment, setAppoinment] = useState([]);
    const Add = ['Pending', 'completed']

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(message,date, status)
        if(message && date && status){
            try{
                const resp = await axios.post(url, {message: message, date:date, status, });
                console.log(resp.data)
               }catch (error){
                console.log(error.resp)
               }
            const newData = {id: new Date().getTime().toString(), 
                message, date, status }
            setAppoinment((isAppoinment)=>{
                return [...isAppoinment,newData];
            });
            setMessage('')
            setDate('')
            setStatus('')
        }else{
            console.log('incomplete')
        }
    }

    const viewForm = (id) => {
        const newSingle = isAppoinment.find((app)=>app.id === id);
        setSingle(newSingle)
        console.log(newSingle,single)
        navigate('/view')
    }
    const updateRemove = (id) => {
        const removeThis = isAppoinment.filter((data)=>data.id !== id);
        setAppoinment(removeThis)
    }
 
    return(<>
        <article>
        <div className="container">
        <h1 className="title text-2xl font-medium leading-tight text-gray-800">Appointment</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Details :</label>
                        <textarea 
                        maxlength="30"
                        type='text'
                        name='text'
                        id='text'
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                        />
                </div>
                <div className="form-control">
                    <label htmlFor="date">Date :</label>
                        <input 
                        className="datepicker relative mb-3"
                        type='date'
                        name='date'
                        id='date'
                        value={date}
                        onChange={(e)=>setDate(e.target.value)}
                        />
                   
                </div>

                <div className="form-control">
                    <label htmlFor="option">Status :</label>
                    <select onChange={(e)=>setStatus(e.target.value)}>
                    {Add.map((value)=>{
                     return   <option key={value} value={value}>{value}</option>
                    })}
                   
                    </select>
                   
                </div>


                <button className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" type='submit'>Add</button>
                
            </form>
            {isAppoinment.map((todo, index)=>{
                const {id, message, status, date} = todo;
                return( 
                <form className="form"  key={id}
                        onSubmit={(e)=>e.preventDefault()}>
                    <div className="container-details">
                    <ul className="control-details">
                    <Filter message={message} status={status} date={date}/>
                    <div className="btn">
                    <button  
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" 
                    type='submit'
                    onClick={()=>viewForm(id)}>view</button>
                    <button  
                    className="inline-block mb-3 px-7 py-3 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" 
                    type='submit'
                    onClick={()=>updateRemove(id)}>Delete</button>
                    </div>
                    </ul>
                </div>
                </form>)
            })}
            </div>
        </article>
    </>)

}

export default Create;
