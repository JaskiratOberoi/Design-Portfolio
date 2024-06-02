import React from 'react';

function Details(data) {

  return (
    <div className='details-page'>
                <div className="details">
                    <div className="d-hero">
                        <img src={ data.hero } alt="hero" />
                    </div>
                    <div className="d-content">
                        <div className="d-title">
                            { data.title }
                        </div>
                        <div className="d-desc">
                            { data.description }
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Details