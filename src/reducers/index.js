import apiKey from '../config.js'
import getDur from '../getDur.js'

const videos = (state = [], action) => {
	switch (action.type) {

		case 'REMOVE_VID':
			console.log('removing video' + action.id)
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
			console.log('the new url is at present: ' + state.newVid.url)
			var newState = {...state};
			console.log('and now the new state: ' + newState.newVid.url)
			var new_url1 = newState.newVid.url.split('?v=')[1];
			console.log('this is code: ' + new_url1)
			var newUrl = 'https://www.youtube.com/embed/' + new_url1 + '?ecver=1'
			//var newDur = getDur(new_url1, apiKey);
			var newDur = 'placeholder'
			console.log('duration is: ' + newDur)
			console.log(newState.videos[0].title);
			var newTitle = newState.newVid.title;
			//var newUrl = newState.newVid.url;
			var videos = [];
			newState.videos.push({id: action.id, title: newTitle, duration: newDur, url: newUrl, editable: false});
			newState.newVid = {};
			newState.videos.forEach(function(video){
				videos.push(video)
			})
			newState.videos = videos;
			console.log(JSON.stringify(newState))
			return newState

		case 'NEW_TITLE':
			var newState = {... state};
			newState.newVid.title = action.title;
			return newState

		case 'NEW_URL':
		console.log('new url will be: ' + action.url)
			var newState = {...state};
			newState.newVid.url = action.url;
			return newState

		case 'TOGGLE_EDIT':
			//console.log('toggling')
			var newState = {...state};
			var videos = [];
			newState.videos.forEach(function(video){
				if (video.id === action.id){
					video.editable = true;
				}
				videos.push(video)
			})
			newState.videos = videos;
			return newState

		case 'EDIT_TITLE':
			var newState = {... state};
			newState.editVid.title = action.title;
			return newState

		case 'EDIT_URL':
			var newState = {...state};
			newState.editVid.url = action.url;
			return newState

		case 'SUBMIT_EDIT':
			console.log('submit edit' + action.id)
			var newState = {...state};
			var newTitle = newState.editVid.title;
			var newUrl = newState.editVid.url;
			var videos = [];
			newState.videos.forEach(function(video){
				if (video.id === action.id){
					video.title = newState.editVid.title;
					video.url = newState.editVid.url;
					video.editable = false;
				}
				videos.push(video)
			})
			newState.videos = videos;
			console.log(JSON.stringify(newState))
			return newState 

		case 'WORK_PLAYER':
			console.log('url is: ' + action.url)
			var newState = {...state};
			newState.playVid = action.url;
			return newState;

		default:
			return state
	}
}

export default videos