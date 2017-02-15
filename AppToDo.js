import React from 'react'
import {render} from 'react-dom'
import {createStore, combineReducers} from 'redux'
import {Provider, connect} from 'react-redux'
import todoApp from './reducers'
import App from './components/App'



require('./styles/toDoApp.scss');

let store = createStore(todoApp);

	render (
		<Provider store={store} >
			<App />
		</Provider>, document.getElementById('toDoApp')
	)
