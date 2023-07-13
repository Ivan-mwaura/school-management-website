import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ReactLoading from 'react-loading';



const EventAndNews = lazy(() => import('../componentsAssets/eventsAndNews'));
const Departments = lazy(() => import('../navbarOneAssets/navbarOneListsComponents/academicsListcomponents/departments'));
const Exams = lazy(() => import('../navbarOneAssets/navbarOneListsComponents/academicsListcomponents/exams'));
const Library = lazy(() => import('../navbarOneAssets/navbarOneListsComponents/academicsListcomponents/library'));
const Admissions = lazy(()=> import('../navbarOneAssets/navbarOneListsComponents/admissionsListcomponents/admissions'))
const IntakeAdverts = lazy(()=> import('../navbarOneAssets/navbarOneListsComponents/admissionsListcomponents/intakeAdverts'))
const EntryRequirements = lazy(()=> import ( '../navbarOneAssets/navbarOneListsComponents/admissionsListcomponents/entryRequirements'))
const HowToApply = lazy(()=> import ( '../navbarOneAssets/navbarOneListsComponents/admissionsListcomponents/howToApply'))
const Campuses = lazy(()=> import ( '../navbarOneAssets/navbarOneListsComponents/campusesListComponents/campuses'))
const Contacts = lazy(()=> import ( '../navbarOneAssets/navbarOneListsComponents/contactUsListComponents/contacts'))
const FAQS = lazy(()=> import ( '../navbarOneAssets/navbarOneListsComponents/contactUsListComponents/faqs'))
const SocialMedia = lazy(()=> import ( '../navbarOneAssets/navbarOneListsComponents/contactUsListComponents/socialMedia'))
const AboutUs = lazy(()=> import ( '../navbarOneAssets/navbarOneListsComponents/aboutUsListComponents/about'))  
const WhyAnestar = lazy(()=> import ( '../navbarOneAssets/navbarOneListsComponents/aboutUsListComponents/whyAnestar'))
const DirectorsMessage = lazy(()=> import ( '../navbarOneAssets/navbarOneListsComponents/aboutUsListComponents/directorsMessage'))
const Organization = lazy(()=> import ( '../navbarOneAssets/navbarOneListsComponents/aboutUsListComponents/organization'))

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

          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/faqs' element={<FAQS/>}/>
          <Route path='/socialMedia' element={<SocialMedia/>}/>

          <Route path='/aboutUs' element={<AboutUs/>}/>
          <Route path='/whyChoose' element={<WhyAnestar/>}/>
          <Route path='/directorsMessage' element={<DirectorsMessage/>}/>
          <Route path='/organization' element={<Organization/>}/>
          
        </Routes>
      </Suspense>
    </div>
  );
};

export default DisplaySection;
