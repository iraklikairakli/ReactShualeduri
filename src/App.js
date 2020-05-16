import React, {Component} from 'react';
import { Container, Nav } from './m-components'

import SwitchContainer from './components/SwitchContainer';
import AllJokesContainer from './components/AllJokesContainer';

var App = React.createClass({
  render: function() {
    return (
      <div className="application_wrapper">

        <div className="application_routeHandler">
            <CreateAccountScreen/>
        </div>
        
      </div>
    );
  }
  
});
  
module.exports = App;

class App extends Component {
  state = {
      allJokes: [{ category : undifined , type: undefined , joke: 'Fetching a dad joke'}]
  }

  componentDidMount() {
    this.fetchJokes();
  }
#aq iyos //
  fetchJokes = (term) => { 
    const url = (term) ? `https://sv443.net/jokeapi/v2/joke/${term}` : 

    fetch(url, { headers: { 'Accept': 'application/json' }})
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.text()).then(body => {
        const jokes = JSON.parse(body);
        let allJokes = []
        if (jokes.search_term === undefined) {
         
          allJokes = [{ id: 1, joke: jokes.joke }];
        } else if (jokes.search_term !== undefined && jokes.results.length === 0) {
          
          allJokes = [{ id: 1, joke: "errori" }];
        } else if (jokes.search_term !== undefined && jokes.results.length !== 0) {
          
          allJokes = jokes.results;
        }

        this.setState({
          allJokes: allJokes
        });
      })
      .catch(error => console.error(`aq error: ${error.message}`));
  }

  render() {
    return (
      <Container>
        <Nav
          title="Jokes"
        />
        <SwitchContainer
          fetchJokes={this.fetchJokes}
        />
        <AllJokesContainer
          allJokes={this.state.allJokes}
        />
      </Container>
    );
  }
}

export default App;
