import React from 'react'

export const contact = (props) => {
    const main = props.main;
    const name = main.name;
    const city = main.address.city;
    const state = main.address.state;
    const zip = main.address.zip;
    const phone = main.phone;
    const email = main.email;
  return (
    <div>
        <h2>Contact</h2>
            <p>{name} <br/>
            <span>{city} {state}, {zip}</span><br/>
            {phone}<br/>
            {email}</p>
    </div>
  )
}
export default contact;