import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function BlogModal({ title, date, summary, author, handleClose, show}) {
  return (
    <>
    <Modal show={show} onHide={handleClose} title={title} date={date} summary={summary} author={author}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="text-muted">{date} by {author}</p>
                {summary}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
    </Modal>
    </>
  );
}

export default BlogModal;