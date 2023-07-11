import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ReactLoading from 'react-loading';



const EventAndNews = lazy(() => import('./componentsAssets/eventsAndNews'));
const Departments = lazy(() => import('./navbarListsComponents/academicsListcomponents/departments'));
const Exams = lazy(() => import('./navbarListsComponents/academicsListcomponents/exams'));
const Library = lazy(() => import('./navbarListsComponents/academicsListcomponents/library'));
const Admissions = lazy(()=> import('./navbarListsComponents/admissionsListcomponents/admissions'))
const IntakeAdverts = lazy(()=> import('./navbarListsComponents/admissionsListcomponents/intakeAdverts'))
const EntryRequirements = lazy(()=> import ( './navbarListsComponents/admissionsListcomponents/entryRequirements'))
const HowToApply = lazy(()=> import ( './navbarListsComponents/admissionsListcomponents/howToApply'))
const Campuses = lazy(()=> import ( './navbarListsComponents/campusesListComponents/campuses'))

const DisplaySection = () => {

  return (
    <div className='display-section'>
      <Suspense fallback={<div className='loading-placeholder'><ReactLoading type='cyclon' color={'blue'} height={'10%'} width={'10%'}/></div>}>
        <Routes>
          <Route exact path='*' element={<EventAndNews />} />
          <Route path='/departments' element={<Departments />} />
          <Route path='/exams' element={<Exams />} />
          <Route path='/library' element={<Library />} />
          
          <Route path='/admissions' element={<Admissions/>}/>
          <Route path='/intakes' element={<IntakeAdverts/>}/>
          <Route path='/entries' element={<EntryRequirements/>}/>
          <Route path='/howToApply' element={<HowToApply/>}/>

          <Route path='/campuses' element={<Campuses/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default DisplaySection;
