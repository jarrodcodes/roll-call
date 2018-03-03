import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import secret from '../data/ids.js';

class UserDataViewer extends Component {

        state = {}

        setStateAsync(state) {
          return new Promise((resolve) => {
            this.setState(state, resolve)
          });
        }

        async componentDidMount() {
          let res = await fetch('https://slack.com/api/oauth.access?client_id=5213863414.323664585827&client_secret=' + secret + '&code=' + this.props.code)
          let response = await res.json()
          let status = await response
          await console.log(status)
          await this.setStateAsync({userData: status})

        }
        render() {
            console.log(this.state)
          return (
              <a>
                My IP is {_.get(this.state.userData , 'error', 'Loading')}
                </a>

          );
        }
      }

   export default (UserDataViewer);