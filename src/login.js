import React from 'react';
import './login.css';
import Logo from './assets/Logo.png';
function Login() {
  return (
    <div className="container">
      <div className="box">
        <div className='grid'>
        <div className="logo">
            <img className="LOGO" src={Logo} alt="Logo" />
          </div>
        <center><p className='Welcome'>Welcome!</p></center>
        </div>
      </div>
      
      <div className="box">
        <div className='box1'>
        <center><h1>Login</h1></center>
        </div>
        <br></br>
        <form>
          <center>
          <input type="text" placeholder="Username" style={{ borderRadius: '10px', marginBottom: '10px' }}/>
          <input type="text" placeholder="Password" style={{ borderRadius: '10px', marginBottom: '10px' }}/>
          </center>
          <p className='box2'> Forgot Password?</p>
          <p className='SignUp'> Don't have an account? <span style={{ color: 'red',fontWeight: 'bold' }}>Sign Up</span></p>
          <center><input type="submit" value="Submit" style={{ borderRadius: '30px', marginBottom: '20px' }} /></center>
        </form>
      </div>
    </div>
  );
}

export default Login;
