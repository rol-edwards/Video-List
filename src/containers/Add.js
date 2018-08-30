import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addVid } from '../actions'
import { newTitle } from '../actions'
import { newUrl } from '../actions'


 const Add = ({ dispatch }) => {
 	let input
 	return (
 		<div>
 				<h2>Add new video</h2>
 				<table>
 					<tr>
 						<td>Title</td>
 						<td>
 							<input ref={node => input = node} onChange={ (e) => dispatch(newTitle(e.target.value))}/>
 						</td>
 					</tr>
 					<tr>
 						<td>URL</td>
 						<td>
 							<input onChange={ (e) => dispatch(newUrl(e.target.value))}/>
 						</td>
 					</tr>
 				</table>
 				<button type='submit' onClick={ () => dispatch(addVid())}>Submit</button>
 		</div>
 	)
 }

export default connect()(Add)