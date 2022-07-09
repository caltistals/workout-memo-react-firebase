import {HashRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
// import RecordsPage from "./pages/records/RecordsPage";
import {auth} from "./firebase.js";
import {useAuthState} from "react-firebase-hooks/auth"

function App() {
  const [user] = useAuthState(auth);
  return (
    
   <Router>
     <Routes>
       <Route path = "/" element = {user ? <Home/> : <Navigate to="/login" />} />
       <Route path= "/login" element={user ? <Navigate to="/" /> : <Login />} />
       {/* <Route path = "/records" element = {<RecordsPage/>} /> */}
     </Routes>
   </Router>
  );
}

export default App;
