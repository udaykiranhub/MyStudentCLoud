import React, { useState } from 'react';
import { Modal, Button, FormControl } from 'react-bootstrap';

function SearchModal() {
  const [show, setShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSearch = () => {
    // Implement your search logic here with searchQuery
    console.log("Searching for:", searchQuery);
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch search modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Search</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            type="text"
            placeholder="Enter search query"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSearch}>
            Search
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SearchModal;
