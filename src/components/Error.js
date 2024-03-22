import React from 'react';
import { useRouteError } from 'react-router-dom';

function Error() {
    const error = useRouteError();
    const {status, statusText} = error;
    
  return (
    <>
    <h1>OOPS..!</h1>
    <h2>something went wrong...!!</h2>
    <h2>{status + " " + statusText}</h2>
    </>
  )
}

export default Error