// import axios, { AxiosResponse } from 'axios' -- you get red squigly lines 
import axios from 'axios'
import type { AxiosResponse } from 'axios' // this is how you import type-only import

// this is how you define data type jo bhi web req se data type aane wala hai ya data send karne wale ho 
// -- dono ki object ki definition define karte ho or structure 
interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

// axios.get('https://jsonplaceholder.typicode.com/todos/1')
//     .then(res => {
//         console.log(res.data);
//     })

/** 
 {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
}
*/

const fetchData = async () => {
    try {
        const response: AxiosResponse<Todo> = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        console.log("TODO: ", response.data) // see suggestion 
    } 
    catch (error: any) {

        // console.log("Error: ", error.message) //isme koi suggestion nahi milenge so we follow more better approach: destructure

        if (axios.isAxiosError(error)) {
            console.log("Axios Error: ", error.message)
            if(error.response){
                console.log("Status: ", error.response.status)
            }
        }


    }
}
