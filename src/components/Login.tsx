import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {


    const [firstName1, setfirstName] = useState('');
    const [lastName1, setlastName] = useState('');
    const [fullName1, setfullName] = useState('');
    const [emailAddress1, setemailAddress] = useState('');
    const[password1,setpassword] = useState('');
    const[errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setErrorMessage('');
        try{
            const response = await axios.post('http://localhost:8080/api/users/signup', {
                firstName: firstName1,
                lastName:lastName1,
                fullName: fullName1,
                emailAddress:emailAddress1,
                password:password1
            },{
                headers:{
                    'Content-Type' : 'application/json'
                }
            });
            navigate('/',{state:{userFirstName: response.data.firstName1}});
            console.log('User created: ', response.data);
        }catch(error: any){
            setErrorMessage(error.response.data||'Sign up failed');
        }
    };
    return (
        <div className="signup-form">
            <form onSubmit={handleLogin}>
                <label htmlFor="firstName">First Name:</label>
                <input id="firstName" type="text" value={firstName1} onChange={(e)=> setfirstName(e.target.value)}/>
            
                <label htmlFor="lastName">Last Name:</label>
                <input id="lastName" type="text" value={lastName1} onChange={(e)=>setlastName(e.target.value)}/>
                <label htmlFor="fullName">Full Name:</label>
                <input id="fullName" type="text" value={fullName1} onChange={(e) => setfullName(e.target.value)} />
                
                <label htmlFor="emailAddress">Email Address:</label>
                <input id="emailAddress" type="text" value={emailAddress1} onChange={(e) => setemailAddress(e.target.value)} />
                
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" value={password1} onChange={(e) => setpassword(e.target.value)} />
                
                <button type="submit">Sign up</button>
                {errorMessage && <div className="error-message">{errorMessage}
                </div>}
            </form>
        </div>
           
        //  something is wrong with frntend html code

             
    );
};
export default Login;