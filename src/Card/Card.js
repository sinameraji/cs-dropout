import React from 'react'


const card = (props) => {
    return(
        <div className="imposter">
          <h1>{props.h1}</h1>
          <h3>{props.def}</h3>
          <p>{props.p}</p>
          <h6><a href={props.link}>{props.reference}</a></h6>
        </div>
    )
}

export default card