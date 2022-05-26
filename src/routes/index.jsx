import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';

import Projects from '../views/Projects';

const Router = () => {
    const navigate = useNavigate();

    //To redirect to projects page
    useEffect(() => {
        navigate('/');
    }, [navigate]);

    return (
        <Routes>
            <Route path='/' element={<Projects />} />
        </Routes>
    );
};

export default Router;