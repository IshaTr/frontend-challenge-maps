/**
 * Creates a marker for map
 * @param {number} lat - latitude
 * @param {number} lng - longitude
 * @param {string} name - restaurant name
 * @return {google.maps.Marker} Marker which will be placed on a google map
 */
export const getMarker = (lat, lng, name, mapInstance) => {
  const infowindow = new window.google.maps.InfoWindow({
    content: `<div>${name}</div>`
  })

  const marker = new window.google.maps.Marker({
    position: { lat, lng },
    // icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/library_maps.png',
    map: mapInstance,
    title: name,
    animation: window.google.maps.Animation.DROP
  })

  marker.addListener('mouseover', () => {
    infowindow.open(mapInstance, marker)
  })

  marker.addListener('mouseout', () => {
    infowindow.close()
  })

  return marker
}

/**
 * Sets the map on all markers in the array.
 * @param {google.maps.Map} mapInstance - Instance of a Google map (can also be null)
 * @param {array} markers - Array of marker instances
 */
export const setMarkers = (mapInstance, markers = []) => {
  markers.forEach((marker) => {
    marker.setMap(mapInstance)
  })
}
