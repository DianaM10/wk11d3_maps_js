var init = function(){
  var container = document.getElementById('main-map');
  var center = {lat: -3.4653, lng: -62.2159};
  var mainMap = new MapWrapper(container, center, 7);
  mainMap.addMarker(center);
  mainMap.addClickEvent();
  var button = document.createElement('button');
  var t = document.createTextNode("TAKE ME TO MOUNT FUJI");
  button.appendChild(t);
  document.body.appendChild(button);
  
  google.maps.event.addDomListener(document.querySelector('button'),'click', function() {
    map.setCenter(new google.maps.LatLng(35.3606, 138.7278));
  })
}


window.onload = init;