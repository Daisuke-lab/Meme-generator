import React from 'react';

function Navbar() {
    const name = 'Daisuke Kikuchi'
    const style1 = {
      width: '250px',
      height: '170px',
      verticalAlign:'middle',
      marginRight:100,
    }

    const style_font = {
      fontSize: 50,
      marginLeft: 100,
    }
  return (
    <div className="Navbar">
      <header style={{backgroundColor:'skyblue', fontSize:'70px'}}>
        <h><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIzQ5_Cdc6mpengIlIlHR2rmrG-15mafvGwg&usqp=CAU' style={style1}/>
        Meme Generator</h>
      </header>

    </div>
  );
}

export default Navbar;