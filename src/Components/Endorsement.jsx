import React from 'react';
// import { endorsmentData } from '../Constants/data/endorsementData';



function endorsement(props) {
  return (
    <div className='endorsement'>
        <div className="e-title">
            { props.title }
        </div>
        <div className="e-body">
            { props.body }
        </div>
        <div className="e-source">
            { props.source }
        </div>
    </div>
  )
}

export default endorsement