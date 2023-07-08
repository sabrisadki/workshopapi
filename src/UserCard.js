import React from 'react'

const UserList = ({kaskrout}) => {
    console.log('v',kaskrout)
  return (
    <div>
    <div className="container">
          <div className="card">
            <div className="content">
              <div className="cardContent">
                <h3>{kaskrout.name}<br /><span>{`The username : ${kaskrout.username}`}</span></h3>
              </div>
            </div>
            <ul className="sci">
              <li style={{ zIndex: 1 }}> Email: <a href="#"><i className="fa fa-facebook" aria-hidden="true" />{kaskrout.email}</a> </li>
              <li style={{ zIndex: 2 }}> Address: <a href="#"><i className="fa fa-instagram" aria-hidden="true" />{kaskrout.address.street}</a> </li>
              <li style={{ zIndex: 3 }}> <a href="#"><i className="fa fa-instagram" aria-hidden="true" />{kaskrout.address.suite}</a> </li>
              <li style={{ zIndex: 4 }}> <a href="#"><i className="fa fa-instagram" aria-hidden="true" />{kaskrout.address.city}</a> </li>
              <li style={{ zIndex: 5 }}> <a href="#"><i className="fa fa-instagram" aria-hidden="true" />{kaskrout.address.zipcode}</a> </li>
              <li style={{ zIndex: 6 }}> <a href="#"><i className="fa fa-instagram" aria-hidden="true" />{kaskrout.address.geo.lat}</a> </li>
              <li style={{ zIndex: 7 }}> <a href="#"><i className="fa fa-instagram" aria-hidden="true" />{kaskrout.address.geo.ing}</a> </li>
              <li style={{ zIndex: 8 }}> Phone: <a href="#"><i className="fa fa-instagram" aria-hidden="true" />{kaskrout.phone}</a> </li>
              <li style={{ zIndex: 9 }}> Website: <a href="#"><i className="fa fa-instagram" aria-hidden="true" />{kaskrout.website}</a> </li>
              <li style={{ zIndex: 10 }}> Company: <a href="#"><i className="fa fa-github" aria-hidden="true" />{kaskrout.company.name}</a> </li>
              <li style={{ zIndex: 11 }}>  <a href="#"><i className="fa fa-github" aria-hidden="true" />{kaskrout.company.catchPhrase}</a> </li>
              <li style={{ zIndex: 12 }}>  <a href="#"><i className="fa fa-github" aria-hidden="true" />{kaskrout.company.bs}</a> </li>
            </ul>
          </div>
    </div>
    </div>
    
  )
}

export default UserList