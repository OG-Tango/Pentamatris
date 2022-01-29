import React from 'react';

function LogOut({ logOut }) {

  function handleClick(){
    localStorage.removeItem('id_token');
    logOut.handleLogIn(false);

  }

  return (
    <div>
    <button type='button 'className="btn" onClick={handleClick}>
    LogOut
    </button>  
 </div>
  );
};

  

export default LogOut;