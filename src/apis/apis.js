import axios from "axios";

export const baseURL='https://jsonplaceholder.typicode.com/posts';


const apis= {
   
    async fetchData (){
        const response=await axios.get('https://jsonplaceholder.typicode.com/posts')
        // console.log(response);
        return response;

    },
    async deleteData (id){
        const response=await axios.delete(`${baseURL}/${id}`)
        console.log(response);
        return response;

    },
    async UpdateData (id,data){
        console.log({data});
        const response=await axios.delete(`${baseURL}/${id}`,data)
        console.log(response);
        return response;

    },
    async addData (data){
        console.log({data});
        const response=await axios.delete(`${baseURL}`,data)
        console.log(response);
        return response;

    }

};

export const {fetchData, deleteData, UpdateData, addData} = apis;
export default apis;