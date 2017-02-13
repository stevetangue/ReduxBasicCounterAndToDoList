import React from 'react';
import {render} from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider, connect} from 'react-redux';



require('./styles/style.scss');
import {exampleUiData} from './exampleUiData';

const uiData = exampleUiData;

const reducerUp = ((state=0, action) => {
	if (action.type === 'ADDUP') {
		return state + 1;
	}
	return state;
});

const reducerDown = ((state=9, action) => {
	if (action.type === 'ADDDOWN') {
		return state - 1;
	}
	return state;
});

const Bottom = (props) => {
	const state = props.reducerDown;
	return (
		<div>
			&nbsp;Bottom {state} &nbsp;
			<button onClick={props.ADDDOWN}>Decrease</button>
		</div>
	);
}

const Middle = (props) => {
	return (
		<div>
			<hr />
			<XBottom />
		</div>
	);
}

const Top = (props) => {
	const state = props.reducerUp;
	return (
		<div>
			&nbsp;Top {state} &nbsp;
			<button onClick={props.ADDUP}>Increase</button>
			<Middle />
		</div>
	);
}

const mapState = (state) => {
	return {
		reducerUp: state.reducerUp
	}
}
const mapDispatch = (dispatch) => {
	return {
		ADDUP: () => dispatch({type:'ADDUP'})
	}
}

const mapStateBasement = (state) => {
	return {
		reducerDown: state.reducerDown
	}
}
const mapDispatchBasement = (dispatch) => {
	return {
		ADDDOWN: () => dispatch({type:'ADDDOWN'})
	}
}

const XTop = connect(mapState, mapDispatch)(Top);
const XBottom = connect(mapStateBasement, mapDispatchBasement)(Bottom);
	render ((
		<Provider store={createStore(combineReducers({reducerUp:reducerUp, reducerDown: reducerDown}))} >
			<XTop />
		</Provider>
	), document.getElementById('example01'));
