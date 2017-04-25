// Gettting manifest_uri

function getManifestUri() {
  var shapeUrl = url.match(/http:\/\/[\w/:\(\)~\.=\+\-]+\./g);
  var shapeUrlString = shapeUrl.toString();
  var addiiif = shapeUrlString.replace('/ark:/', '/iiif/ark:/');
  var manifestUri = addiiif.replace('/\.[\?|\w]+/', '/manifest.json');
  var encodeManifestUri = encodeURIComponent(manifestUri);

  var request = new window.XMLhttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200){
      var manifestJson = JSON.parse(request.responseText);
    }
  request.open('GET', 'encodeManifestUri', true);
  request.send(null);
  };

  var originData = JSON.stringify(request.responseText);
  var endPointCanvases = originData.indexOf('canvases');
  var endPointImages = originData.indexOf('images', endPointCanvases);
  var endPointResource = originData.indexOf('resource', endPointImages);
  var endPointBracket = originData.indexOf('},', endPointResource);
  var resource = originData.substring(endPointResource, endPointBracket);
  var endPointId = resource.indexOf('@id');
  var endPointQmark = resource.lastIndexOf('"');
  var substringId = resource.substring(endpointId, endPointQmark);
  var idUri = substringId.match(/http:\/\/[\w/:\.]+\/f1/g);
  var infoJson = idUri + '/info.json';
  return infoJson;
}
var geturl = document.getElementById('url');
geturl.onclick = getManifestUri
