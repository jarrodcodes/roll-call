import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class UserDataViewer extends Component {

    componentWillMount() {
        let self = this;
    }

    componentWillReceiveProps(currentProps) {

    }

    render() {
        let self = this;
        let URL = window.location.href
        console.log(URL)
        let Slack = 0;

        if (Slack == 0) {
            return (
                <a href="https://slack.com/oauth/authorize?scope=identity.basic&client_id=5213863414.323664585827"><img src="https://api.slack.com/img/sign_in_with_slack.png" /></a>
            )
        }
        else {
            return (
                <div>
                    hi2
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

export default connect(mapStateToProps, mapDispatchToProps)(UserDataViewer);