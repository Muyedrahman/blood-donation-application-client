import React, { use } from 'react';
import { AuthConText } from '../contexts/AuthConText/AuthConText';

const useAuth = () => {
    const authInfo = use(AuthConText);
    return authInfo;
};

export default useAuth;