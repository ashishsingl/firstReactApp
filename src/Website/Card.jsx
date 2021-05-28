import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({cardImg , serviceName}) => {
    return (
        <>
            <div className="col-md-4">
              <div className="card col-md-12 mx-auto">
                <img className="card-img-top" style={{height: "35vh", width: "100%", objectFit: "cover"}} src={cardImg} alt="Card image cap"/>
                <div className="card-body">
                  <p className="card-text">
                    {serviceName}
                  </p>
                  <NavLink exact to="/service" className="btn btn-primary">
                    Enjoy Service
                  </NavLink>
                </div>
              </div>
            </div>
        </>
    )
}

export default Card
