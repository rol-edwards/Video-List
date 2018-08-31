//https://www.googleapis.com/youtube/v3/videos?id=9bZkp7q19f0&part=contentDetails&key={YOUR_API_KEY}
import axios from 'axios';

var getDur = function(id, apiKey){
  axios.get('https://www.googleapis.com/youtube/v3/videos?id=' + id + '&part=contentDetails&key=' + apiKey)
  .then((res) => {
    var array = res.data;
    var string = array.items[0].contentDetails.duration
    var bits = string.split('PT')
   var smaller = bits[1].split('M')
    var mins = parseInt(smaller[0], 10) //should be the number of minutes
    var secs = parseInt(smaller[1], 10) //should be seconds
    var min = String(mins);
    var sec = String(secs);
    console.log('Duration: ' + min + ' mins ' + sec + ' secs')
   // var mins = 12
   // var secs = 8
    var result = 'Duration: ' + mins +'mins' + secs + 'secs'
    console.log(typeof result)
    return result
})
  
}

export default getDur

/*

{
 "kind": "youtube#videoListResponse",
 "etag": "\"XlbeM5oNbUofJuiuGi6IkumnZR8/ny1S4th-ku477VARrY_U4tIqcTw\"",
 "items": [
  {

   "id": "9bZkp7q19f0",
   "kind": "youtube#video",
   "etag": "\"XlbeM5oNbUofJuiuGi6IkumnZR8/HN8ILnw-DBXyCcTsc7JG0z51BGg\"",
   "contentDetails": {
    "duration": "PT4M13S",
    "dimension": "2d",
    "definition": "hd",
    "caption": "false",
    "licensedContent": true,
    "regionRestriction": {
     "blocked": [
      "DE"
     ]
    }
   }
  }
 ]
}

*/

