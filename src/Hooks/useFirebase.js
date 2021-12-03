import { useEffect, useState } from "react";
import firebaseInitialize from "../Firebase/Firebase.init";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import Swal from "sweetalert2";

//////
firebaseInitialize();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  /////////==========================///////////////
  //==================== Observe
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);
  //////////
  useEffect(() => {
    fetch(`https://thawing-earth-84952.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin));
  }, [user.email]);
  //==================== Google Sign IN
  //
  // Google login

  const handleGoogleSignIn = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successfull",
          showConfirmButton: false,
          timer: 2000,
        });

        const destination = location?.state?.from || "/";
        history.replace(destination);
        setError("");
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //==================== Registration
  // Register user

  const registerUser = (email, password, name, location, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const newUser = { email, displayName: name };
        setUser(newUser);
        savetoDB(email, name);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registration successfull",
          showConfirmButton: false,
          timer: 2000,
        });

        // date send to firebase

        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch(error => {
            setError(error.message);
          });

        const destination = "/home";
        history.replace(destination);
      })
      .catch(error => {
        const errorMessage = (error.message = "User already registered");
        setError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  //==================== LogIn
  const loginUser = (email, password, history, location) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        setUser(user);
        //----------
        Swal.fire("Good job!", "LogIn successfully", "success");
        const destination = location.state?.from || "/";
        history.push(destination);
        //----------
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //==================== LOG OUT
  const logoutUser = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        //----------
        Swal.fire("log Out!", "See you again", "success");
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  /////////==========================///////////////
  const savetoDB = (email, displayName) => {
    const users = { email, displayName };
    fetch("https://thawing-earth-84952.herokuapp.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  /////////==========================///////////////
  //==================== RETURN
  return {
    user,
    admin,
    error,
    isLoading,
    registerUser,
    loginUser,
    handleGoogleSignIn,
    logoutUser,
  };
};

export default useFirebase;
