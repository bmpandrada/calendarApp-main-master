import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import { Player } from '@lottiefiles/react-lottie-player';



import axios from 'axios';
const url = 'http://localhost:3000/users';

 const Login = () => {
    const [email, setEmail] = useState('');
    const [pasword, setPassword] = useState('');
   
 

    const navigate = useNavigate();

    const handleSubmit =  async (e) => {
        e.preventDefault();
        if(email && pasword){
            navigate('/view');
        try{
            const resp = await axios.post(url, {pasword: pasword, email:email});
            console.log(resp.data)
           }catch (error){
            console.log(error.resp)
           }
        console.log(email,pasword)
        
        }else{
            console.log('invalid')
            
        }
        
    }

    return(<>
        <article>
            <section className="h-screen">
  <div className="container px-6 py-12 h-full">
    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
      <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
      <Player
        src='https://assets1.lottiefiles.com/packages/lf20_myejiggj.json'
        className="player"
        loop  autoplay style={{width:'400px'}}
      />
      </div>
      <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
        <form onSubmit={handleSubmit}>
        <h1>Welcome</h1>
        <br />
          <div className="mb-6">
            <input
              type="text"
              name='email'
              id='email'
              value={email}
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Email address"
            onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

      
          <div className="mb-6">
            <input
              type="password"
                name='password'
                id='password'
                value={pasword}                     
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>



          <button
            type="submit"
            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Sign in
          </button>

          
        </form>
      </div>
    </div>
  </div>
</section>
        </article>
    </>)

}

export default Login