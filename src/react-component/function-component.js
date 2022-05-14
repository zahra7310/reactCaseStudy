/* 

component name=>PascalCase

function ComponentName(){
    return Jsx;
}

const ComponentName =()=>{
    return Jsx
}

<ComponentName /> or 
<ComponentName> content </ComponentName>

*/

import { BasePage } from '../component/BasePage';
import './function-component.css'

const mystyle={
    backgroundColor:'#222',
    color:'#fff',
     marginTop:'50px',
     padding:'10px',
     heightL:'500px'
};

export const FunctionComponent = () =>{
    return(
    <div style={mystyle}>
      <h2>zahra kalbasi learn react js</h2>
    </div>
    );
};

export const FunctionComponent2=(props)=>{
   return(
    <div style={mystyle}>
      <h2>{props.message}</h2>
      <h3>setionNumber :{props.setionNumber}</h3>
    </div>
   );
};

export const FunctionComponent3=(props)=> {
    return(
        <div className={props.className}>
          <h2>{props.massage}</h2>
          <h3 style={props.style}>setionNumber :{props.setionNumber}</h3>
          {props.children}
          
        </div>
    );
};

export const FunctionComponent4=({style , className ,counter, massage , children})=>{
  // let {style , className , massage , children} = props
  let stylea =style
  let classnamef = `functionc ${ className ? className : ''}`
  return(
    <BasePage Title="Function Component">
    <div className={classnamef} style={{...mystyle , ...stylea}}>
     <h2>{massage}</h2>
     <h6>counter : {counter}</h6>
     <button onClick={()=>{
         counter++;
         console.log(counter);
       }
      }>+</button>
     <p>{children}</p>
    </div>
    </BasePage>
  )
}