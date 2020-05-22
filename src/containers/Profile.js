import React, { Component } from 'react';
import Link from '../components/Link/Link';
import List from '../components/List/List';
import '../containers/Profile.css';

class Profile extends Component {
    state = {
        data: {},
        loading: true
    }

    async componentDidMount() {
        const profile = await fetch('https://api.github.com/users/WilsonLawler');
        const profileJSON = await profile.json();

        if (profileJSON) {
            this.setState({
                data: profileJSON,
                loading: false,
            })
        }
    }


    render() {
        const { data, loading } = this.state;
        const items = [
            {
                label: 'html_url', value: <Link url={data.html_url}
                    title='Github URL' />
            },
            { label: 'repos_url', value: data.repos_url },
            { label: 'name', value: data.name },
            { label: 'company', value: data.company },
            { label: 'location', value: data.location },
            { label: 'email', value: data.email },
            { label: 'bio', value: data.bio }
        ];
        if (loading) {
            return (
                <div>Loading...</div>
            )
        }
        return (
            <div className='Profile-container'>
                <img className='Profile-avatar' src={data.avatar_url} alt="avatar" />
                <List items={items} />
            </div>
        );
    }
}

export default Profile;