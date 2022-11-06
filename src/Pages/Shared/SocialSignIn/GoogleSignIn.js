import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import { jwtApi } from '../../../api';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const GoogleSignIn = () => {
    const {signInGoogle} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const googleBtnHandle = () => {
        signInGoogle()
        .then(result => {
            console.log(result.user)
            const currentUser = {
                email: result.user?.email
            }
            jwtApi(currentUser, navigate, from)
        })
        .catch(error => console.log(error))
    }
    return (
      <div className='text-center'>
        <button onClick={googleBtnHandle} className="text-orange-500 text-xl mt-3">
          <FaGoogle></FaGoogle>
        </button>
      </div>
    );
};

export default GoogleSignIn;