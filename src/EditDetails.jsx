import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import propTypes from 'prop-types'


class EditDetails extends Component {
   static propTypes = null
   state = {
      showModal: false,
      myState:{
         id: this.props.myState.id,
         name: this.props.myState.name,
         email: this.props.myState.email,
         contact: this.props.myState.contact
      }
   }

   handleShowModal = () => {
      this.setState({ showModal: true });
    };
  
    handleCloseModal = () => {
      this.setState({ showModal: false });
    };


   render() {
      return (
         <>
            <Button onClick={this.handleShowModal}>
            Edit
            </Button>
   
            <Modal
            show={this.state.showModal}
            onHide={this.handleClose}
            backdrop="static"
            keyboard={false}
            >
               <Modal.Header>
                  <Modal.Title>Edit User</Modal.Title>
               </Modal.Header>
               <Modal.Body>
               <Form
                id={this.state.myState.id} onSubmit={this.props.handleSave}>
                     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                     <Form.Label>Name</Form.Label>
                     <Form.Control
                        type="text"
                        defaultValue={this.props.myState.name}
                        autoFocus
                        required
                        name='name'
                     />
                     <Form.Label>Email</Form.Label>
                     <Form.Control
                        type="text"
                        defaultValue={this.props.myState.email}
                        autoFocus
                        required
                        name='email'
                     />
                     <Form.Label>Contact</Form.Label>
                     <Form.Control
                        type="number"
                        defaultValue={this.props.myState.contact}
                        autoFocus
                        required
                        name='contact'
                     />
                     </Form.Group>
                     <Button>Save</Button>
                  </Form>
               </Modal.Body>
               <Modal.Footer>
                  <Button variant="danger" onClick={this.handleCloseModal}>
                     Close
                  </Button>
               </Modal.Footer>
            </Modal>
         </>
     )
   }
}



export default EditDetails;
