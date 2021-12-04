import SignInPage from "./Pages/SignInPage"; 
import SignUpPage from "./Pages/SignUpPage"; 
import HomePage from "./Pages/HomePage"; 

import { Routes, Route } from "react-router-dom"; 

function App() {
  return (
    <main>
       <Routes>
            <Route exact path="/signin" component={SignInPage} />
            <Route exact path="/signup" component={SignUpPage} />
        </Routes>
    </main>
  );
}

export default App;
