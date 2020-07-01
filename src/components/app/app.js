import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, label: 'Going to Learn React', important: true },
                { id: 2, label: 'Post two', important: false },
                { id: 3, label: 'Post three', important: false },
                { id: 4, label: 'New POST', important: false }
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);

        this.maxId = 5;
    }

    deleteItem(id) {
        this.setState = (
            ({ data }) => {
                const index = data.findIndex(elem => elem.id === id);
                const newArr = [...data.slice(0, index), data.slice(index + 1)];

                return {
                    data: newArr
                }
            }
        )
    }

    addItem (body) {
        const newItem = {
            label: body, important: false, id: this.maxId++
        }
        this.setState = (({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    render() {
        return (
            <div className='app'>
                <AppHeader />
                <div className='search-panel d-flex'>
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList
                    posts={this.state.data}
                    onDelete={this.deleteItem} />
                <PostAddForm
                    onAdd={this.addItem} />
            </div>
        )
    }
}

