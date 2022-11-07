function SinglePost({p}){
    const {id, title, body} = p;
    const handleRemove = id => {
        console.log('remove', id);
        localStorage.removeItem(id)
        console.log('removed successfull', id)
        // localStorage.clear(id);
        localStorage.removeItem(id);
    }
    const handleEdit = id => {
        console.log('edit', id)
        // localStorage.setItem(id + 12)
        const edit = localStorage.getItem(id.title);
        console.log(edit);
        edit.title = "hello webapick";
        console.log('hello',edit)
    }

    const handleClear = () => {
        localStorage.clear();
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{body}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handleRemove(id)} className="btn bg-yellow-300">Remove</button>
      <button onClick={()=>handleEdit(id)} className="btn btn-primary">Edit</button>
      <button onClick={()=>handleClear(id)} className="btn bg-red-700">Clear</button>
    </div>
  </div>
</div>
    )
}

export default SinglePost;