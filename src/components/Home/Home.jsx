import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/Firebase.init";
import { useState } from "react";


const Home = () => {
    const [user,setUser]=useState(null);




    const provider= new GoogleAuthProvider();

    const handleSignOut=()=>{
        signOut(auth)
        .then(()=>{
            setUser(null);

        })
        .catch(error=>{
            console.log(error);
        })
    }

   


    const handleGoogleSignIn=()=>{
        // console.log('google coming soon.....');

     signInWithPopup(auth,provider)
    .then(result=>{
        console.log(result.user);
        setUser(result.user);
    })
    .catch(error=>{
        console.log(error);
        setUser(null);

    })


    }
    return (
        <div className="w-11/12 mx-auto text-center font-bold mt-28">
          
            {
                user && <div>
                    <h1>{user.displayName}</h1>
                    <h4>{user.email}</h4>
                </div>
            }

             {
               user?<button className="border rounded-xl p-3" onClick={handleSignOut}>SignOut</button>: <button className="border rounded-xl p-3" onClick={handleGoogleSignIn}>LogIn</button>
           }
        </div>
    );
};

export default Home;