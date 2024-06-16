import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteList from './routes/routeList';

//---------------------------- General     CSS ----------------------------------------------------------------------
import './App.css';


//---------------------------- main   --------------------------------------------------------------------------------
const App = () => {
    return (
        <>
            <BrowserRouter>
                <RouteList/>
            </BrowserRouter>
        </>
    );
}

export default App;
