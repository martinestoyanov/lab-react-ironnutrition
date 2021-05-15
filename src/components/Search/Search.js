import React, { Component } from 'react';

export default class Search extends Component {
  search = (e) => {
    this.props.executeSearch(e.target.value);
  };
  render() {
    return (
      <div>
        <input onChange={this.search} className="input" type="text" />
      </div>
    );
  }
}
