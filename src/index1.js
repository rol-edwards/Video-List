import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Add extends React.Component {
	constructor(props){
		super(props);
		this.addVid = this.addVid.bind(this);
		this.newTitle = this.newTitle.bind(this);
		this.newDuration = this.newDuration.bind(this);
		this.newUrl = this.newUrl.bind(this);
	}

	newTitle(input){
		console.log('this.is the property: ' + input.target.name)
		this.props.newAttribute(input.target.value, input.target.name)
	}

	newDuration(input){
		this.props.newDuration(input.target.value)
	}

	newUrl(input){
		this.props.newUrl(input.target.value)
	}

	addVid(){
		this.props.addVid('add')
	}

	render(){
		
		var newVid = this.props.newVid;
		return(
			<div>
				<h2>Add new video</h2>
				<table>
					<tr>
						<td>Title</td>
						<td>
							<input type='text' id='title' onChange={this.newTitle} value={newVid.title} name='title'/>
						</td>
					</tr>
						<td>Duration</td>
						<td>
							<input type='text' id='duration' onChange={this.newDuration} value={newVid.duration}/>
						</td>
					<tr>
						<td>URL</td>
						<td>
							<input type='text' id='url' onChange={this.newUrl} value={newVid.url}/>
						</td>
					</tr>
				</table>
				<button onClick={this.addVid}>Submit</button>
			</div>
			)
	}
}

class Item extends React.Component {
	constructor(props){
		super(props);
		this.removeVid = this.removeVid.bind(this);
		this.toggleEdit = this.toggleEdit.bind(this);
		this.editTitle = this.editTitle.bind(this);
		this.editDuration = this.editDuration.bind(this);
		this.editUrl = this.editUrl.bind(this);

	}

	removeVid(){
		this.props.removeVid(this.props.video.id);
	}

	toggleEdit(){
		console.log('near toggleEdit activated')
		this.props.toggleEdit(this.props.video.id);
	}

	editTitle(input){
		this.props.editTitle(this.props.video.id, input.target.value)
	}

	editDuration(input){
		this.props.editDuration(this.props.video.id, input.target.value)
	}

	editUrl(input){
		this.props.editUrl(this.props.video.id, input.target.value)
	}

	render(){
			const video = this.props.video;
			const editVid = this.props.editVid;
			var content = '';
			if (!video.editable){
				content = (
					<tr>
						<td>
							{video.title}
						</td>
						<td>
							{video.duration}
						</td>
						<td>
							{video.url}
						</td>
						<td>
							<button onClick={this.toggleEdit}>Edit</button>
						</td>
						<td>
							<button onClick={this.removeVid}>Delete</button>
						</td>
						<td>
							<iframe 
								ref='video'
								width="85" 
								height="48" 
								src={video.url} 
								frameborder="0" 
								allow="autoplay; encrypted-media" 
								allowfullscreen
							>
							</iframe>
						</td>
					</tr>)
				}
			
			else {
				 content = (
					<tr>
						<td>
							<input type='text' id='title' onChange={this.editTitle} value={video.title}/>
							<label for='title'>Title</label>
						</td>
						<td>
							<input type='text' id='duration' onChange={this.editDuration} value={video.duration}/>
							<label for='duration'>Duration</label>
						</td>
						<td>
							<input type='text' id='url' onChange={this.editUrl} value={video.url}/>
							<label for='url'>URL</label>
						</td>
						<td>
							<button onClick={this.toggleEdit}>Submit</button>
						</td>
					</tr>
				)

			}
		return(
			<div>
				{content}
			</div>
		)
	}
}

class List extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		var removeVid = this.props.removeVid;
		var toggleEdit = this.props.toggleEdit;
		var addVid = this.props.addVid;
		var newVid = this.props.newVid;
		var newTitle = this.props.newTitle;
		var newDuration = this.props.newDuration;
		var newUrl = this.props.newUrl;
		var editTitle = this.props.editTitle;
		var editDuration = this.props.editDuration;
		var editUrl = this.props.editUrl;
		var submit = this.props.submit;
		var editVid = this.props.editVid;
		var newAttribute = this.props.newAttribute;


		var listItems = [];
		this.props.videos.forEach(function(video){
			listItems.push(
				<Item
					video={video}
					removeVid={removeVid}
					toggleEdit={toggleEdit}
					newVid={newVid}
					addVid={addVid}
					newTitle={newTitle}
					newDuration={newDuration}
					newUrl={newUrl}
					editTitle={editTitle}
					editDuration={editDuration}
					editUrl={editUrl}
					submit={submit}
					editVid={editVid}
					newAttribute={newAttribute}
				/>
			)

		})

		return(
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
	}
}


class Page extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			videos: [
				{id: 0, title: 'dgre', duration: 'rter', url: 'trter', editable: false}
			],
			highestId: 0,
			newVid: {},
			editVid: {}
		}
		this.addVid = this.addVid.bind(this);
		this.newTitle = this.newTitle.bind(this);
		this.newDuration = this.newDuration.bind(this);
		this.newUrl = this.newUrl.bind(this);
		this.removeVid = this.removeVid.bind(this);
		this.toggleEdit = this.toggleEdit.bind(this);
		this.editTitle = this.editTitle.bind(this);
		this.editDuration = this.editDuration.bind(this);
		this.editUrl = this.editUrl.bind(this);
		this.newAttribute = this.newAttribute.bind(this);
	}
    
    //For Component Add:

	newTitle(title){
		var vid = this.state.newVid;
		vid.title = title;
		this.setState({newVid: vid})
	}

	newDuration(duration){
		var vid = this.state.newVid;
		vid.duration = duration;
		this.setState({newVid: vid})
	}

	newUrl(url){
		var vid = this.state.newVid;
		vid.url = url;
		this.setState({newVid: vid})
	}

	newAttribute(value, attr){
		console.log('new attribute called' + attr)
		var vid = this.state.newVid;
		vid.attr = value;
		console.log(vid.attr)
		this.setState({newVid: vid})
	}

	addVid(){
			this.refs.whatever.focus();
			var newId = this.state.highestId + 1;
			var newVids = this.state.videos;
			var newVid = this.state.newVid;
			newVids.push({id: newId, title: newVid.title, duration: newVid.duration, url: newVid.url, editable: false});
			this.setState({videos: newVids, newVid: {id: '', title: '', duration: '', url: ''}, highestId: newId})
	}

	//For component Item:

	submitEdit(id){
		const newVid = this.state.newVid;
			const newVids = this.state.videos;
			newVids.forEach(function(video){
				if (video.id == id){
					video = ({id: video.id, title: newVid.title, duration: newVid.duration, url: newVid.url, editable: false});
				}
			})
			this.setState({videos: newVids, newVid: {id: '', title: '', duration: '', url: ''}})
	}

	removeVid(id){
		console.log('removeId root removing video with id: ' + id)
		const newVids = [];
		var videos = this.state.videos;
		
		videos.forEach(function(video){
			if (video.id != id){
				newVids.push(video)
			}
		})
		console.log('about to exit removeVid');
		console.log(JSON.stringify(newVids))
		this.setState({videos: newVids})
	}

	toggleEdit(id){
		console.log('far toggleEdit activated')
		const newVids = this.state.videos;
		newVids.forEach(function(video){
			if (video.id == id){
				video.editable = !video.editable;
			}
		})

		this.setState({videos: newVids})
	}

	editTitle(id, title){
		const newVids = this.state.videos;
		newVids.forEach(function(video){
			if (video.id == id){
				video.title = title;
			}
		})

		this.setState({videos: newVids})
	}

	editDuration(id, duration){
		const newVids = this.state.videos;
		newVids.forEach(function(video){
			if (video.id == id){
				video.duration = duration;
			}
		})

		this.setState({videos: newVids})
	}

	editUrl(id, url){
		const newVids = this.state.videos;
		newVids.forEach(function(video){
			if (video.id == id){
				video.url = url;
			}
		})

		this.setState({videos: newVids})
	}

	render(){
	
		return(
			<div>
				<input type='text' ref='whatever'></input>
				<List
					videos={this.state.videos}
					newVid={this.state.newVid}
					editVid={this.state.editVid}
					
					removeVid={this.removeVid}
					toggleEdit={this.toggleEdit}
					addVid={this.addVid}
					newTitle={this.newTitle}
					newDuration={this.newDuration}
					newUrl={this.newUrl}
					newAttribute={this.newAttribute}
					editTitle={this.editTitle}
					editDuration={this.editDuration}
					editUrl={this.editUrl}
					

				/>
				<Add
					newVid={this.state.newVid}
					addVid={this.addVid}
					newTitle={this.newTitle}
					newDuration={this.newDuration}
					newUrl={this.newUrl}

					newAttribute={this.newAttribute}
				/>
			</div>
		)
	}
}


ReactDOM.render(
	<Page />,
	document.getElementById('root')
	)