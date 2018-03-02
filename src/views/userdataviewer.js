import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import axios from 'axios';

class UserDataViewer extends Component {

    componentWillMount() {
        let self = this;
    }

    componentWillReceiveProps(currentProps) {

    }

    render() {
        let self = this;
        let URL = 'http://localhost:3000/?code=5213863414.324749777094.a7210d913eb37b3fd0db66fa290af0bcabbdd8c8caae336596359eb1a0d7e720&state='
        console.log(URL)
        let parsedURL = _.split(URL, '=', 2)
        let parsedURL2 = parsedURL[1]
        let parsedURL3 = _.split(parsedURL2, '&', 2)
        let parsedURL4 = parsedURL3[0]
        console.log(parsedURL4)
        if (parsedURL4.length < 10) {
            return (
                <a href="https://slack.com/oauth/authorize?scope=identity.basic&client_id=5213863414.323664585827"><img src="https://api.slack.com/img/sign_in_with_slack.png" /></a>
            )
        }
        else {
            axios.get()
            return (
                <div>
                    Hi
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