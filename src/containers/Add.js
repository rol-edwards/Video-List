import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addVid } from '../actions'
import { newTitle } from '../actions'
import { newUrl } from '../actions'
import { showState } from '../actions'
import Add from '../components/Add'

const mapStateToProps = state => ({
		
		newVidTitle: state.newVid.title,
		newVidUrl: state.newVid.url
	}
)

const mapDispatchToProps = dispatch => ({
	
	newTitle: id => dispatch(newTitle(id)),
	newUrl: id => dispatch(newUrl(id)),
	addVid: () => dispatch(addVid()),
	showState: () => dispatch(showState())

})

export default connect(
	mapStateToProps,
	mapDispatchToProps
 )(Add)