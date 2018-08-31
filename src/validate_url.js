var validate = function(url){
	var result = url.includes('watch?v=');
	if (result){
		return url
	}
	alert ('please copy url directly from address bar');
	return 'error' 
}

export default validate

