import React from 'react';
import { NavbarComponent } from './Navbar';
import { Route, Routes } from "react-router-dom";
import { Router } from './../Routing';

export function LayoutComponent() {
    return (
        <>
            <NavbarComponent />
            <div className="container py-5">
                <Routes>

                    {
                        Router.map((route, index) => {
                            const { component, ...rest } = route;
                            return <Route key={index} {...rest} element={component} />;
                        })
                    }
                
                </Routes>
            </div>
        </>
    );
}