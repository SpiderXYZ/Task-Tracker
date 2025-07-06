import React, {useState} from 'react'

function Login({onLogin}) {

    const [username , setUsername] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault ();
        if(username.trim()){
            onLogin(username);
        }else{
            alert("please enter a username.")
        }
    }

  return (
    <div className="login-container">
        <div className="login-box">
            <h2>Task tracker Login</h2>
            <p>Enter Username to continue</p>
            <form action="" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={username}
                    onChange={(e) =>{setUsername(e.target.value)}}
                    placeholder='Enter your name'
                    className='form-input'
                    autoFocus
                />
                <button type="submit" className='btn btn-primary'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login;
