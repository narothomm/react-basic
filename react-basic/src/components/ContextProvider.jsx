import React, { createContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';
import auth from '../firebase/firebase.config';

export const userContext = createContext(null);

const provider = new GoogleAuthProvider();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log("Listening the user state change");
    });
    return () => unsubscribe();
  }, []);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, provider); //  ঠিক ফাংশন
  };

  const logout = () => {
    return signOut(auth)
      .then(() => {
        console.log("Signed out");
        setUser(null);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <userContext.Provider value={{ user, setUser, login, logout, signUp, googleSignIn }}>
      {children}
    </userContext.Provider>
  );
};

export default ContextProvider;


// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged}
//  from 'firebase/auth'
// import React, { createContext, useState, useEffect } from 'react'
// import auth from '../firebase/firebase.config'
// import { signInWithPopup,GoogleAuthProvider } from 'firebase/auth/web-extension';

// export const userContext = createContext(null)

// const provider = new GoogleAuthProvider();

// const ContextProvider = ({ children }) => {
//     const [user, setUser] = useState(null)

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, currentUser => {
//             setUser(currentUser)
//             console.log("Listening the user state change")
//         })
//         return () => unsubscribe()
//     },[])

//     const signUp = (email, password) => {
//         return createUserWithEmailAndPassword(auth, email, password)
//     }

//     const login = (email, password) => {
//         return signInWithEmailAndPassword(auth, email, password)
//     }

//     const googleSignIn=()=>{
//         return signInWithProvider(auth,provider)
//     }

//     const logout = () => {
//         return signOut(auth)
//             .then(() => {
//                 console.log("Signed out")
//                 setUser(null)
//             })
//             .catch(error => {
//                 console.error(error)
//             })
//     }

//     return (
//         <userContext.Provider value={{ user, setUser, login, logout, signUp,googleSignIn }}>
//             {children}
//         </userContext.Provider>
//     )
// }

// export default ContextProvider




