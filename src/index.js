import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App'
import './index.css';

const initialState = {
	videos: [
		{id: 0, title: 'dgre', duration: 'grt', url: 'https://www.youtube.com/embed/t07E5JaT8r4?ecver=1', editable: false},
		{id: 1, title: 'gergf', duration: 'tretre', url: 'https://www.youtube.com/embed/t07E5JaT8r4?ecver=1', editable: false},
	],
	newVid: {},
	editVid: {title: '', url: ''},
	playVid: 'off'
}

const store = createStore(rootReducer, initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)