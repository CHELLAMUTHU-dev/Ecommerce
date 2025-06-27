import {useState } from 'react';
import { Link,useNavigate }  from "react-router-dom";
import axios from 'axios'
import './index.css'
import { FaTwitter ,FaFacebookF ,FaInstagram ,FaTelegram ,FaGooglePlusG,FaAmazon    } from "react-icons/fa6";

const Signup = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false)


    const isShowPassword = () => {
        setShowPassword(prevState => !prevState)  
    }

    const type = showPassword ? 'text' : 'password'

    const updateUsername = (event) => {
        setUsername(event.target.value)
    }
    
    const updateEmail = event => {
        setEmail(event.target.value)
    }

    const updatePassword = event => {
        setPassword(event.target.value)
    }

    const updateConfirmPassword = event => {
        setConfirmPassword(event.target.value)
    }

    const handleSubmit  =  event => {
    
        event.preventDefault()
        if(password !== confirmPassword ) return setError('Passwords do not match')
        if(username === '' || email === '' || password === '') return setError('All fields are required')
        axios.post('http://localhost:3001/user/register',{username,email,password})
        .then(result => {console.log(result)
            if(result.status === 201){
                alert('User Created')
                navigate('/login')
            }
            else{
                alert('User Not Created')
            }
        }
    )
        .catch(err => console.log(err))
    }


    
        return(
            <div className='register-route'>
            <div className='register'>
                <div className='register-left'>
                    <div className='logo-container'>
                        <FaAmazon className='logo' />
                        <h1 >Amazon</h1>
                    </div>
                    <div className='register-left-content'>
                        <h1>Don't have an account?</h1>
                        <p>Register to access all the features of our service.Manage your business in one place.It's free!</p>
                        <div className='icon-container'>
                            <a href='https://www.twitter.com/' target='_blank' rel="noreferrer" >
                                <FaTwitter className='icon'/>
                            </a>
                            <a href='https://www.facebook.com/' target='_blank' rel="noreferrer" >
                                <FaFacebookF className='icon'/>
                            </a>
                            <a href='https://www.instagram.com/' target='_blank' rel="noreferrer" >
                                <FaInstagram className='icon' />
                            </a>
                            <a href='https://web.telegram.org/a/' target='_blank' rel="noreferrer" >
                                <FaTelegram className='icon' />
                            </a>
                            <a href='https://myaccount.google.com/' target='_blank' rel="noreferrer" >
                            <FaGooglePlusG className='icon' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='register-container'>
                <h1 className='register-heading'>New Register</h1>
                <form onSubmit={handleSubmit} className='register-form'>
                    <div className='input-container'>
                        <label htmlFor='username'>Username</label>
                        <input type='text' id='username' placeholder='USERNAME' onChange={updateUsername}/> 
                    </div>
                    <div className='input-container'> 
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' placeholder='EMAIL'  onChange={updateEmail}/> 
                    </div>
                    <div className='input-container'>
                        <label htmlFor='password'>Password</label>
                        <input type={type} id='password' placeholder='PASSWORD'  onChange={updatePassword}/> 
                    </div>
                    <div className='input-container'>
                        <label htmlFor='confirm-password'>Confirm Password</label>
                        <input type={type} id='confirm-password' placeholder='CONFIRM PASSWORD' onChange={updateConfirmPassword} />
                    </div>
                    <div className='checkbox-container'>
                        <input type='checkbox' id='checkbox' placeholder='CONFIRM PASSWORD' onChange={isShowPassword} />
                        <label htmlFor='checkbox'>show Password</label>
                        <button type='submit' className='submit'>Register</button>
                    </div>
                    {error && <p className='error'>{error}</p>}
                </form>
                <div className='redirect-container'>
                    <p className='redirect-paragraph'>Already Have an Account</p>
                    <Link to='/login'>
                    <p  className='redirect-button'>Click here</p>        
                    </Link>
                </div>
            </div>
            </div>
            </div>
        )
    }


export default Signup;
