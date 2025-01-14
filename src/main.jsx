import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Loan from './component/services/Loan.jsx'
import CivilLaw from './component/services/CivilLaw.jsx'
import Income_tax from './component/services/Income_tax.jsx'
import Registration from './component/services/Registration.jsx'
import Service from './component/services/Service.jsx'
import Layout from './Layout.jsx'
import Certificate from './component/services/Certificate.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/loan" element={<Loan />} />
          <Route path="/income-tax" element={<Income_tax />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/civil-law" element={<CivilLaw />} />
          <Route path="/service" element={<Service />} />
          <Route path='/certificate' element={<Certificate />} />
          <Route path='/home' element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
