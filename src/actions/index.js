 let nextId = 2

 export const addVid = info => ({
 	type: 'ADD_VID',
 	id: nextId++,
 	title: info
 })

 export const removeVid = id => ({
 	type: 'REMOVE_VID',
 	id: id
 })

export const toggleEdit = id => ({
	type: 'TOGGLE_EDIT',
	id: id
})

export const newTitle = text => ({
	type: 'NEW_TITLE',
	title: text,
})

export const newUrl = text => ({
	type: 'NEW_URL',
	url: text,
})

export const editTitle = text => ({
	type: 'EDIT_TITLE',
	title: text,
})

export const editUrl = text => ({
	type: 'EDIT_URL',
	url: text,
})

export const submitEdit = id => ({
	type: 'SUBMIT_EDIT',
	id: id,
})

export const workPlayer = url => ({
	type: 'WORK_PLAYER',
	url: url,
})

export const showState = () => ({
	type: 'SHOW_STATE',
	
})