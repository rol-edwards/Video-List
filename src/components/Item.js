import React from 'react'
import PropTypes from 'prop-types'

const Item = ({onClick, toggleEdit, editTitle, editUrl, submitEdit, title, duration, url, id, editable}) => (
	editable ?
		<tr>
			<td>
				<input type='text' id='title' onChange={editTitle} />
				<label for='title'>Title</label>
			</td>
			<td>
				<input type='text' id='url' onChange={editUrl} />
				<label for='url'>URL</label>
			</td>
			<td>
				<button onClick={submitEdit}>Submit</button>
			</td>

		</tr>
	:
		<tr>
			<td>{title}</td>
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
			<td><button onClick={onClick} class='round'>X</button></td>
			<td><button onClick={toggleEdit} class='round'>Edit</button></td>
		</tr>
	
)

Item.propTypes = {
	id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func.isRequired,
  editTitle: PropTypes.func.isRequired,
  editUrl: PropTypes.func.isRequired,
  submitEdit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  editable: PropTypes.bool.isRequired
}

export default Item