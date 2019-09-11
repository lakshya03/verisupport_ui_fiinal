import React from 'react';
import axios from 'axios';
import {Table,Button} from 'react-bootstrap';


class ActiveIncident extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activeIncidentList:[],
        status:"Active"
    }     
    }

    componentDidMount(){
       this.fetchApi();
    }

componentWillUpdate(){
        this.fetchApi();
    }
 fetchApi=()=>{
    axios.get(`http://localhost:5050/getIncidentsByCustomerId/${this.state.status}/${localStorage.getItem('phoneNumber')}`)
   .then(res => {this.setState({activeIncidentList : res.data})});
 }
cancelIncident(incidentId){
    axios.delete(`http://localhost:5050/removeIncident/${incidentId}`).then(res=>res.data);
    

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
            <th>Action</th>

          </tr>
        </thead>
        <tbody>

          {
            this.state.activeIncidentList.map((name, index) => {
              return <tr key={index}>
                <td>{this.state.activeIncidentList[index].title}</td>
                <td>{this.state.activeIncidentList[index].incidentType}</td>
                <td>{this.state.activeIncidentList[index].priority}</td>
                <td>{this.state.activeIncidentList[index].comments}</td>
                <td><Button variant="outline-primary" floated='right' onClick={()=>this.cancelIncident(this.state.activeIncidentList[index].incidentId)}>Cancel</Button></td>
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

export default ActiveIncident;