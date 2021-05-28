import React from 'react'
import { NavLink } from 'react-router-dom'
import "./showcase.css"

const Showcase = ({mainHeading, highlighter, subHeading, buttonText, imgPath, imgStyle , btnPath}) => {
    return (
        <>
             <section id="header" className="d-flex align-items-center">
              <div className="container-fluid my-0 my-md-3 mx-auto d-flex align-items-center justify-content-center">
                  <div className="row">
                        <div className="col-md-10 col-11 mx-auto">
                            <div className="row d-flex align-items-center justify-content-center">
                                <div className="col-lg-6 pt-0 pt-lg-5 order-2 order-lg-1 ">
                                    <h2 className="main-heading">{mainHeading}<span className="highlighter">{highlighter}</span></h2>
                                    <p className="my-3">
                                        {subHeading}
                                    </p>
                                    <div className="mt-3">
                                        <NavLink to={btnPath} className="btn btn-outline-primary">{buttonText}</NavLink>
                                    </div>
                                </div>
                            <div className="my-md-1 col-lg-6 col-12 order-1 order-lg-2 d-flex justify-content-center align-items-center">
                                <img className="img-fluid animated mx-auto" style={imgStyle} src={imgPath} alt="image not found" />
                            </div>
                            </div>
                        </div>
                  </div>
              </div>
          </section>            
        </>
    )
}

export default Showcase
