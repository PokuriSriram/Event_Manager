import { useState } from "react";
import axios from "axios";
import Login from './Login';
function Register(){
    const [login,SetLogin] =useState(false);
    const [fullName,setFullName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [phone,setPhone]=useState("");
    const handleRegister=async (e)=>{
        e.preventDefault();
        const userData={
            fullname:fullName,
            email:email,
            password:password,
            phone:phone,
        };
        try{
            const response=await axios.post(
                "http://localhost:5000/api/register",userData
            );
            alert(response.data.message);
            setEmail("");
            setFullName("");
            setPassword("");
            setPhoneno("");
        }catch(error){
            alert(error.response.data.message);
        }
    }
    if(login){
        return <Login />
    }
    return(
        <div>
        <div className="container">
            <h1>Registration Form</h1>
            <form onSubmit={handleRegister}>
            <label className="form-label">Full Name:</label>
                <input type="text" placeholder="Enter your Full Name:" value={fullName} onChange={(e)=>setFullName(e.target.value)} />
                <br />
                <br />
                <label className="form-label">Email:</label>
                <input type="email" placeholder="Enter Email.." value={email} onChange={(e)=>setEmail(e.target.value)} />
                <br /><br />
                <label className="form-label">Password:</label>
                <input type="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <br /><br />
                <label className="form-label">Phone:</label>
                <input type="number" placeholder="Enter your Number" value={phone} onChange={(e)=>setPhone(e.target.value)} />
                <br></br>
                <button type="submit">Register</button>
                
            </form>
            </div>
            <button onClick={()=>SetLogin(!login)}>Login</button>
        </div>
    )
}
export default Register;