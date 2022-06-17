import { Home } from "./Home";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { useState } from 'react';
export function App(){
    const [user, setUser] = useState();

    if(user){
        return <Home></Home>
    }

    return window.location.pathname === '/signup'
        ? <Signup signInUser={setUser}></Signup>
        : <Login signInUser={setUser}></Login>
}

window