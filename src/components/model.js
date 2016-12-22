import React, {PropTypes} from 'react';
import { URLGITHUB } from '../config'

export default class Generic extends React.Component {
    constructor(props, context) {
        super(props);
    };
};

export class Collection extends Generic {
    constructor(props, context) {
        super(props);
        this.state = {
            loading: true
        }

        this.save = this.save.bind(this);
        this.updateLoading = this.updateLoading.bind(this);
    };

    componentDidMount() {
        this.fetchData();
    };

    urlRoot() {
        return '';
    };

    setErrorResponse(error) {
        console.log(error);
    };

    setResponseJson(response) {
        return response.json()
    };

    save(response) {
        this.props.add(response);
    };

    updateLoading() {
        this.setState({loading: false})
    };

    urlRequest() {
        return `${URLGITHUB}${this.urlRoot()}`;
    };

    fetchData() {
        fetch(this.urlRequest())
        .then(this.setResponseJson)
        .then(this.save)
        .then(this.updateLoading)
        .catch(this.setErrorResponse)
    };
};

Generic.contextTypes = {
    router: PropTypes.object
};