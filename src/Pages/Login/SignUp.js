import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const SignUp = () => {
       const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    
    if(loading || gloading){
      return <Loading></Loading>
    }
             let SignInError;
    if(guser || user){
        console.log(guser || user);
    }

    if(error || gerror){
      SignInError=<p className='text-red-500'><small>{error?.message || gerror?.message}</small></p>
       }

    const onSubmit = (data) => {
      createUserWithEmailAndPassword(data.email, data.password);
    }
    return (
        <div className='flex h-screen justify-center items-center'>
        <div className="card w-96 bg-base-100 shadow-xl">
   <div className="card-body">
 <h2 className="text-center text-2xl font-bold">SignUp</h2>

 {/* Use UseHook */}
 <form onSubmit={handleSubmit(onSubmit)}>
 <div className="form-control w-full max-w-xs">
 

 <label className="label">
  <span className="label-text  font-bold">Name</span>
  
 </label>
 <input 
 type="name" 
 placeholder="Your Name" 
 className="input input-bordered w-full max-w-xs" 
 {...register("name",{
  required:{
 value: true,
 message:'Name is Required'
  }
  
 })}
 />
 <label className="label">
 {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
 </label>
 
  
 
 </div>
 <div className="form-control w-full max-w-xs">
 <label className="label">
 <span className="label-text  font-bold">Email</span>
 </label>
<input 
type="email" 
placeholder="Your Email" 
className="input input-bordered w-full max-w-xs" 
{...register("email",{
 required:{
value: true,
message:'Email is Required'
 },
 pattern: {
   value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
   message: 'Provide a valid email' // JS only: <p>error message</p> TS only support string
 }
})}
/>

<label className="label">
{errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
{errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
 
 
</label>
</div>
 



 
   
 
 </form>
 <form onSubmit={handleSubmit(onSubmit)}>

 <div className="form-control w-full max-w-xs">
<label className="label">
 <span className="label-text  font-bold">Password</span>
 
</label>
<input 
type="password" 
placeholder="Your Password" 
className="input input-bordered w-full max-w-xs" 
{...register("password",{
 required:{
value: true,
message:'Password is Required'
 },
 minLength: {
   value: 6,
   message: 'Al leaast 6 character' // JS only: <p>error message</p> TS only support string
 }
})}
/>

<label className="label">
{errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
{errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
 
 
</label>
</div>

 
   {
     SignInError
   }
 
   <input className='btn w-full max-w-xs' type="submit" value='sign up'/>
   <p><small>Already have an account? <span className='text-primary text-bold'><Link to='/login'>Login</Link></span></small></p>
 </form>

 <div className="divider">OR</div>
 
 <button onClick={() => signInWithGoogle()} className="btn btn-outline">CONTINUE WITH GOOGLE</button>

</div>
</div>
     </div>
    );
};

export default SignUp;