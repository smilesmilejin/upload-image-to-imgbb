// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';
// import ImageUploader from './components/ImageUploader';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>

//       <ImageUploader />
//     </>
//   );
// }

// export default App;


import React from "react";
import ImageUploader from "./components/ImageUploader";
import PersistentImageUploader from "./components/PersistentImageUploader";


function App() {
  return (
    <div className="App">
      <h1>Firebase Storage Image Upload</h1>
      <ImageUploader />
      {/* <PersistentImageUploader /> */}
      <img src='https://i.ibb.co/B5yCRZ0g/Chat-GPT-Image-Jun-19-2025-at-10-46-54-PM.png' alt="Example" style={{ maxWidth: "400px", height: "auto" }} />
    </div>
  );
}

export default App;