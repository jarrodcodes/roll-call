import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import secret from '../data/ids.js';
import axios from 'axios';

class SlackResponse extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        });
    }

    async componentDidMount() {

        let slackCall = await fetch('https://slack.com/api/oauth.access?client_id=5213863414.323664585827&client_secret=' + secret + '&code=' + this.props.code)
        let SlackResponse = await slackCall.json()
        await this.setStateAsync({ userData: SlackResponse })

    }

    render() {

        if (this.state.userData) {

            if (!this.state.userData.error) {

                console.log(this.state.userData, 'userdata')

                let axiosConfig = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    }
                  };
                  
                axios.post('http://localhost:3001/checkin', { name: this.state.userData.user.name + '',  accessToken: this.state.userData.access_token + '', studentId: this.state.userData.user.id + ''}).then((response) => {
                    console.log(response, 'api post')
                })

                return (

                    <a>

                        Hi {_.get(this.state.userData, 'user.name', 'Loading')}
                    </a>
                )
            }
            if (this.state.userData.error = "code_already_used") {

                return (
                    <div>
                        <a>
                            Code already used!
</a>
                        <br>
                        </br>
                        <a href="https://slack.com/oauth/authorize?scope=identity.basic&client_id=5213863414.323664585827"><img src="https://api.slack.com/img/sign_in_with_slack.png" /></a>
                    </div>
                )
            }
        }

        return (
            <a>
                Loading...
</a>
        )
    }
}

export default (SlackResponse);