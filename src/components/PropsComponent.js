import React from 'react';
import PropTypes from 'prop-types';

class PropsComponent extends React.Component {
    render() {
    return (
      <div>
            <h3>Array: {this.props.propArray}</h3>
            <h3>Boolea: {this.props.propBool ? "True..." : "False..."}</h3>
            <h3>Funció: {this.props.propFunc(3)}</h3>
            <h3>Número: {this.props.propNumber}</h3>
            <h3>String: {this.props.propString}</h3>
            <h3>Objecte: {this.props.propObject.objectName1}</h3>
            <h3>Objecte: {this.props.propObject.objectName2}</h3>
            <h3>Objecte: {this.props.propObject.objectName3}</h3>
      </div>
    );
  }
}

PropsComponent.defaultProps = {
  propArray: [1,2,3,4],
  propFunc: function(e){return e},
  propNumber: 23,
  propString: "Terminal 379",
  propObject: {
    objectName1: "numeo 1",
    objectName2: "numero 2",
    objectName3: "numero 3"
  }
}

PropsComponent.propTypes = {
  propBool: PropTypes.bool.isRequired
}

export default PropsComponent;