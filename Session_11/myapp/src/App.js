import Login from "./components/login";
import Home from './components/home'
import React from 'react'
function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)

  const storedLoggedInInfo = localStorage.getItem("isLoggedIn")
 
  if (storedLoggedInInfo === "1") {
    setIsLoggedIn(true)
  }

  const onLoginSubmit = () => {
    setIsLoggedIn(true)
    localStorage.setItem("isLoggedIn", "1")
  }
  return (
    <div className="App">
      {isLoggedIn ? <Home /> : <Login onSubmit={onLoginSubmit} />}
    </div>
  );
}

export default App;
