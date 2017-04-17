// This script will be embeded in html file for the page opens openseadragon.

// html
// <form name="hoge">
// URL: <input type="text" name="ClientUrl"/>
// <input type="submit" value="GetJson"
// Gettting manifest_uri
var request = new window.XMLhttpRequest();
request.open('GET', '', true);
request.send(null);

// Getting sequence/canvas/images/id
//Removing the specified data fetting IIIF Image API
// Adding info.json
