import React from 'react';
import {render} from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider, connect} from 'react-redux';
import App from './App';

require('./styles/toDoApp.scss');

const store = createStore(toDoApp)


	render ((
		<Provider store={store} >
			<App />
		</Provider>
	), document.getElementById('toDoApp'));
