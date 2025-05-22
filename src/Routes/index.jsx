import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GeneralLayout from '../Container/Layouts/GeneralLayout';
import LoadingIndicator from '../Container/Common/LoadingIndicator';
import Contact from '../Container/Pages/Contact';
const Home = lazy(() => import("../Container/Pages/Home"));
const Services = lazy(() => import("../Container/Pages/Services"));
const About = lazy(() => import("../Container/Pages/About"));
const Projects = lazy(() => import("../Container/Pages/Projects"));
const Works = lazy(() => import("../Container/Pages/Works"));

export default function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GeneralLayout />}>
          <Route path="/" element={<Suspense fallback={<LoadingIndicator/>}><Home /></Suspense>} />
          <Route path="/services" element={<Suspense fallback={<LoadingIndicator/>}><Services /></Suspense>} />
          <Route path="/about" element={<Suspense fallback={<LoadingIndicator/>}><About /></Suspense>} />
          <Route path="/projects" element={<Suspense fallback={<LoadingIndicator/>}><Projects /></Suspense>} />
          {/* <Route path="/works" element={<Suspense fallback={<LoadingIndicator/>}><Works /></Suspense>} /> */}
          <Route path="/contact" element={<Suspense fallback={<LoadingIndicator/>}><Contact /></Suspense>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
