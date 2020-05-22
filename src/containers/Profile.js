import React, { Component } from 'react';
import styled from 'styled-components';
import Link from '../components/Link/Link';
import List from '../components/List/List';

const ProfileWrapper = styled.div`
width: 50%;
margin: 10px auto;
 `;
const Avatar = styled.img`
width: 150px;
 `;

class Profile extends Component {
    state = {
        data: {},
        repos: [],
        loading: true,
        error: '',
    }

    async componentDidMount() {
        try {
        const profile = await fetch('https://api.github.com/users/WilsonLawler');
        const profileJSON = await profile.json();

        if (profileJSON) {

            const repositories = await fetch(profileJSON.repos_url);
            const repositoriesJSON = await repositories.json();

            this.setState({
                data: profileJSON,
                repos: repositoriesJSON,
                loading: false,
            })
        }
    } 
    catch(error) {
        this.setState({
            loading: false,
            error: error.message,
        });
    }
    }


    render() {
        const { data, loading, repos, error } = this.state;
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
        const projects = repos.map(repo => ({
            label: repo.name,
            value: <Link url={repo.html_url} title='Github URL' />
        }));
        if (loading || error) {
            return (
                <div>{ loading ? 'Loading...' : error }</div>
            )
        }
        return (
            <ProfileWrapper>
                <Avatar src={data.avatar_url} alt='avatar' />
                <List title='Profile' items={items} />
                <List title='Projects' items={projects} />
            </ProfileWrapper>
        );
    }
}

export default Profile;