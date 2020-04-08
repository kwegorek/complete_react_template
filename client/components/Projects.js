import React from 'react'
import {Footer} from './Footer'
import { GoBackHome } from './GoBackHome'


export const Projects = (props) => {
  return (
    <div id="projects-href" className="content-project-container">
      <h1 className='project-title'>PROJECTS</h1>
      <div>
        <div className="row-projects">
          <div className="col-4 project-item">
            <img src="./img/traffic.png" />
            <p>
              Application that tracks the traffic between given points.
              TrafficTracker visualizes traffic patterns and will help you
              reduce your commute time. It gathers the real-time traffic data
              between given points and presents how it changes over time.
            </p>
          </div>
          <div className="col-4 project-item">
            <img src="./img/shop.png" />
            <p>
              Application that tracks the traffic between given points.
              TrafficTracker visualizes traffic patterns and will help you
              reduce your commute time. It gathers the real-time traffic data
              between given points and presents how it changes over time.
            </p>
          </div>
          <div className="col-4 project-item">
            <img src="./img/exit.png" />
            <p>
              Application that tracks the traffic between given points.
              TrafficTracker visualizes traffic patterns and will help you
              reduce your commute time. It gathers the real-time traffic data
              between given points and presents how it changes over time.
            </p>
          </div>
        </div>
      </div>

      <GoBackHome/>

    </div>
  )
}
