import React from 'react'
import Display from './Display';

function Caretakers()  {
    return (
        
        <div className="newBack">
            <Display />
            <h4 className="sitterSite">Have a look at our accredited sitters.</h4>
            <p className="slogan">Professionalism you can count on.</p>
            <div className="wrapper container">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Qualifications</th>
                        <th>Rate</th>
                        <th>Zip Code</th>
                    </tr>
                    <tr>
                        <td>Jeff Bezos(not that one)</td>
                        <td>Babysitter University Grad</td>
                        <td>$15-$25/hr</td>
                        <td>90210</td>
                        <td><button className="newBtn">Schedule</button></td>
                    </tr>
                    <tr>
                        <td>Nancy Sitterman</td>
                        <td>Harvard Grad</td>
                        <td>$25-$35/hr</td>
                        <td>90095</td>
                        <td><button className="newBtn">Schedule</button></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default Caretakers;