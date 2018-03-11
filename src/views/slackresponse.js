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

    async checkIn(name, accessToken, studentId) {
        let post = await axios.post('http://localhost:3001/checkin', { name: name + '', accessToken: accessToken + '', studentId: studentId + '' })
        console.log(post)
        if (!this.state.checkedIn) {
            await this.setStateAsync({ checkedIn: post.data })
        }
    }

    render() {

        if (this.state.userData) {
            if (this.state.userData.error == "code_already_used") {
                return (
                    <div class="py-5 text-center opaque-overlay"
                        style={{ backgroundImage: 'url(http://ww1.prweb.com/prfiles/2015/11/17/13087538/digitalcrafts-students-4.jpg)' }}>
                        <div class="container py-5">
                            <div class="row">
                                <div class="col-md-12 text-white">
                                    <h1 class="display-3 mb-4">This code was already used. Please log in again.</h1>
                                    <p class="lead mb-5">
                                        <br></br></p>
                                    <a href="https://slack.com/oauth/authorize?scope=identity.basic&client_id=5213863414.323664585827"><img src="https://api.slack.com/img/sign_in_with_slack.png" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            if (!this.state.userData.error) {

                let axiosConfig = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    }
                };

                this.checkIn(this.state.userData.user.name, this.state.userData.access_token, this.state.userData.user.id)

                if (this.state.checkedIn) {
                    if (this.state.checkedIn == "Checked in!") {
                        return (
                            <div className="py-5 text-center opaque-overlay"
                                style={{ backgroundImage: 'url(http://ww1.prweb.com/prfiles/2015/11/17/13087538/digitalcrafts-students-4.jpg)' }}>
                                <div className="container py-5">
                                    <div className="row">
                                        <div className="col-md-12 text-white">
                                            <h1 className="display-3 mb-4">Hi there {this.state.userData.user.name}!</h1>
                                            <p className="lead mb-5">You are now logged in. ✅
<br></br></p>
                                            {/* <a href="#" className="btn btn-lg mx-1 btn-primary"></a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    else if (this.state.checkedIn != "Checked in!") {
                        return (
                            <div className="py-5 text-center opaque-overlay"
                                style={{ backgroundImage: 'url(http://ww1.prweb.com/prfiles/2015/11/17/13087538/digitalcrafts-students-4.jpg)' }}>
                                <div className="container py-5">
                                    <div className="row">
                                        <div className="col-md-12 text-white">
                                            <h1 className="display-3 mb-4">There was an error.</h1>
                                            <p className="lead mb-5">
                                                <br></br></p>
                                            {/* <a href="#" className="btn btn-lg mx-1 btn-primary"></a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    else {
                        return (
                            <a>
                                Loading...
</a>
                        )
                    }
                }
            }
            else {
                return (
                    <a>
                        Loading...
</a>
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