import React from 'react';

import TaskListsStore from '../stores/TaskListsStore';
import TaskListsActions from '../actions/TaskListsActions';

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import ListIcon from 'material-ui/lib/svg-icons/action/view-list';
import HomeIcon from 'material-ui/lib/svg-icons/action/home';
import ExitIcon from 'material-ui/lib/svg-icons/action/exit-to-app';
import FolderIcon from 'material-ui/lib/svg-icons/file/folder';
import AddIcon from 'material-ui/lib/svg-icons/content/add';
import {SelectableContainerEnhance} from 'material-ui/lib/hoc/selectable-enhance';
let SelectableList = SelectableContainerEnhance(List);

function wrapState(ComposedComponent) {
    const StateWrapper = React.createClass({
        getInitialState() {
            return {selectedIndex: 0};
        },
        handleUpdateSelectedIndex(e, index) {
            this.setState({
                selectedIndex: index,
            });
        },
        render() {
            return (
                <ComposedComponent
                    {...this.props}
                    {...this.state}
                />
            );
        },
    });
    return StateWrapper;
}

SelectableList = wrapState(SelectableList);

import TaskListCreateModal from './TaskListCreateModal.jsx';

import './TasklistsPage.less';

function getStateFromFlux() {
    return {
        taskLists: TaskListsStore.getTaskLists()
    };
}

const TasklistsPage = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState() {
        return {
            ...getStateFromFlux(),
            isCreatingTaskList: false
        };
    },

    componentWillMount() {
        TaskListsActions.loadTaskLists();
    },

    componentDidMount() {
        TaskListsStore.addChangeListener(this._onChange);
    },

    componentWillUnmount() {
        TaskListsStore.removeChangeListener(this._onChange);
    },

    handleAddTaskList() {
        this.setState({ isCreatingTaskList : true });
    },

    handleClose() {
        this.setState({ isCreatingTaskList : false });
    },

    handleTaskListSubmit(taskList) {
        TaskListsActions.createTaskList(taskList);

        this.setState({ isCreatingTaskList : false });
    },

    render() {
        const { router } = this.context;
        const getSelectedList = () => {
            let currentList =  this.state.taskLists.find((list) => this.props.params.id === list.id);
            return currentList && currentList.id;
        };
        const styles = {
            backgroundColor: 'rgba(255, 0, 0, 0.4)'
        };
        return (
            <div className='TasklistsPage'>
                <div className='TasklistsPage__menu'>
                    <List className='TasklistsPage__list'>
                        <h3 className='TasklistsPage__title'>Almost Google Tasks</h3>
                        <Divider />
                        <List className='TasklistsPage__list'>
                            <ListItem
                                leftIcon={<HomeIcon />}
                                primaryText="Home"
                                onClick={router.push.bind(null, `/lists`)}
                            />
                            <ListItem
                                leftIcon={<ListIcon />}
                                primaryText="About"
                                onClick={router.push.bind(null, `/about`)}
                            />
                        </List>
                        <Divider />
                        <SelectableList
                            valueLink={{value: getSelectedList(), requestChange: () => {}}}
                            className='TasklistsPage__list' subheader="Task Lists" >
                            {
                                this.state.taskLists.map(list =>
                                    <ListItem
                                        key={list.id}
                                        value={list.id}
                                        leftIcon={<FolderIcon />}
                                        primaryText={list.name}
                                        onClick={router.push.bind(null, `/lists/${list.id}`)}
                                    />
                                )
                            }
                            <ListItem
                                leftIcon={<AddIcon />}
                                primaryText="Create new list"
                                onClick={this.handleAddTaskList}
                            />
                        </SelectableList>
                        <Divider />
                        <List className='TasklistsPage__list'>
                            <ListItem
                                leftIcon={<ExitIcon />}
                                primaryText="Log out"
                                onClick={this.handleLogOut}
                            />
                        </List>
                    </List>
                </div>
                <div className='TasklistsPage__tasks'>
                    {this.props.children}
                </div>
                <TaskListCreateModal
                    isOpen={this.state.isCreatingTaskList}
                    onSubmit={this.handleTaskListSubmit}
                    onClose={this.handleClose}
                />
            </div>
        );
    },

    _onChange() {
        this.setState(getStateFromFlux());
    }
});

export default TasklistsPage;
