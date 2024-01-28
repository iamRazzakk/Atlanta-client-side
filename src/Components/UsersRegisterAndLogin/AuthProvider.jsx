/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from '@firebase/auth';
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import { auth } from './Console.firebase';
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    // const axiosPublic =
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const provider = new GoogleAuthProvider();
    const singInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const updateProfileUser = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL,
        })
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, createUser => {
            setUser(createUser);
            if (createUser) {
                //  store data in ls
            } else {
                // remove token
            }
        });
        return () => {
            unSubscribe()
        };
    }, []);
    const authInfo = {
        user,
        createUser,
        singInUser,
        logOut,
        singInWithGoogle,
        loading,
        updateProfileUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;