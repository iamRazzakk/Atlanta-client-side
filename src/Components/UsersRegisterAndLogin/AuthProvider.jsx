/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from '@firebase/auth';
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import { auth } from './Console.firebase';
import useAxiosPublic from './../Hook/axiosPublic';
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const axiosPublic = useAxiosPublic()
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
    const updateProfileUser = (name, email) => {
        return updateProfile(auth.currentUser, {
            displayName: name, email: email,
        })
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser);
            if (currentUser) {
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem(200, res.data.token)
                        }
                    })
            } else {
                localStorage.removeItem(200)
            }

        })
        return () => {
            unSubscribe()
        };
    }, [axiosPublic]);
    const authInfo = {
        user,
        createUser,
        singInUser,
        logOut,
        singInWithGoogle,
        loading,
        updateProfileUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;