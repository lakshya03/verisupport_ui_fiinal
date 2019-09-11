import React from 'react';
import AgentNav from '../../../Components/Agent/AgentNav/AgentNav.react';
import Incident from '../../Incident/Incident.react';



const AddIncidentByAgent = () => {

    return (
        <div >
          <div>
              <AgentNav></AgentNav>
          </div>
          <div>
              <Incident></Incident>
          </div>
        </div>
    );

}

export default AddIncidentByAgent;