function Posts () {
    const myData = localStorage.getItem('postData');
    return (
        <div>
            <h2>My dataa : {myData.length}</h2>
        </div>
    )
}