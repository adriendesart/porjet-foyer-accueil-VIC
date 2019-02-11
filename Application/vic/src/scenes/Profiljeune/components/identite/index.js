import React, { Component, Fragment } from 'react'
import profil from '../../thomas.jpg'
import './index.scss'

class Identite extends Component {
    render() {
        return (
            <Fragment>
                <div className="col-md-3 offset-md-2 m-0 p-0">
                <img className="photojeune" src={profil} alt="" srcset="" />
            </div>
                <div className="col-md-3 m-0 p-0">
                    <ul className="logprofil">
                        <li className="mb-5 titlenomprenom">Bailleux Thomas</li>
                        <li>26 Décembre 1992</li>
                        <li>(27 ans)</li>
                        <li>CHARLEROI</li>
                        <li className="mt-5">thomasbailleux2@gmail.com</li>
                    </ul>
                </div>
                </Fragment>
        );
    }
}
export default Identite