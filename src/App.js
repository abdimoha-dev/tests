import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false, newTitle: '' };
    this.changeComponent = this.changeComponent.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleTitleSubmit() {

  }
  handleTitleChange(e) {
    return this.setState({ newTitle: e.target.value });

  }

  changeComponent() {
    this.setState({
      show: !this.state.show
    });
  }


  render() {
    var clickableTitle;
    if (this.state.show) {
      clickableTitle = <Form inline onSubmit={this.handleTitleSubmit}>
        <FormGroup controlId="formInlineTitle">
          <FormControl type='text' onChange={this.handleTitleChange} />
        </FormGroup>
      </Form>
    }
    else {
      clickableTitle = <div>
        <Button bsStyle="link" onClick={this.changeComponent}>
          <h3> Default Text </h3>
        </Button>
      </div>
    }
    return (
      <div className="comment">
      {clickableTitle}
      </div>
    );

  }
}

export default App;