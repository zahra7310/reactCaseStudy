import React from 'react';
import './base-page.css';
import { HelmetProvider, Helmet } from 'react-helmet-async';

export const BasePage = ({ Title, children }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>React Case Study - {Title}</title>
        <meta name='discription' content='react case study' />
      </Helmet>
      <div className='container-wraper'>
        <h2 className='bacepage'>{Title}</h2>
        {children}
      </div>
    </HelmetProvider>
  )
}
