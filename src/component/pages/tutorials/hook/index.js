import React, { useState, useEffect } from 'react'

export const ReactHook = () => {

  /*state*/

  const [state, setState] = useState('my state');
  const [message, setMassage] = useState('my message');
  const [visible, setVisible] = useState(true);
  const [counter, setCounter] = useState(0);

  /*eventHandler*/

  const changeState = () => {
    setState('my new state');
  }
  const changeVisible = () => {
    setVisible(!visible);
  }

  /* useeffect*/

  // useEffect(()=>{
  //     console.log('1-1 mount after update');
  //   return ()=>{
  //     console.log('1-unmount befor update');
  //   };
  // },[counter]);


  // useEffect(() => {
  //   console.log('befor update message or counter');
  //   return () => {
  //     console.log('after update message or counter');
  //   };
  // },[counter , message]);

  useEffect(()=>{
    console.log('befor update');
    return()=>{
    console.log('after update');
    }
  },[])

  return (
    <div>
      <h2>my react hook</h2>
      <button onClick={() => {
        setMassage(message + ' , My New Message')
      }}>Change massage</button>

      <button onClick={changeState}>change state</button>
      <button onClick={changeVisible}>toggle show</button>

      <p>state : {state}</p>
      <p>Message :{message}</p>
      <hr />
      {visible ?
        <div>
          <h2 style={{ color: 'red' }}> Hello React Hook</h2>
          <p>counter</p>

          <button onClick={() => {
            setCounter(counter + 1);
          }}>+</button>

          <button onClick={() => {
            setCounter(counter - 1);
          }}>-</button>

          <p>counter : {counter}</p>
        </div>
        : null}
    </div>
  )
}
