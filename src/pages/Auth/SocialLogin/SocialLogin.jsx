import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../hooks/useAuth';

const SocialLogin = () => {
    const { signInGoogle } = useAuth();
    const handleGoogleSignIn = () =>{
        signInGoogle()
        .then(result =>{
            console.log(result.user)
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