import React from "react";
import { Modal, Button } from "react-bootstrap";

function UserModal({ show, user, onHide }) {
  if (!user) return null;

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>User Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={user.avatar} alt={user.name} className="user-avatar-large" />
        <h5>{user.name}</h5>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UserModal;
