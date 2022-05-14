import React from 'react';
import { showInfo , course} from '../../../react-module/my-module';
import { BasePage } from '../../BasePage';


export const ModulesPage = () => {
    console.log(showInfo());
 const mycourse =new course('React Js' , 40);
  return(
      <BasePage Title="Modules Page">
        <h1>Modules Page</h1>
        <h2>{showInfo()}</h2>
     </BasePage>
  );
};
