import React from 'react';
import './Subrow.css';

function Subrow({Subicon, Subprops }) {
    return (
      <div className= "rowsubscription">
        <Subicon className="logo" />
        <p className="titlesubscription">{Subprops}</p>
      </div>
    );
}

export default Subrow;