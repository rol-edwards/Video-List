import React from 'react'
import PropTypes from 'prop-types'

const Item = ({onClick, toggleEdit, editTitle, editUrl, submitEdit, workPlayer, title, duration, url, id, editable, editedTitle, editedUrl}) => (
	editable ?
		<tr>
			<td>
				<input type='text' id='title' onChange={editTitle} value={editedTitle}/>	
			</td>
			<td></td>
			<td>
				<input type='text' id='url' onChange={editUrl} value={editedUrl}/>
			</td>
			<td></td>
			<td>
				<button onClick={submitEdit}>Submit</button>
			</td>

		</tr>
	:
		<tr>
			<td onClick={workPlayer} class='title'><p>{title}</p></td>
			<td>{duration}</td>
			<td>{url}</td>
			<td>
				<iframe 
					width="85" 
					height="48" 
					src={url} 
					frameborder="0" 
					allow="autoplay; encrypted-media" 
					allowfullscreen
				>
				</iframe>
			</td>
			<td><button onClick={toggleEdit} class='round'>Edit</button></td>
			<td><button onClick={onClick} class='round'>X</button></td>
		</tr>
	
)

Item.propTypes = {
	id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func.isRequired,
  editTitle: PropTypes.func.isRequired,
  editUrl: PropTypes.func.isRequired,
  submitEdit: PropTypes.func.isRequired,
  workPlayer: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  editable: PropTypes.bool.isRequired,
  editedTitle: PropTypes.string.isRequired,
  editedUrl: PropTypes.string.isRequired,
}

export default Item