import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App'
import './index.css';

const initialState = {
	videos: [],
	newVid: {title: '', url: ''},
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