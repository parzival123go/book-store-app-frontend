import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { useAuth } from '../context/AuthContext';

const Register = () => {

    const { registerUser } = useAuth()

  const [message, setMessage] = useState('')
        const {
          register,
          handleSubmit,
          watch,
          formState: { errors },
      } = useForm()
  
  // register user    
        const onSubmit = async (data) => {

            try {
                await registerUser(data.email, data.password)
                alert('User registered successfully!')
            } catch (error) {
                setMessage('Please provide a valid email and password')
                console.log(error)
            }
        }
  
        const handleGoogleSignIn = () => {
          // Implement Google Sign-In logic here
          console.log('Google Sign-In clicked');
        }


  return (
    <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
        <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <h2 className='text-xl font-semibold mb-4'>Please Register</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-4'>
                    <label htmlFor='email' className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
                    <input 
                    {...register("email", { required: true })}
                        type='email' 
                        id='email' 
                        placeholder='Email Address' 
                        className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor='password' className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
                    <input 
                    {...register("password", { required: true })}
                        type='password' 
                        id='password' 
                        placeholder='Password' 
                        className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                    />
                </div>

                {
                    message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
                }

                <div>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                        Register
                    </button>
                </div>
                
            </form>

            <p className='align-baseline font-medium mt-4 text-sm'>Already have an account? Please
            <Link to='/login' className='text-blue-500 hover:text-blue-700'> Login</Link>
            </p>

            {/* Google Login Button */}
            <div className='mt-4'>
                <button 
                type='button'
                onClick={handleGoogleSignIn}
                className='w-full flex flex-wrap gap-1 items-center justify-center
                bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'>
                    <FaGoogle className='mr-2' /> Sign in with Google
                </button>
            </div>

            <p className='text-center text-sm mt-4'>@2026 Book Store. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Register