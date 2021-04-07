import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { coords } from '../utils/helper'
import { getMarker, setMarkers } from '../utils/marker'
import Restaurants from './Restaurants'

const MapWrapper = styled.div`
  width: 80%;
  height: 360px;
  background-color: #ccc;
  margin-bottom: 2rem;
  margin-top: 2rem;
`
let googleMapInstance = null
let markers = []

const MapBox = () => {
  const restaurants = useSelector((state) => state.businesses)
  const isLoading = useSelector((state) => state.loading)
  const region = useSelector((state) => state.region)
  const mapEl = document.querySelector('#places-map')

  // create map instance in case it's not present in DOM
  useEffect(() => {
    if (window.google && window.google.maps && mapEl && !googleMapInstance) {
      googleMapInstance = new window.google.maps.Map(mapEl, {
        center: coords.default,
        zoom: 12
      })
    }
  }, [isLoading, mapEl])

  // update region/center of map
  useEffect(() => {
    if (googleMapInstance) {
      googleMapInstance.setCenter({
        lat: Number(region.latitude.toFixed(5)),
        lng: Number(region.longitude.toFixed(5))
      })
    }
  }, [region])

  //retrieve/update markers on map for fetched set of restaurants
  useEffect(() => {
    if (region && restaurants.length && googleMapInstance && !isLoading) {
      //remove previous markers
      setMarkers(null, markers)
      markers = []

      restaurants.forEach((restaurant) => {
        const { longitude: lng, latitude: lat } = restaurant.coordinates
        const marker = getMarker(lat, lng, restaurant.name)

        markers.push(marker)
      })

      setMarkers(googleMapInstance, markers)
    }
  }, [restaurants, isLoading, region])

  return (
    <React.Fragment>
      <MapWrapper data-testid="places-map" id="places-map" />
      {!!restaurants.length && <Restaurants restaurants={restaurants} />}
    </React.Fragment>
  )
}

export default MapBox
