import React from 'react';
import {Navbar} from '../../ui';
import { Navigate, Route, Routes } from 'react-router-dom';
import {MarvelPage , DCPage, Search,Hero} from '../pages';
export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className='container'>
        <Routes>
            <Route path='marvel' element = {<MarvelPage/>}/>
            <Route path='dc' element = {<DCPage/>}/>
            <Route path='/' element = {<Navigate to = '/marvel'/>}/>

            <Route path='search' element = {<Search/>}/>
            <Route path='hero' element = {<Hero/>}/>
        </Routes>
        </div>
        
    </>
  )
}
