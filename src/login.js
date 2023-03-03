import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import{connect} from'react-redux';
// import  {useHistory} from 'react-router-dom';

function Login(props) {
// const history=useHistory()
    const user = {
        username: 'test',
        password: 'test',
      };
      
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [userErr, setUserErr] = useState('');
    const [passErr, setPassErr] = useState('');
    const navigate= useNavigate();
    
    const checkValidation = (e) => {
        e.preventDefault()
    
        if (userName === "") {
            setUserErr('Enter your username')
            return;
        } else {
            setUserErr('');
        }
    
        if (password.length < 4) {
            setPassErr('Password must have at least 4 characters');
            return;
        } else {
            setPassErr('');
        }
    
        if (userName === user.username && password === user.password) {
            props.checkValidation();
            navigate('/Accounts')
            // history.push('/')
        } else {
            setUserErr('Invalid username or password');
        }
    }
    

//     const moveFunc=()=>{
// navigate('/signup')
//     }

    return (
        <div>
        <div className="container-fluid">
            <div className="row main-content text-center">
                {/* <div className="col-md-4 text-center company__info">
                    <span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
                    <h4 className="company_title">Your Company Logo</h4>
                </div> */}
                <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                        <div className="container-fluid">
                            <div className="row">
"                                <h2 className="text-white">Log In</h2>
"                            </div>
                            <div className="row">
                                <form control="" className="form-group">
                                    <div className="row">
                                        <input type="text" name="username" onChange={e=>setUserName(e.target.value)} id="username" className="form__input" placeholder="Username" />
                                    </div>
                                    <p className='text-danger'>{userErr}</p>
                                    <div className="row">
                                        <input type="password" name="password" id="password" onChange={e=>setPassword(e.target.value)} className="form__input" placeholder="Password" />
                                    </div>
                                    <p className='text-danger'>{passErr}</p>

                                    <div className="row">
                                        <input type="submit" onClick={checkValidation} className="btn" />
                                    </div>
                                </form>
                            </div>
                            {/* <div className="row">
                                <p>Don't have an account? <a href=' ' onClick={moveFunc}>Sign UP</a></p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid text-center footer">

            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
      return {
         isLoggedIn: state.isLoggedIn,
       };
     };
const mapDispatchToProps = dispatch => {
  return {
    checkValidation:() => dispatch({ type: 'Access' }),
   
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);