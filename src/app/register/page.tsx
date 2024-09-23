// 'use client'
// import React, { useState } from 'react'
// import { toast } from 'react-hot-toast';

// const Register = () => {
//   const [error, setError] = useState("");

//   const isValidEmail = (email: string) => {
//     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
//     return emailRegex.test(email);
//   }

//   const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const email = e.currentTarget.elements.email.value;
//     const password = e.currentTarget.elements.password.value;

//     if (!isValidEmail(email)) {
//       setError("Email is Not Valid!");
//       return;
//     }
//     if (password.length < 4) {
//       setError("Password Must Be Greater Than 4 Characters!");
//       return;
//     }

//     try {
//       const res = await fetch("/api/register", {
//         method: "POST",
//         headers: {
//           'Content-Type': "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();
//       console.log(data);
      
//       if (res.status === 400) {
//         setError(data.message); 
//       } else if (res.status === 201) {
//         setError("");
//         toast.success("User Registered Successfully!"); // Show success toast

//         // Clear form inputs
//         e.currentTarget.reset();
//       }
//     } catch (error) {
//       console.error("Registration error:", error);
//     }
//   }

//   return (
//     <div className='center'>
//       <h1 className='text-2xl'>Welcome to the Register Page</h1>
      
//       <div>
//         <form className='form_validation' onSubmit={handleSubmitForm}>
//           <div className='flex flex-row gap-4'>
//             <label htmlFor="email" className='text-lg'>Email</label>
//             <input required autoComplete='off' className='border' type='email' placeholder='Email...' name='email' />
//           </div>

//           <div className='flex flex-row gap-4'>
//             <label htmlFor="password" className='text-lg'>Password</label>
//             <input required autoComplete='off' className='border' type='password' placeholder='Password...' name='password' />
//           </div>

//           <button type="submit" className='border-2 border-gray-400 rounded-md w-24 items-center justify-center flex flex-row'>
//             Register
//           </button>
//           <h2>{error && error}</h2>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Register;




















'use client'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setError("Email is Not Valid!");
      return;
    }
    if (password.length < 4) {
      setError("Password Must Be Greater Than 4 Characters!");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.status === 400) {
        setError(data.message); 
      } else if (res.status === 201) {
        setError("");
        toast.success("User Registered Successfully!");

        // Clear form inputs by resetting state
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      setError("Server error, please try again later.");
      console.error("Registration error:", error);
    }
  }

  return (
    <div className='center'>
      <h1 className='text-2xl'>Welcome to the Register Page</h1>
      
      <div>
        <form className='form_validation' onSubmit={handleSubmitForm}>
          <div className='flex flex-row gap-4'>
            <label htmlFor="email" className='text-lg'>Email</label>
            <input
              required
              autoComplete='off'
              className='border'
              type='email'
              placeholder='Email...'
              name='email'
              value={email} // Controlled input
              onChange={(e) => setEmail(e.target.value)} // Update state on input change
            />
          </div>

          <div className='flex flex-row gap-4'>
            <label htmlFor="password" className='text-lg'>Password</label>
            <input
              required
              autoComplete='off'
              className='border'
              type='password'
              placeholder='Password...'
              name='password'
              value={password} // Controlled input
              onChange={(e) => setPassword(e.target.value)} // Update state on input change
            />
          </div>

          <button type="submit" className='border-2 border-gray-400 rounded-md w-24 items-center justify-center flex flex-row'>
            Register
          </button>
          <h2>{error && error}</h2>
        </form>
      </div>
    </div>
  )
}

export default Register;
