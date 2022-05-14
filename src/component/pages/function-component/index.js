import React from 'react';
import { BasePage } from '../../BasePage';
import {FunctionComponent2 , FunctionComponent3,FunctionComponent4} from '../react-component/function-component';


export const  FunctionComponents= () => {
  return (
    <BasePage Title="Function Component">
        <FunctionComponent2  message="hello wold" setionNumber="2"/>
        <FunctionComponent2  message="hello wold" setionNumber="3"/>
        <FunctionComponent3  message="my love life" setionNumber="3" className="box" style={{border:'10px solid yellow',borderRadius:'20px'}}/>
        <FunctionComponent3 className="box">
           <p style={{color:'darkgreen'}}>
              zahra kalbasi 24age ,mylove metiii
           </p>
           <FunctionComponent2/>
        </FunctionComponent3>
        <FunctionComponent4 massage="zahra kalbasi" counter='2' style={{color:'#fff',fontSize:'19px'}}>
        <p>nklv lfc dmlvmlldrlefelellefl;f;eeeeeeelfme;fleldel;edee;e,;e;cedlfel</p>
      </FunctionComponent4>
    </BasePage>
  )
};
