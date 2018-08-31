import React from 'react'
import PropTypes from 'prop-types'

const Add = ({ dispatch, newVidTitle, newVidUrl, newTitle, newUrl, addVid, showState }) => {
 	let input
 	return (
 		<div class='add'>
 				<h2>Add new video</h2>
 				<table>
 					<tr>
 						<td>Title</td>
 						<td>
 							<input value={newVidTitle} onChange={ (e) => newTitle(e.target.value)}/>
 						</td>
 					</tr>
 					<tr>
 						<td>URL</td>
 						<td>
 							<input value={newVidUrl} onChange={ (e) => newUrl(e.target.value)}/>
 						</td>
 					</tr>
 				</table>
 				<button type='submit' onClick={ () => addVid()}>Submit</button>
 				<button onClick={showState}></button>
 		</div>
 	)
 }

 Add.propTypes = {

    newVid: PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,

    }).isRequired,
    newTitle: PropTypes.func.isRequired,
    newUrl: PropTypes.func.isRequired,
    addVid: PropTypes.func.isRequired,
    showState: PropTypes.func.isRequired,
}

export default Add