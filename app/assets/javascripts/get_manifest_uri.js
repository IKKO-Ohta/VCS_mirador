// Gettting manifest_uri
var geturl = document.getElementById('url');
geturl.onclick = getManifestUri
function getManifestUri() {
  var shapeUrl = Url.match(/http:\/\/[\w/:\(\)~\.=\+\-]+\./g);
  var shapeUrlString = shapeUrl.toString();
  var addiiif = shapeUrlString.replace('/ark:/', '/iiif/ark:/');
  var manifestUri = addiiif.replace('/\.[\?|\w]+/', '/manifest.json');
  var encodeManifestUri = encodeURIComponent(manifestUri);

  var request = new window.XMLhttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200){
      var manifestJson = JSON.parse(request.responseText);
      alert(manifestJson);
    }
  request.open('GET', 'encodeManifestUri', true);
  request.send(null);
  };
}
