import apiKey from '../config.js'
import getDur from '../getDur.js'
import validate from '../validate_url.js'

const reducers = (state = [], action) => {
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
			var newState = {...state};
			var validatedUrl = validate(newState.newVid.url)
			if (validatedUrl === 'error'){
				return state
			}
			var code = validatedUrl.split('?v=')[1];
			var newUrl = 'https://www.youtube.com/embed/' + code 
			var newDur = getDur(code, apiKey);
			console.log(newDur)
			var newTitle = newState.newVid.title;
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
			var newState = {...state};
			var videos = [];
			var editVid = {};
			newState.videos.forEach(function(video){
				if (video.id === action.id){
					video.editable = true;
					editVid.title = video.title;
					var embedUrl = video.url;
					var code = embedUrl.split('embed/')[1]
					var playUrl = 'https://www.youtube.com/watch?v=' + code
					editVid.url = playUrl;
				}
				videos.push(video)
			})
			newState.editVid = editVid;
			newState.videos = videos;
			return newState

		case 'EDIT_TITLE':
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
			var newState = {...state};
			var validatedUrl = validate(newState.editVid.url);
			if (validatedUrl === 'error'){
				return state
			};
			var code = validatedUrl.split('?v=')[1];
			var newUrl = 'https://www.youtube.com/embed/' + code + '?ecver=1'
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

export default reducers