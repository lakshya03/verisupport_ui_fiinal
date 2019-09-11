import React from 'react';
import {  Item, Segment,Form } from 'semantic-ui-react';
import './SearchResults.css';
import axios from 'axios';
import IncidentHolder from '../IncidentHolder/IncidentHolder.react';
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            phoneNumber:0,        //Initialising state
            searchTerm : "",
            results: [],        //container to hold the results
            loaded:false,      //To determine if the page has loaded or not and will be changed in componentDidMount() method
            hasResults:false,   //To determine if the search return any results and if not used to display appropriate message to the user
            respMsg: ""
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
       
    }

   componentDidUpdate(){
       this.fetchGetIncident();
   }

    handleChange(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;
        this.setState({ [name]: value });
      }


      fetchGetIncident=()=>{
        axios.get(`http://localhost:5050/getIncidents/${this.state.phoneNumber}`)//url for getting incidents
        .then(res => {
          this.setState({ results:res, loaded:true, });
        });
        console.log("getinci called");
    }
      

    onSubmit(e){ //Gets the search results if the search button is clicked
        e.preventDefault();
        this.fetchGetIncident();
    }

   
   
    closeIncident = incidentId => {
        axios.put(`http://localhost:5050/closeIncident/${incidentId}`).then(
            res=>{
              this.setState({respMsg:res.data})
              if(res.data==="This incident is closed"){
            //    this.fetchGetIncident();
                console.log("handleDelete called")
                }
                else {
                    alert("The incident was not Closed \n" + res.data);
                    
                }
            }
            );
            console.log(this.state.respMsg)
    }
    handleCloseIncident = incId =>{
        confirmAlert({

            title: "Confirm to close Incident",
            message: "Are you sure you want to clsoe this incident",
            buttons: [
                {
                    label: "Yes, Close Incident",
                    onClick: () => this.closeIncident(incId)//axios call to close Incident
                                                                //set active to closed in the incident state
                },
                {
                    label: "No, Go Back"
                }
            ]
        })
        
    }

    setpriority=(incId,priority)=>{
        axios.put(`http://localhost:5050/changePriority/${incId}/${priority}`).then(res=>res.data);
        console.log(incId + " " + priority);
        // this.fetchGetIncident();

    }
    handleChangePriority = (incId,priority) => {
        confirmAlert({

            title: "Confirm to Change Priority ?",
            message: "Are you sure you want to change the priority",
            buttons: [
                {
                    label: "Yes, Change It",
                    onClick: () => this.setpriority(incId,priority)//axios call to close Incident
                                                                //set active to closed in the incident state
                },
                {
                    label: "No, Go Back"
                }
            ]
        })
    }


    render() {
        return (
            <Segment>
                
                <Form onSubmit={this.onSubmit}>                  {/* Form to get the search parameters */}
                    <Form.Group>
                        <Form.Field>
                            <label>Search Incident</label>        {/* Field to get the search String */}
                            <Form.Input placeholder="Enter Phone Number..." value={this.state.phoneNumber}  name="phoneNumber"
                    onChange={this.handleChange} />
                        </Form.Field>
                    </Form.Group>
                    
                    <Form.Button>Search</Form.Button>
                </Form>
                <Item.Group divided>        {/* Iterator to which displays the incident using the results element from the state */}
                {this.state.loaded? this.state.results.data.map((eachIncident, index)=>{
            return(<IncidentHolder from="agentsearch" key={index} details={eachIncident} onClose={this.handleCloseIncident} changePriority={this.handleChangePriority}/>)
            }): <div>No results to display</div>}                 
                </Item.Group>

            </Segment>  //End of Search Results Segment
        );
    }
}

export default SearchResults;