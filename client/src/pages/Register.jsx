import registerAnimation from '../../assets/lottie/register.json'; 
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';

const Register = () => {

  const { createUser } = useContext(AuthContext);

const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name, email, password };


    console.log(user);
    // continue with registration logic here
    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log("User registered successfully:", user);
      })
      .catch(error => {
        console.error("Error registering user:", error);
        alert(error.message);
      });
};

    return (
<div className="hero  min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-96">
      <Lottie animationData={registerAnimation}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <h1 className="text-5xl font-bold p-5 text-center">Register</h1>
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input type="text" placeholder="Full Name" name='name' className="input input-bordered" required />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="Email" name='email' className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;
