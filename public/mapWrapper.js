var MapWrapper = function(container, center, zoom) {
 

  this.googleMap = new google.maps.Map(container, {
  center: center,
  zoom: zoom
});
}

MapWrapper.prototype = {
  addinfowindow: function() {
    var infowindow = new google.maps.InfoWindow({
      content: 'The Amazon rainforest, also known in English as Amazonia or the Amazon Jungle, is a moist broadleaf forest that covers most of the Amazon basin of South America. This basin encompasses 7,000,000 square kilometres (2,700,000 sq mi), of which 5,500,000 square kilometres (2,100,000 sq mi) are covered by the rainforest. This region includes territory belonging to nine nations. The majority of the forest is contained within Brazil, with 60% of the rainforest, followed by Peru with 13%, Colombia with 10%, and with minor amounts in Venezuela, Ecuador, Bolivia, Guyana, Suriname and French Guiana. States or departments in four nations contain "Amazonas" in their names. The Amazon represents over half of the planets remaining rainforests, and comprises the largest and most biodiverse tract of tropical rainforest in the world, with an estimated 390 billion individual trees divided into 16,000 species'

    });
    return infowindow;
  },
  

  addMarker: function(coords) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    })
    marker.addListener('click', function() {
      this.addinfowindow().open(this.googleMap, marker);
    }.bind(this))
  },

  addClickEvent: function() {
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      console.log("Yo I got called");
      console.log(event);
      console.log(event.latLng.lat());

      this.addMarker(event.latLng);
      console.log(this);
    }.bind(this))

  },

  
  

}