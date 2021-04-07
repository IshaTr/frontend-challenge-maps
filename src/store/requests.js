import axios from 'axios'

export const fetchRestaurants = (category) => {
  const query = {
    limit: 20,
    location: 'Berlin, Germany',
    term: 'restaurants',
    categories: category
  }
  const urlParams = new URLSearchParams(query)

  return axios.get(`http://localhost:3000/-/search?l${urlParams}`, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AUTHORIZATION_TOKEN}`
    }
  })
}
