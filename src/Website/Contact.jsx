import React, { useState } from "react";

const Contact = () => {

  const [data, setData] = useState({
    fullName : '',
    phone : '',
    email : '',
    desc : ''
  }) 

  const submitForm = (event)=>{
    event.preventDefault();
  }


  const collectInputData = (event)=>{
    const {name, value} = event.target
    setData((preValue)=>{
        return {...preValue,
                  [name] : value
                }
      })
  }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit = {submitForm}>
              <div className="mb-3">
                <label htmlFor = "fullName" className="form-label">
                 Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  name="fullName"
                  onChange={collectInputData}
                  value ={data.fullName}
                  placeholder="Enter Full Name Here" required
                />
              </div>
              <div className="mb-3">
                <label htmlFor = "phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                   onChange={collectInputData}
                  value={data.phone}
                  placeholder="Enter Phone Number Here" required
                />
              </div>
              <div className="mb-3">
                <label htmlFor = "email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name = "email"
                   onChange={collectInputData}
                  value ={data.email}
                  placeholder="name@example.com" required
                />
              </div>
              <div className="mb-3">
                <label htmlFor = "desc" className="form-label">
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="desc"
                  name="desc"
                   onChange={collectInputData}
                  value ={data.desc}
                  rows="3"
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-primary" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
