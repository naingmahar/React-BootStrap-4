import axios from "axios"
import {decode, encode} from 'base-64'


const API_CALL = axios.create({
    baseURL: 'https://reqres.in/api',
    timeout: 5000,
    headers: {'Content-Type': 'text/plain'},
    responseType: 'text'
  });

//example
export const User= async (username,password) =>{
    const response = await API_CALL.get("users")
    return response.data
}

//register
export const Register= async (username,password) =>{
    const response = await API_CALL.post("user",{username,password},{ responseType: 'arraybuffer' })
    let image = encode(
        new Uint8Array(response.data)
          .reduce((data, byte) => data + String.fromCharCode(byte), '')
      )
    return `data:${response.headers['content-type'].toLowerCase()};base64,${image}`;
    // return response.data
}




// async function test(){
//     return axios.get('http://www.freeiconspng.com/uploads/profile-icon-9.png', { responseType: 'arraybuffer' })
//       .then((response) => {
//         let image = encode(
//           new Uint8Array(response.data)
//             .reduce((data, byte) => data + String.fromCharCode(byte), '')
//         );
//         return `data:${response.headers['content-type'].toLowerCase()};base64,${image}`;
//       });
    
// }