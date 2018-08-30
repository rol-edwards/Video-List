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
import { workPlayer } from '../actions'

//import components
import Player from '../components/Player'

const getList = (videos) => {
	return videos
}

const mapStateToProps = state => ({
	url: state.playVid
})

const mapDispatchToProps = dispatch => ({
	workPlayer: () => dispatch(workPlayer('off'))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
 )(Player)