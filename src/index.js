import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// const rootElement = document.getElementById('root');
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   rootElement
// );


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);