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
        console.log(parsedURL)
        if (parsedURL.length < 10) {

            return (

                <a href="https://slack.com/oauth/authorize?scope=identity.basic&client_id=5213863414.323664585827"><img src="https://api.slack.com/img/sign_in_with_slack.png" /></a>
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