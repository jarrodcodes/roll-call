import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SlackResponse from '../views/slackresponse.js';
import _ from 'lodash'

class UserLandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        let self = this;
        let URL = window.location.href
        let parsedURL = _.get(_.split(URL, /(\=|\&)/, 3), 2, '')
        
        if (parsedURL.length < 10) {

            return (
                <div class="py-5 text-center opaque-overlay" 
                style = {{backgroundImage: 'url(http://ww1.prweb.com/prfiles/2015/11/17/13087538/digitalcrafts-students-4.jpg)'}}>
                <div class="container py-5">
                  <div class="row">
                    <div class="col-md-12 text-white">
                      <h1 class="display-3 mb-4">Hero image intro</h1>
                      <p class="lead mb-5">Pingendo is a HTML editor for everyone. Easy for newbies, useful for professionals.
                        <br></br>Code quality is a must. Pingendo generates clean, battle-tested, modular Bootstrap 4 code. </p>
                        <a href="https://slack.com/oauth/authorize?scope=identity.basic&client_id=5213863414.323664585827"><img src="https://api.slack.com/img/sign_in_with_slack.png" /></a>
                    </div>
                  </div>
                </div>
              </div>
            )

        }

        else {
            return(
            <div>
                <SlackResponse code = {parsedURL} />
            </div>
            )
            }
        }
}

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLandingPage);