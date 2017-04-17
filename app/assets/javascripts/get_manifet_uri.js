// This script will be embeded in html file for the page opens openseadragon.

// ___________html__________
// <form name="GetUrl">
// Fetch URL: <input type="text" name="Url"/>
// <input type="submit" value="Get" onclick="GetManifestUri">
// <script src="get_manifest_uri.js"</script>
// ___________________________

// Gettting manifest_uri
var name = document.form.name.value;
document.form.name.value = 'Getjson';
encodeURIComponent(Getjson);
function GetManifestUri() {
  var request = new window.XMLhttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 404 || 500){
      alert("This URL is unverified.");
  }
  request.open('GET', 'Getjson?param=' + Math.random(), true);
  request.send(null);
  }
}

// Getting sequence/canvas/images/id
//Removing the specified data fetting IIIF Image API
// Adding info.json
