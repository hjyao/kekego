import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Dashboard from './views/Dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import SimpleTable from './views/SimpleTable';


import { simpleAction } from './actions/simpleAction';

class App extends Component {
  simpleAction = (event) => {
    this.props.simpleAction();
   }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Dashboard>
            <Switch>
            <Route exact path="/" render={() =>  
              <div>
                <Typography variant="h4" gutterBottom component="h2">
                Products
                </Typography>
                <div className='tableContainer'>
                  <SimpleTable />
                </div>
              </div>} />
            <Route path="/orders" render={() => <div>orders</div>} />
            <Route path="/customers" render={() => <div>customers</div>} />
            <Route path="/reports" render={() => <div>reports</div>} />
            <Route render={() => <div>products</div>}/>
            </Switch>
          </Dashboard>
        </BrowserRouter>
      </div>
    );
  }
}
const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
