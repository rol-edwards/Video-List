//ADD:

 const AddVid = ({ dispatch }) => {

 	return (
 		<div>
 			<form
 				onSubmit={e => {
 					dispatch(addVid(input.value))
 				}}
 			>
 				<input />
 				<button>Add Video</button>
 			</form>
 		</div>
 	)
 }


//LIST:

//container:
const mapStateToProps = state => ({
	videos: state.videos
})

const mapDispatchToProps = dispatch => ({
	removeVid: id => dispatch(removeVid(id))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
 )(List)


//component:
const List = ({videos, removeVid}) => (
	<div>
		<table>
			<tbody>
				<tr>
					<th>Title</th>
					<th>Duration</th>
					<th>URL</th>
					<th></th>
					<th></th>
					<th></th>
				</tr>
				{listItems}
			</tbody>
		</table>
	</div>
)

//ITEM:

//component:
const Item = ({}) => (
	<div>
		<p>{vid}</p>
		{content}
	</div>
)

//Actions
 export const addVid = info => ({
 	type: 'ADD_VID',
 	id: nextId++,
 	info: info
 })

 export const removeVid = id => ({
 	type: 'REMOVE_VID',
 	id: id
 })

export const toggleEdit = id => ({
	type: 'TOGGLE_EDIT',
	id: id
})

//Reducers
const videos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_VID':
			return [
			...state,
			{
				id: action.id,
				info: action.info,
				completed: false
			}
		]
		case 'REMOVE_VID':
			const newState = [];
			state.forEach(video =>
				(video.id === action.id)
				? {
					newState.push(video)
				}
			return newState
			)
		case 'TOGGLE_EDIT':
			return state.videos.map(video =>
				(video.id === action.id)
				? {...video, editable: !video.editable}
				: video
			)


		default:
			return state
	}
}

//need actions for each of these:

case 'NEW_TITLE':
	return [
	]

this.newTitle = this.newTitle.bind(this);
this.newDuration = this.newDuration.bind(this);
this.newUrl = this.newUrl.bind(this);

this.editTitle = this.editTitle.bind(this);
this.editDuration = this.editDuration.bind(this);
this.editUrl = this.editUrl.bind(this);



