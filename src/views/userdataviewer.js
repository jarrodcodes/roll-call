import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import secret from '../data/ids.js';
import axios from 'axios';

class UserDataViewer extends Component {

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

        let res = await fetch('https://slack.com/api/oauth.access?client_id=5213863414.323664585827&client_secret=' + secret + '&code=' + this.props.code)
        let response = await res.json()
        let status = await response
        await this.setStateAsync({ userData: status })

    }

    render() {

        if (this.state.userData) {

            if (!this.state.userData.error) {

                axios.post()

                return (

                    <a>

                        Hi {_.get(this.state.userData, 'user.name', 'Loading')}
                    </a>
                )
            }
        }

        return (
            <a>
                There was an error :(
</a>
        )
    }
}

export default (UserDataViewer);