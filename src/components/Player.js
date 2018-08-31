import React from 'react'
import PropTypes from 'prop-types'

const Player = ({url, workPlayer}) => (
	url === 'off' ?

	<div></div>

	:
	<div class='player'>
		<div>
			<button onClick={workPlayer}>Hide player</button>
		</div>
		<iframe 
			width="850" 
			height="480" 
			src={url} 
			frameborder="0" 
			allow="autoplay; encrypted-media" 
			allowfullscreen
		>
		</iframe>

	</div>
)

Player.propTypes = {

    url: PropTypes.string.isRequired,
  	workPlayer: PropTypes.func.isRequired,
}

export default Player