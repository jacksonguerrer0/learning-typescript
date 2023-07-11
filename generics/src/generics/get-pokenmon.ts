import axios, { AxiosResponse } from "axios"
import { Pokemon } from "../interfaces"

export const getPokemon = async (id: number): Promise<Pokemon> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`

  const res: AxiosResponse<Pokemon> = await axios.get(url)

  return res.data
}