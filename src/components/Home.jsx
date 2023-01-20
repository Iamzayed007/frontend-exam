import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchData, deleteData, UpdateData } from "../apis/apis";


const Home = () => {

    const { data, isLoading:dataIsLoading } = useQuery(['/get-post'], fetchData);
    // console.log(data);

    const {mutateAsync:deletePost,isLoading,isSuccess}=useMutation(['/delete-post'],(data)=>deleteData(data));
 
    const {mutateAsync:updatePost,}=useMutation([],(data)=>(UpdateData(data)))

const handleDeleteData= async(id)=>{
    console.log({click: id});
    const response= await deletePost(id)

}

const handleUpdateData= async (id)=>{
    console.log({click: id});
    const response= await deletePost(id)

}

    return (
        <div className="container mx-auto">
            <h5>Home Page</h5>

            <div className="space-y-2">
                {data?.data.map(item =>
                    <div key={item?.id} className="grid grid-cols-4 gap-4 bg-blue-200">
                        <div>{item.id}</div>
                        <div className="w-full">{item.title}</div>
                        <div><button onClick={()=>handleUpdateData(item?.id)}  className="bg-green-500" type="button">Update</button></div>
                        <div><button onClick={()=>handleDeleteData(item?.id)} className="bg-red-500" type="button">Delete</button></div>
                    </div>

                )}

            </div>




            <p></p>

        </div>



    );
}

export default Home;