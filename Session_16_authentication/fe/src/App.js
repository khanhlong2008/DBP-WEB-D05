import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
import Welcome from './Components/home/Welcome';
import Navbar from './Components/Shared/Navbar';
import { useState, useEffect } from 'react'
import AuthContext from './context/auth'
import StudentList from './Components/students/StudentList';
import RequiedAuth from './Components/Shared/RequiedAuth';
import axios, { addJwt } from './Util/http'
function App() {
  const [authUser, setAuthUser] = useState(null);
  const [checkingAuthUserDone, setCheckingAuthUserDone] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      setCheckingAuthUserDone(true);
      return;
    }
    axios.get('/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        setAuthUser(response.data);
        addJwt(token);
      })
      .catch((err) => { console.log(err) })
      .finally(() => {
        setCheckingAuthUserDone(true);
      })
  }, [])

  if (!checkingAuthUserDone) {
    return <div style={{ textAlign: 'center' }}> Checking signed-in user status...</div>
  }


  return (
    <div className="App">
      <AuthContext.Provider value={{ user: authUser, setUser: setAuthUser }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/students" element={
            <RequiedAuth mode="navigate">
              <StudentList />
            </RequiedAuth>} />
          <Route path="/classes" element={
            <div>
              <div>This is Class page</div>
              <RequiedAuth mode='navigate'>
                <div>This is only for signed in user</div>
              </RequiedAuth>
            </div>
          }
          />
        </Routes>
      </AuthContext.Provider>
    </div >
  );
}

export default App;
