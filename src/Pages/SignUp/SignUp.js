import React from 'react';
import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";

const SignUp = () => {
    const signUpHandle = event => {
        event.preventDefault()
    }
    return (
      <div className="hero my-20">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left mr-40">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
            <form onSubmit={signUpHandle} className="card-body">
              <h1 className="text-5xl font-bold text-center">Sign Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-orange-500 border-0 hover:bg-orange-600">
                  Login
                </button>
              </div>
            </form>
            <p className="text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-orange-500 font-semibold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;