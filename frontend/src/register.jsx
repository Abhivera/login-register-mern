import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();
    const [userdata,setUserdata] = useState({username:'',password:''});
    const handleChange =(e)=>{
   setUserdata({...userdata,[e.target.name]:e.target.value})
   console.log(userdata);
    }
    const handleSubmit =async (e)=>{
        e.preventDefault();
        
            const response = await axios.post('http://localhost:5000/register',userdata);
            
        if(response.data){
            navigate("/login")
        }
        setUserdata({username:'',password:''})
      

    
    }
  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="myname" value ={userdata.username} onChange={handleChange}  />
      <input type="text" name="password" placeholder="mypassword" value={userdata.password} onChange={handleChange} />
      <button type="submit">Register</button>
      </form>
     <button onClick={()=>navigate("/login")}>Log In </button>
    </div>
  );
};

export default Register;