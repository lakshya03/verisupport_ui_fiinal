//The navbar for all pages outside dashboard

import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import './HomeNav.css';
import img from '../../../../resources/images/logosmal.png';
const HomeNav = () => {

    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Nav className="mr-auto">
                     <Nav.Link href="/"><b>Home</b></Nav.Link>
                </Nav>
           </Navbar>
    
       <div className="homenav-grid">
        <img src={img} alt="avatar"className="logo-img"/>
        </div>
     </div>
    );

}
export default HomeNav;