import './App.css';

import React from 'react'

const App = () => {
  return (
    <div>
      <body id="main">
        <h1 id="title">Albert Einstein</h1>
        <h6>One of the greatest physicists of all time</h6>
    
        <figure id= "img-div" class="frame">
          <img src="https://i.natgeofe.com/n/34861553-e7b4-441d-af1f-3f91b21b1755/01-einstein-other-inventions_3x4.jpg"></img>
        </figure>

        <ul>Here's a timeline of Einstein's life:
          <div id="division">
            <li>March 14, 1879: Albert Einstein is born in Ulm, Germany. the first child of Hermann and Pauline Einstein</li>
            <li>June 21, 1880: The Einstein family moves to Munich, Germany.</li>
            <li>October 26, 1895: After failing the entery exam for the Zurich Polutechnic. Einstein is accepted into the trade department of the cantonal school in Aarau, Switzerland. He lives with the family of Jost Winteler, a teacher in Aarau.</li>
            <li>April 18, 1955: Einstein dies in New Jersey. His body is cremated and his papers turned over to the Hebrew University in Jerusalem.</li>
          </div>
        </ul>

        <p>Check out the    <a href='https://en.wikipedia.org/wiki/Albert_Einstein' id="tribute-link">Wikipedia Page.</a></p>
      </body>
    
    </div>
  )
}

export default App
