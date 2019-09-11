import React from 'react';
import { Item, Button } from 'semantic-ui-react';
import './IncidentHolder.css';
import Select from 'react-select';

let priorityOptions = [       
    { label: "Low", value: "low" },
    { label: "Medium", value: "medium  " },
    { label: "High", value: "high" },
];

const IncidentHolder = (props) => {
 
    return (
        <Item>
        <Item.Content>
            <Item.Header>{props.details.title}</Item.Header>
            <Item.Description>
                    <p>Description : {props.details.comments}</p>
                    <p>Issue Type: {props.details.incidentType}</p>
                    <p>Issue Severity: {props.details.priority}</p>
                    <p>Issue Date: {props.details.date}</p>
            </Item.Description>
            { (props.details.status==='Active')? ( <Select options={priorityOptions}  onChange={opt => {console.log(opt.label, opt.value);props.changePriority(props.details.incidentId,opt.value)}} />):("")}
            {(props.details.status==='Active')? (<Item.Extra>
                <Button color="blue" onClick={() => props.onClose(props.details.incidentId)}>Close Incident</Button>
            
            </Item.Extra>):(<Item.Extra>This incident is closed</Item.Extra>)}    
        </Item.Content>
    </Item>  
);

}
export default IncidentHolder;