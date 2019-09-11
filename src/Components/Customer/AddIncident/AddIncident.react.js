import React from 'react';
import Incident from '../../Incident/Incident.react';
import Appbar from '../../../Components/Customer/Appbar/Appbar.react';


const AddIncident = () => {

    return (
        <div >
            <div>
          <Appbar></Appbar>
        </div>
        <div>
            <Incident></Incident>
        </div>
        </div>
    );

}

export default AddIncident;