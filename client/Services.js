import React from 'react'

export const Services = (props) => {
  return (
    <div className='container-services'>
    <h1 id='services-title'>Services</h1>
      <ul className='list-items-service'>
        <li className='service-item'>
          <div className='pic-container'>
            <i className='fa fa-area-chart' id= 'pencil'></i>
          </div>
          <div className='text-service-container'>
            <h1>Planning</h1>
            <p></p>
          </div>
        </li>

        <li className='service-item'>
          <div className='pic-container'>
            <i className='fa fa-pencil' id= 'pencil'></i>
          </div>
          <div className='text-service-container'>
            <h1>Developement</h1>
            <p></p>
          </div>
        </li>
        <li className='service-item'>
          <div className='pic-container'>
            <i className='fa fa-lightbulb-o' id= 'pencil'></i>
          </div>
          <div className='text-service-container'>
            <h1>Creativity</h1>
            <p></p>
          </div>
        </li>
      </ul>
    </div>
  )
}
