import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'
//import { removeVid } from '../actions'
//import { toggleEdit } from '../actions'

//import { addVid } from '../actions'
//import { editTitle } from '../actions'
//import { editUrl } from '../actions'
//import { submitEdit } from '../actions'

const List = ({showState, videos, editVid, removeVid, toggleEdit, editTitle, editUrl, submitEdit, workPlayer}) => (
	<div>
		<table class='list'>
			<tbody>
				<tr>
					<th>Title</th>
					<th>Duration</th>
					<th>URL</th>
					
				</tr>
			    {videos.map(video =>
			      <Item
			        key={video.id}
			        {...video}
			        editedTitle={editVid.title}
			        editedUrl={editVid.url}
			        onClick={() => removeVid(video.id)}
			        toggleEdit={() => toggleEdit(video.id)}
			        editTitle={(e) => editTitle(e.target.value)}
			        editUrl={(e) => editUrl(e.target.value)}
			        submitEdit={() => submitEdit(video.id)}
			        workPlayer={(url) => workPlayer(video.url)}
			      />
			    )}
			</tbody>
		</table>
		<button onClick={showState}></button>
	</div>
)

List.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      editable: PropTypes.bool.isRequired,

    }).isRequired
  ).isRequired,
  editVid: PropTypes.shape({
  	title: PropTypes.string.isRequired, 
  	url: PropTypes.string.isRequired,
  }),
  toggleEdit: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  newTitle: PropTypes.func.isRequired,
  newUrl: PropTypes.func.isRequired,
  editTitle: PropTypes.func.isRequired,
  editUrl: PropTypes.func.isRequired,
  submitEdit: PropTypes.func.isRequired,
  workPlayer: PropTypes.func.isRequired,
}



export default List