import { connect } from 'react-redux'
//import actions
import { removeVid } from '../actions'
import { toggleEdit } from '../actions'
import { newTitle } from '../actions'
import { newUrl } from '../actions'
import { addVid } from '../actions'
import { editTitle } from '../actions'
import { editUrl } from '../actions'
import { submitEdit } from '../actions'
//import components
import List from '../components/List'

const getList = (videos) => {
	videos.forEach(function(video){
		console.log('id is: ' + video.id)
		console.log(videos.length)
	})
	return videos
}

const mapStateToProps = state => (

console.log('this is the state: ' + JSON.stringify(state)),{

	videos: getList(state.videos)
})

const mapDispatchToProps = dispatch => ({
	removeVid: id => dispatch(removeVid(id)),
	toggleEdit: id => dispatch(toggleEdit(id)),
	newTitle: id => dispatch(newTitle(id)),
	newUrl: id => dispatch(newUrl(id)),
	editTitle: e => dispatch(editTitle(e)),
	editUrl: e => dispatch(editUrl(e)),
	submitEdit: id => dispatch(submitEdit(id))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
 )(List)