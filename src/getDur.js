import axios from 'axios';

var getDur = function(id, apiKey){
  axios.get('https://www.googleapis.com/youtube/v3/videos?id=' + id + '&part=contentDetails&key=' + apiKey)
  .then((res) => {
    var data = res.data;
    var duration = data.items[0].contentDetails.duration
    var durBits = duration.split('PT')
    var smaller = durBits[1].split('M')
    var mins = parseInt(smaller[0], 10) //should be the number of minutes
    var secs = parseInt(smaller[1], 10) //should be seconds
    var min = String(mins);
    var sec = String(secs);
    var result = 'Duration: ' + min +'mins' + sec + 'secs'
    console.log(result)
    return result
})
  
}

export default getDur


