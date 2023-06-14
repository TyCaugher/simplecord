import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser , login, logout } from "./features/userSlice";
import { auth } from "./Firebase"
import "./App.css";import Sidebar from "./components/Sidebar";
import Login from "./screens/Login"
import Chat from "./components/Chat";
function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // The user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        // Logging out.
        dispatch(logout());
      }
    });
  }, [dispatch]);

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
}

export default App;