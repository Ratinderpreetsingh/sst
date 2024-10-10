import './App.css';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Customer from './pages/Customer/Customer.jsx';
import Login from './auth/Login';
import AddShop from './pages/Shops/Add_shop.jsx';
import Shop from './pages/Shops/Shop.jsx';
import Definition from './pages/Definition/Definition.jsx';
import AddDefinition from './pages/Definition/Add_definiton.jsx';
import DefinitionTest from './pages/Definition/Definition-test.jsx';
import Events from './pages/Events/Events.jsx';
import Surveys from './pages/Surveys/Surveys.jsx';
import SurveyType from './pages/Surveys/Survey-type.jsx';
import SurveyAlert from './pages/Surveys/Survey-alert.jsx';
import UnresolvedIssue from './pages/Issue/Unresolved-issue.jsx';
import Hotspot from './pages/Hotspot/Hotspot.jsx';
import PerfectScore from './pages/PerfectScore/Perfect_score.jsx';
import Misfire from './pages/Misfire/Misfire.jsx';
import { useSelector } from 'react-redux';
import { AuthPath, CustomerPath, DashboardPath, DefinitionPath, EventsPath, HotspotPath, IssuesPath, MisfirePath, ScorePath, ShopPath, SurveysPath } from './Constant/Pages_Routes.jsx';
import AuthCommon from './auth/AuthCommon.jsx';
import ForgotPassword from './auth/ForgotPassword.jsx';
import Layout from './common/layout.jsx';
import { Component, useEffect, useMemo, useState } from 'react';
import { getCookie } from './utils/Cookies.jsx';
import ProtectedRoutes from './Guards/ProtectedRoutes.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import ChangePassword from './auth/ChangePassword.jsx';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [isAuthenticated,setAuthenticated] = useState('')
 useEffect(()=>{
   setAuthenticated(getCookie('token'))
 },[])
 console.log(isAuthenticated)
  return (
    <>
    <ToastContainer/>
      <Routes>
      <Route path='/' element={<Navigate to={isAuthenticated ? "/dashboard" : "/auth/login"} replace />} />


        <Route path="/auth"  element={<AuthCommon />}>
          <Route index path={AuthPath.LOGIN} element={<Login />} />
          <Route path="forgot" element={<ForgotPassword />} />
          <Route path="changepassword" element={<ChangePassword />} />

        </Route>

        <Route path="*" element={<ProtectedRoutes><Layout /></ProtectedRoutes> }>
          <Route index path={DashboardPath.DASHBOARD} element={<Dashboard />} />
          <Route path={CustomerPath.CUSTOMER} element={<Customer />} />
          <Route path={ShopPath.ADD_SHOP} element={<AddShop />} />
          <Route path={ShopPath.SHOP} element={<Shop />} />
          <Route path={DefinitionPath.DEFINITION} element={<Definition />} />
          <Route path={DefinitionPath.ADD_DEFINITION} element={<AddDefinition />} />
          <Route path={DefinitionPath.DEFINITION_TEST} element={<DefinitionTest />} />
          <Route path={EventsPath.EVENTS} element={<Events />} />
          <Route path={SurveysPath.SURVEYS} element={<Surveys />} />
          <Route path={SurveysPath.SURVEYS_TYPE} element={<SurveyType />} />
          <Route path={SurveysPath.SURVEYS_ALERT} element={<SurveyAlert />} />
          <Route path={IssuesPath.UNRESOLVED_ISSUE} element={<UnresolvedIssue />} />
          <Route path={HotspotPath.HOTSPOT} element={<Hotspot />} />
          <Route path={ScorePath.PERFECT_SCORE} element={<PerfectScore />} />
          <Route path={MisfirePath.MISFIRE} element={<Misfire />} />

          <Route path='*' element={<NotFound />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
// import './App.css';
// import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
// import React, { Suspense, useEffect, useState } from 'react';
// import { ToastContainer } from 'react-toastify';
// import { getCookie } from './utils/Cookies.jsx';
// import ProtectedRoutes from './Guards/ProtectedRoutes.jsx';
// import AuthCommon from './auth/AuthCommon.jsx';
// import NotFound from './pages/NotFound/NotFound.jsx';
//  import { AuthPath, CustomerPath, DashboardPath, DefinitionPath, EventsPath, HotspotPath, IssuesPath, MisfirePath, ScorePath, ShopPath, SurveysPath } from './Constant/Pages_Routes.jsx';

// // Dynamic imports
// const Dashboard = React.lazy(() => import('./pages/Dashboard/Dashboard.jsx'));
// const Customer = React.lazy(() => import('./pages/Customer/Customer.jsx'));
// const Login = React.lazy(() => import('./auth/Login'));
// const AddShop = React.lazy(() => import('./pages/Shops/Add_shop.jsx'));
// const Shop = React.lazy(() => import('./pages/Shops/Shop.jsx'));
// const Definition = React.lazy(() => import('./pages/Definition/Definition.jsx'));
// const AddDefinition = React.lazy(() => import('./pages/Definition/Add_definiton.jsx'));
// const DefinitionTest = React.lazy(() => import('./pages/Definition/Definition-test.jsx'));
// const Events = React.lazy(() => import('./pages/Events/Events.jsx'));
// const Surveys = React.lazy(() => import('./pages/Surveys/Surveys.jsx'));
// const SurveyType = React.lazy(() => import('./pages/Surveys/Survey-type.jsx'));
// const SurveyAlert = React.lazy(() => import('./pages/Surveys/Survey-alert.jsx'));
// const UnresolvedIssue = React.lazy(() => import('./pages/Issue/Unresolved-issue.jsx'));
// const Hotspot = React.lazy(() => import('./pages/Hotspot/Hotspot.jsx'));
// const PerfectScore = React.lazy(() => import('./pages/PerfectScore/Perfect_score.jsx'));
// const Misfire = React.lazy(() => import('./pages/Misfire/Misfire.jsx'));
// const ForgotPassword = React.lazy(() => import('./auth/ForgotPassword.jsx'));
// const ChangePassword = React.lazy(() => import('./auth/ChangePassword.jsx'));
// // const Layout = React.lazy(() => import('./common/layout.jsx'));
// import Layout from './common/layout.jsx';

// // import Layout from './common/layout.jsx';

// const App = () => {
//   const [isAuthenticated, setAuthenticated] = useState('');

//   useEffect(() => {
//     setAuthenticated(getCookie('token'));
//   }, []);

//   return (
//     <>
//       <ToastContainer />
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path='/' element={<Navigate to={isAuthenticated ? "/dashboard" : "/auth/login"} replace />} />
//           <Route path="/auth" element={<AuthCommon />}>
//             <Route index path="/auth/login" element={<Login />} />
//             <Route path="forgot" element={<ForgotPassword />} />
//             <Route path="changepassword" element={<ChangePassword />} />
//           </Route>

//           <Route path="*" element={<ProtectedRoutes><Layout /></ProtectedRoutes>}>
//           <Route index path={DashboardPath.DASHBOARD} element={<Dashboard />} />
//          <Route path={CustomerPath.CUSTOMER} element={<Customer />} />
//          <Route path={ShopPath.ADD_SHOP} element={<AddShop />} />
//          <Route path={ShopPath.SHOP} element={<Shop />} />
//          <Route path={DefinitionPath.DEFINITION} element={<Definition />} />
//          <Route path={DefinitionPath.ADD_DEFINITION} element={<AddDefinition />} />
//          <Route path={DefinitionPath.DEFINITION_TEST} element={<DefinitionTest />} />
//          <Route path={EventsPath.EVENTS} element={<Events />} />
//          <Route path={SurveysPath.SURVEYS} element={<Surveys />} />
//          <Route path={SurveysPath.SURVEYS_TYPE} element={<SurveyType />} />
//          <Route path={SurveysPath.SURVEYS_ALERT} element={<SurveyAlert />} />
//          <Route path={IssuesPath.UNRESOLVED_ISSUE} element={<UnresolvedIssue />} />
//          <Route path={HotspotPath.HOTSPOT} element={<Hotspot />} />
//          <Route path={ScorePath.PERFECT_SCORE} element={<PerfectScore />} />
//          <Route path={MisfirePath.MISFIRE} element={<Misfire />} />


//             <Route path='*' element={<NotFound />} />
//           </Route>
//         </Routes>
//       </Suspense>
//     </>
//   );
// }

// export default App;
