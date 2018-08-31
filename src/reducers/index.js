import apiKey from '../config.js'
import getDur from '../getDur.js'
import validate from '../validate_url.js'

const videos = (state = [], action) => {
	switch (action.type) {

		case 'REMOVE_VID':
			var newState = {...state};
			var videos = [];
			newState.videos.forEach(function(video){
				if (video.id !== action.id){
					videos.push(video)
				}
			})
			newState.videos = videos;
			return newState
			
		case 'ADD_VID':
			//console.log('new title')
			var newState = {...state};
			var validatedUrl = validate(newState.newVid.url)
			if (validatedUrl === 'error'){
				return state
			}
			var new_url1 = validatedUrl.split('?v=')[1];
			var newUrl = 'https://www.youtube.com/embed/' + new_url1 + '?ecver=1'
			var newDur = getDur(new_url1, apiKey);
			//var newDur = 'placeholder'
			var newTitle = newState.newVid.title;
			//var newUrl = newState.newVid.url;
			var videos = [];
			newState.videos.push({id: action.id, title: newTitle, duration: newDur, url: newUrl, editable: false});
			newState.newVid = {title: '', url: ''};
			newState.videos.forEach(function(video){
				videos.push(video)
			})
			newState.videos = videos;
			return newState

		case 'NEW_TITLE':
			var newState = {... state};
			newState.newVid.title = action.title;
			return newState

		case 'NEW_URL':
			var newState = {...state};
			newState.newVid.url = action.url;
			return newState

		case 'TOGGLE_EDIT':
			console.log('toggling')
			var newState = {...state};
			var videos = [];
			var editVid = {};
			newState.videos.forEach(function(video){
				if (video.id === action.id){
					video.editable = true;
					editVid.title = video.title;
					editVid.url = video.url;
				}
				videos.push(video)
			})
			newState.editVid = editVid;
			newState.videos = videos;
			return newState

		case 'EDIT_TITLE':
			console.log('new title is: ' + action.title)
			var newState = {... state};
			var editVid = newState.editVid;
			editVid.title = action.title;
			newState.editVid = editVid;
			return newState

		case 'EDIT_URL':
			var newState = {...state};
			newState.editVid.url = action.url;
			return newState

		case 'SUBMIT_EDIT':
			console.log('the state at time of submission: ' + JSON.stringify(state))
			var newState = {...state};

			var new_url1 = newState.editVid.url.split('?v=')[1];
			var newUrl = 'https://www.youtube.com/embed/' + new_url1 + '?ecver=1'
			//var newDur = getDur(new_url1, apiKey);
			var newDur = 'placeholder'
			var videos = [];
			newState.videos.forEach(function(video){
				if (video.id === action.id){
					video.title = newState.editVid.title;
					video.url = newUrl;
					video.editable = false;
				}
				videos.push(video)
			})
			newState.videos = videos;
			return newState 

		case 'WORK_PLAYER':
			var newState = {...state};
			newState.playVid = action.url;
			return newState;

		case 'SHOW_STATE':
			console.log('this is the state: ' + JSON.stringify(state))
			return state

		default:
			return state
	}
}

export default videos