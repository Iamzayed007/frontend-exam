import React, {  useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addPost } from './postsSlice';

const AddPost = (props) => {
    const {showAddModal, setShowAddModal}=props
    const handleClose = () => setShowAddModal(false);
    const [data,setData] =useState({})
    const dispatch = useDispatch();


    const handleTitle =(e)=>{
        setData({
            ...data,
            title: e.target.value
        })
    }
    const handleBody =(e)=>{
        setData({
            ...data,
            body: e.target.value
        })
    }
    const handleSubmit =()=>{
      
        if(data.title && data.body){
            let  id =  Math.ceil(Math.random() * 1000+100)
              data.id=id
            dispatch(addPost(data))
            setShowAddModal(false)
            alert("Post added successfully")
        }
    }

   
  return (
    <div>
         <Modal
        show={showAddModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control type="text" placeholder="Title" required onChange={handleTitle} />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        {/* <Form.Label>Password</Form.Label> */}
        <Form.Control type="text" placeholder="Body" required  onChange={handleBody}/>
      </Form.Group>
      <Button variant="primary"  onClick={handleSubmit}>
        Save
      </Button>
      <Button variant="secondary" onClick={handleClose} className="mx-2">
            Close
          </Button>
    </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default AddPost