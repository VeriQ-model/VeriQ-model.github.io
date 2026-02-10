import React from  'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/styles.css';

//utworzenie kontenera reacta w root index.html
ReactDOM.createRoot(document.getElementById('root')).render(
    //umieszczenie komponentu app do root i uruchomienie aplikacji
    /*<React.StrictMode>
        <App />
    </React.StrictMode>*/
    <h1>REACT DZIAŁA</h1>
);