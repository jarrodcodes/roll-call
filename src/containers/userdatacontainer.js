import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserDataViewer from '../views/userdataviewer.js';
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
        let parsedURL = _.split(URL, '=', 2)
        let parsedURL2 = parsedURL[1]
        let parsedURL3 = _.split(parsedURL2, '&', 2)
        let parsedURL4 = parsedURL3[0]

        if (parsedURL4.length < 10) {

            return (

                <a href="https://slack.com/oauth/authorize?scope=identity.basic&client_id=5213863414.323664585827"><img src="https://api.slack.com/img/sign_in_with_slack.png" /></a>
            )

        }

        else {
            return(
            <div>
                <UserDataViewer code = {parsedURL4} />
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