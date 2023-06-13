import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser , login, logout } from "./features/userSlice";
import { auth } from "./Firebase"
import "./App.css";import Sidebar from "./components/Sidebar";
import Login from "./screens/Login"
import Chat from "./components/Chat";
function App() {    

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          // The user is now logged in
          dispatch(
            login({
              uid: authUser.photoURL,
              email: authUser.email,
              displayName: authUser.displayName,
            })
          );
        } else {
          //User is logged out
          dispatch(logout());
        }
      })
    })

     return (
      <div className="app">   
        {user ? (
          <>
            <Sidebar />
            <Chat />
          </>
        ) : (
          <Login />
        )}
      </div>
  );
} export default App;