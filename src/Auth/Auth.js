import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
    return (
        <div>
          <Routes>
              <Route path={"Login"} element={<Login/>}/>
              <Route path={"Register"} element={<Register/>}/>
          </Routes>
        </div>
    );
};

export default Auth;