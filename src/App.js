import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/HeaderFolder/Header";
import Sidebar from "./components/SidebarFolder/Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Mail from "./components/MailFolder/Mail";
import EmailList from "./components/EmailListFolder/EmailList";
import SendMail from "./components/SendMailFolder/SendMail";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login } from "./features/userSlice";
import Login from "./components/LoginFolder/Login";
import { auth } from "./firebase";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  }, []);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/">
                <EmailList />
              </Route>
            </Switch>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
