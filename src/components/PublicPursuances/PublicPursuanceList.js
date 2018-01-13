import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as postgrest from '../../api/postgrest';


class PublicPursuanceList extends Component {
  constructor() {
    super();
    this.state = {orderBy: "created"};
    this.handleChange = this.handleChange.bind(this);
  }
  
  getPublicPursuanceList = () => {
    const pursuanceArr = Object.values(this.props.publicPursuances);
    return pursuanceArr.map((pursuance) => (
      <div key={pursuance.id} className="pursuance-list-ctn">
        <Link to={`/pursuance/${pursuance.id}`}>
          <h3><strong>{pursuance.name}</strong></h3>
        </Link>
        <p><strong>Mission:</strong> {pursuance.mission}</p>
        <p>Created {postgrest.formatDate(pursuance.created)}</p>
      </div>
    ));
  }
  
  orderPursuances = () => {
    
  }
  
  // handlers
  
  handleChange(event) {
    this.setState({orderBy: event.target.value});
  }
  
  render() {
    return (
      <div className="pursuance-list">
        <div className="filter">Filter by:
          <form>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="created">Date Created</option>
              <option value="created">Name</option>
            </select>
          </form>
          <h2 className="dash-box-title">Recently Created</h2>
        </div>
        {this.getPublicPursuanceList()}
      </div>
    )
  }
  
}

export default connect(({ publicPursuances }) => ({ publicPursuances }))(PublicPursuanceList);
