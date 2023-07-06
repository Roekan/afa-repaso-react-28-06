import axios from 'axios'

const URL = 'https://express-api-basic.vercel.app';
const URL_RM='https://rickandmortyapi.com/api';

export const logUser = async (body:any)=>{
    const res = await axios.post(`${URL}/auth/login`,body)
    return res.data
}

export const getCharacters = async ()=>{
    const {data}:any = await axios.get(`${URL_RM}/character`)
    console.log(data.results)
    return data.results
}

export const getOneCharacter = async (id:string)=>{
    const {data}:any = await axios.get(`${URL_RM}/character/${id}`)
    console.log(data)
    return data
}

export const getCharacterByName = async (name:string)=>{
    const {data}:any = await axios.get(`${URL_RM}/character/?name=${name}`)
    console.log(data)
    return data.results
}