A React-Redux app allowing user to produce a list of videos by entering Youtube urls. The list items can be edited or deleted. The url is validated, and the embed code extracted, so that clicking on the video can allow it to be played. 

The duration of the video is also extracted through an API call to Youtube. This requires having a Youtube API key in a config.js file in the 'src' folder. 

I am in the process of learning to use Redux asynchronously; once there, I will be able to include the duration in the video list. 

To activate: 

In root directory: 'npm start'