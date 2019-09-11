import React from 'react';
import {  Grid} from 'semantic-ui-react';
import './AgentDashboard.css';
import SearchResults from '../../Agent/SearchResults/SearchResults.react';
import AgentNav from '../../../Components/Agent/AgentNav/AgentNav.react';
import img from '../../../../resources/images/logosmal.png';
const AgentDashboard = (props) => {

    return (
        <div className='dashboardcontainer_wrapper'>
           <div><AgentNav></AgentNav></div>
           <div className="homenav-grid">
        <img src={img} alt="avatar"className="logo-img"/>
        </div>
           <div>
            <Grid centered>
                <Grid.Column computer={12} mobile={15}>
             <br/>
            <SearchResults/>{/* Component which displays the incidents based on the search parameters*/}
                </Grid.Column>
                
                </Grid>
               </div>
               </div>
       
    );

}


export default AgentDashboard;