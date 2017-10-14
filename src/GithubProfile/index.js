import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Repositories from '../Repositories';
import Gists from '../Gists';
import User from '../User';
import { setSelectedTabIndex } from './actions';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

/**
 * Container Component to render the home page with 'User Profiles', 'Repositories' & 'Gists' Tab.
 */
export class GithubProfile extends Component {
    render() {
        const { selectedIndex, setSelectedTabIndex } = this.props;
        //Retaining the selected tab index to show the same tab when traversing to different urls.
        return (
            <Tabs selectedIndex={selectedIndex} onSelect={tabIndex => setSelectedTabIndex(tabIndex)}>
                <TabList>
                    <Tab>User Profile</Tab>
                    <Tab>Repositories</Tab>
                    <Tab>Gists</Tab>
                </TabList>
                <TabPanel>
                    <User />
                </TabPanel>
                <TabPanel>
                   <Repositories />
                </TabPanel>
                <TabPanel>
                   <Gists />
                </TabPanel>
            </Tabs>
        );
    }
}

const mapStateToProps = (state) => ({
    selectedIndex: state.githubProfile.selectedIndex
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        setSelectedTabIndex
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(GithubProfile);