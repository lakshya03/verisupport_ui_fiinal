import React from 'react';
import Table from 'react-bootstrap/Table';

import './ClosedIncident.css';

class ClosedIncident extends React.Component {
    constructor(props) {
        super(props);
        this.state = {closedIncidentList:[],
        status:"closed"
    }     
    
    }
    componentDidMount(){
        console.log(localStorage.getItem('phoneNumber'));
        fetch(`http://localhost:5050/getIncidentsByCustomerId/${this.state.status}/${localStorage.getItem('phoneNumber')}`)
        .then(response=>response.json())
        .then(closedIncidentList=>this.setState({closedIncidentList}));
       
        
    }

    render() {
        return (
            <div >
               <br/><br/>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Incident Type</th>
            <th>Priority</th>
            <th>Description</th>
            

          </tr>
        </thead>
        <tbody>

          {
            this.state.closedIncidentList.map((name, index) => {
              return <tr key={index}>
                <td>{this.state.closedIncidentList[index].title}</td>
                <td>{this.state.closedIncidentList[index].incidentType}</td>
                <td>{this.state.closedIncidentList[index].priority}</td>
                <td>{this.state.closedIncidentList[index].comments}</td>

              </tr>
            })
          }
        </tbody>
      </Table>
      <br/><br/>
            </div>
        );
    }
}

export default ClosedIncident;