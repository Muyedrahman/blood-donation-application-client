import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';

const SocialLogin = () => {
    const { signInGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate()
    // console.log('location in social', location)


    const handleGoogleSignIn = () =>{
        signInGoogle()
        .then(result =>{
            console.log(result.user);
            navigate(location.state || '/');
        })
        .catch(error =>{
            console.log(error)

        })

    }


    return (
        <div>
        
         <p className="text-center my-2">OR</p>
            
         {/* Google Login */}
         <button
         onClick={handleGoogleSignIn}
          className="btn py-3 rounded-md font-semibold hover:bg-red-600 transition mt-4 btn-outline w-full flex items-center gap-2">
           <FcGoogle className="text-xl" />
           Continue with Google
         </button>
        </div>
    );
};

export default SocialLogin;