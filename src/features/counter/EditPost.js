import React, {  useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import {  editPost } from './postsSlice';

const EditPost = (props) => {
    const {showEditModal, setShowEditModal,updateData}=props
    const handleClose = () => setShowEditModal(false);
    const [data,setData] =useState(updateData)
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
      
            setData({
                ...data,
                title:  data.title,
                body:  data.body,
            })


            dispatch(editPost(data))
            setShowEditModal(false)
            alert("Post Edited successfully")
        }
    }

   
  return (
    <div>
         <Modal
        show={showEditModal}
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
        <Form.Control type="text" placeholder="Title" value={data.title} onChange={handleTitle} />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        {/* <Form.Label>Password</Form.Label> */}
        <Form.Control type="text" placeholder="Body" value={data.body}  onChange={handleBody}/>
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

export default EditPost