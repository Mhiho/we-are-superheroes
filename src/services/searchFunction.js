import { API_Key } from '../config'
import axios from 'axios'

export const searchFunction = async term => {
    try {
    const response = await axios.get(`https://www.superheroapi.com/api.php/${API_Key}/search/${term}`);
    return response.data;
    } catch (err) {
    console.error('bład:' + err);
    }
}