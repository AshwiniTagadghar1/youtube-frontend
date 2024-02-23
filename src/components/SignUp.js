import React, {useState} from "react";
import axios from "axios";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSignUp = async () => {
        try{
            const response = await axios.post('http://localhost:8080/api/users/login', {
                emailAddress: email,
                password:password
            });
            console.log('User created: ', response.data);
        }catch(error){
            console.error('Signup failed:', error);
        }
    };
    return (
        <div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleSignUp}>Sign up</button>

        </div>
    );
};
export default SignUp;