
require('./styles/style.scss');

import {createStore} from 'redux';


// 01. create store
const reducerStore = ((state=0, action) => {
	if (action.type === 'BOO') {
		return state + 1;
	}
	return state;
});

const store = createStore(reducerStore);
console.log(document.body.innerText);


// 02. get the state
const start = () => {
	document.body.innerText = store.getState();
};
 

// 03. to change state
document.addEventListener ('click', ()=>{
	store.dispatch({type:'BOO'});
});

// 04 subscribe to change
store.subscribe(start);

start();