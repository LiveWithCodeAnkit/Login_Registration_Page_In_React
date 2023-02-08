import './App.css';
import UseEffectEx from './Componets/Hooks/UseEffect/UseEffectEx';
import UseEffectWithApi from './Componets/Hooks/UseEffect/UseEffectWithApi';
// import StateUseArray from './Componets/Hooks/StateUseArray';
// import TodoList from './Componets/Hooks/TodoList';
// import Login2 from './Componets/Login/Login2';
// import NavBar from './Componets/NavBar.js/NavBar';
// import Regis from './Componets/Regis/Regis';
// import React, { useState } from 'react';
// import Login from './Componets/Login/Login';


function App(props) {
  // const [activeState, setActive] = useState(0)

  return (
    <>

      {/* {activeState === 1 ? <NavBar tit1={"Login"} /> : <NavBar tit1={"Registration"} />} */}


      {/* <NavBar tit1={activeState === 1 ? "Login" : "Registration"} /> */}



      {/* {activeState === 1 && <Login />} */}
      {/* <NavBar />
      <Regis /> */}
      {/* {activeState === 0 && <NavBar tit1={"Registration"} />} */}
      {/* {activeState === 0 && <Regis currPa={setActive} />} */}

      {/* <StateEx /> */}



      {/* <div>
        <StateUseArray />
      </div> */}

      {/* <div>
        <TodoList />
      </div> */}

      <div>
        {/* <Login2 /> */}

        {/* <UseEffectEx /> */}
        <UseEffectWithApi />
      </div>

    </>
  );
}

export default App;
