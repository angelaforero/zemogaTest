import axios from 'axios'

/**
 * Informacion de personajes famoso
 */
export async function getJsonConfigParameters() {
  const response = await axios.get(`${process.env.PUBLIC_URL}/data/configParameters.json`)
  return response
}
