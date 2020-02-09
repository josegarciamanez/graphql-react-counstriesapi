import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Graphql - React - CountriesAPI</h1>

        <div class='container'>
          <div className='row'>
            {this.props.data.loading === true
              ? 'Loading'
              : this.props.data.countries.map(country => (
                  <div class='col s12 m6 l4' key={country.name}>
                    <div className='card'>
                      <div className='card-image waves-effect waves-block waves-light center-align'>
                        <i className='circle z-depth-1 flag activator'>
                          {country.emoji}
                        </i>
                      </div>
                      <div className='card-content'>
                        <span className='card-title activator grey-text text-darken-4 truncate'>
                          {country.name}
                          <i className='material-icons right'>more_vert</i>
                        </span>
                      </div>
                      <div className='card-reveal teal  accent-3'>
                        <span className='card-title grey-text text-darken-4'>
                          {country.name}
                          <i className='material-icons right'>close</i>
                        </span>
                        <p className='white-text'>{country.continent.name}</p>
                        <p className='white-text'>Moneda: {country.currency}</p>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    );
  }
}

const repoQuery = gql`
  query {
    countries {
      name
      code
      native
      currency
      emoji
      emojiU
      languages {
        name
        native
        code
      }
      continent {
        name
      }
    }
  }
`;

const AppWithData = graphql(repoQuery, {
  options: {
    variables: {
      // name: 'medellinjs'
    }
  }
})(App);

export default AppWithData;
