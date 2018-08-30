import React from 'react'
import PropTypes from 'prop-types'

const Player = ({url, workPlayer}) => (
	url === 'off' ?

	<div>Player would be here</div>

	:
	<div>
		<iframe 
			width="850" 
			height="480" 
			src={url} 
			frameborder="0" 
			allow="autoplay; encrypted-media" 
			allowfullscreen
		>
		</iframe>
		<button onClick={workPlayer}>Collapse</button>
	</div>
)

Player.propTypes = {

    url: PropTypes.string.isRequired,
  	workPlayer: PropTypes.func.isRequired,
}

export default Player