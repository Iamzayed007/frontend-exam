import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import AddPost from './AddPost';
import EditPost from './EditPost';
import { fetchData,deleteData} from './postsSlice';

const Posts = () => {
  const allPost = useSelector(state=>state.post.allData);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [updateData, setUpdateData] = useState({});
    const dispatch = useDispatch();

    const handleShow = () => setShowAddModal(true);
    const handleEdit = (id) =>{
    let data =  allPost.find(d=> d.id == id )
      setUpdateData(data)
      setShowEditModal(true)
     
    }
  
    useEffect(() => {
  
      dispatch(fetchData('https://jsonplaceholder.typicode.com/posts'))
      
    }, [])

    
  return (
    <div >
    <div className='text-center my-4'>
       <button onClick={handleShow}
      className="btn btn-primary text-center"
      >Add</button>
      </div> 
        <Row>
        {
          allPost ? allPost.map(post=><Col key={post.id} className='mx-2 my-2'>
          <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>
        {post.body}
        </Card.Text>
        <Button variant="primary" className='mx-2' onClick={()=>handleEdit(post.id)}>Edit</Button>
        <Button variant="danger" onClick={()=>dispatch(deleteData(post.id)) }>Delete</Button>
      </Card.Body>
    </Card>
  
          </Col>
          
          ): <p>loading</p>
        }
        </Row>
   
       {
        showAddModal && <AddPost showAddModal={showAddModal} setShowAddModal={setShowAddModal}/>
       }
        {
        showEditModal && <EditPost updateData={updateData}  showEditModal={showEditModal} setShowEditModal={setShowEditModal}/>
       }
    </div>
  )
}

export default Posts