import React from 'react'
import Display from './Display';

function Parents()  {
    return (
        <div className="newBack">
            <Display />
            <h4 className="sitterSite">Available jobs!</h4>
            <p className="slogan">Welcome, sitters. Have a look through the postings.</p>
            <div className="wrapper container">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Requirements</th>
                        <th>E-mail</th>
                        <th>Zip code</th>
                    </tr>
                    <tr>
                        <td>Lenny Parenton</td>
                        <td>Entry level - 15 years experience required.</td>
                        <td>parenton@lendog.com</td>
                        <td>90232</td>
                        <td><button className="newBtn">Contact</button></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default Parents;