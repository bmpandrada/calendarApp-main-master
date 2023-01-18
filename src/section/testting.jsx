import { useState } from 'react';
import axios from 'axios';
const url = 'http://localhost:3000/appointment';

const PostRequest = () => {
  const [pasword, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
   try{
    const resp = await axios.post(url, {pasword: pasword, email:email});
    console.log(resp.data)
   }catch (error){
    console.log(error.resp)
   }
  };

  return (
    <section>
      <h2 className='text-center'>post request</h2>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='pasword' className='form-label'>
          pasword
          </label>
          <input
            type='pasword'
            className='form-input'
            id='pasword'
            value={pasword}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          register
        </button>
      </form>
    </section>
  );
};
export default PostRequest;
