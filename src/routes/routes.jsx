import { Routes, Route, Navigate } from 'react-router';
import { Home } from '../pages/Home';
import  { Details } from '../pages/Details';

export function NovoProjetoRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/details" element={<Details />} />
        </Routes>
    )
}