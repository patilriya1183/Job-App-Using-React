import { useEffect, useState } from 'react';
import './style.css';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Login = () =>{

    const navigate = useNavigate();

    const token = Cookies.get("myToken");

    useEffect(() => {

        if (token !== undefined){

            navigate("/");
        }

    },[]);

    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ…1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU

    const [allValues, setValues] = useState(
        {
            username : "",
            password : "",
            errorMsg : ""
        }
    )

    const onFormSubmit = async (e) => {

        e.preventDefault();

        const api = "https://apis.ccbp.in/login";

        let tempUsername;
        let tempPassword;

        if( allValues.username === "riya" && allValues.password === "riya@2025" ){

            tempUsername = "rahul";
            tempPassword = "rahul@2021";
        }

        const userDetails = {

            // username : allValues.username,
            // password : allValues.password

            username : tempUsername,
            password : tempPassword
        }

        const options = {

            method : "Post",
            body : JSON.stringify(userDetails)
        }

        try {
            
            const response = await fetch(api, options);

            const data = await response.json();

            console.log(data)

            if(response.ok){

                Cookies.set("myToken", data.jwt_token);

                setValues({...allValues, errorMsg : ""});

                navigate("/");

            }
            else{

                setValues({...allValues, errorMsg : data.error_msg});
            }

        } 
        catch (error) {
            
        }

    }

    return (

        <div className='bg-login'>

            <div className='mainCard'>

                <div className='loginCard'> 

                    <h2 className='headingLog' > Welcome to Login Page </h2>

                    
                    <b className='boldLog' style={{color : "whitesmoke", paddingLeft : "35px"}}> Sign in to your account </b>

                    <br />

                    <form className='w-100 p-4' onSubmit={onFormSubmit}>

                        <div className="form-group">
                            
                            <label htmlFor="exampleInputEmail1"> Username </label>
                            <input 
                                onChange={(e) => setValues({...allValues, username : e.target.value})} 
                                type="text" 
                                className="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp"
                            />
                            <small id="emailHelp" className="form-text" style={{color : "rgba(210, 198, 198, 1)"}}>
                                We'll never share your username with anyone else.
                            </small>

                        </div>

                        <div className="form-group">
                        
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input 
                                onChange={(e) => setValues({...allValues, password : e.target.value})}
                                type="password" 
                                className="form-control" 
                                id="exampleInputPassword1"
                            />

                        </div>
                        <br />

                        <button type="submit" className="btn btn-2 w-100"> <b style={{color : "white"}}> Submit </b> </button>
                        <br /> <br />

                        <p className='text-danger' style={{textAlign : "center"}}> {allValues.errorMsg} </p>

                    </form>

                </div>

                <div className='imgCard'>

                </div>

            </div>

        </div>
    );

}

export default Login

