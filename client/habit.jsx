import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';


class Habit extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="habitList">
        <div className="habit">
          {this.props.habit}
        </div>
      </div>
    );
  }
}

export default Habit;