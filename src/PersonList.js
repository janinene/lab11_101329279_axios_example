import axios from 'axios'
import React, { Component } from 'react'
import './PersonList.css'

export default class PersonList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            persons: []
        }
    }

    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            console.log(res.data);
            const persons = res.data.results;
            this.setState({ persons });
            // this.setState({...this.state, persons: res.data });
        })
    }


  render() {
    return (
      <>
        <h1>User List</h1>
        {
             this.state.persons.map(person => (
                <>
                     <div className="person_card">
                        <h4 className='title-name'>{person.name.title} {person.name.first} {person.name.last} - {person.login.uuid} </h4>

                        <table>
                            <tbody>
                                <tr>
                                    <td><img src={person.picture.large} alt={person.name.first}></img></td>
                                    <td>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>User Name:</td>
                                                    <td>{person.login.username}</td>
                                                </tr>
                                                <tr>
                                                    <td>Gender:</td>
                                                    <td>{person.gender}</td>
                                                </tr>
                                                <tr>
                                                    <td>Time Zone Description: </td>
                                                    <td>{person.location.timezone.description}</td>
                                                </tr>
                                                <tr>
                                                    <td>Address:</td>
                                                    <td>{person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.state}, {person.location.country} - {person.location.postcode}</td>
                                                </tr>
                                                <tr>
                                                    <td>Email: </td>
                                                    <td>{person.email}</td>
                                                </tr>
                                                <tr>
                                                    <td>Birth Date and Age:</td>
                                                    <td>{person.dob.date} ({person.dob.age})</td>
                                                </tr>
                                                <tr>
                                                    <td>Register Date:</td>
                                                    <td>{person.registered.date}</td>
                                                </tr>
                                                <tr>
                                                    <td>Phone#:</td>
                                                    <td>{person.phone}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>                              
                                </tr> 
                                                       
                            </tbody>                               

                    </table>
                         <button type="button" className='class="btn btn-primary'>Details</button> 
                    </div> 
                
                    
                </>
                
             ))
        }
       

      </>
    )
  }
}
