import Modal from "react-modal";
Modal.setAppElement("#root");

const ImageModal = ({ isModalOpen, closeModal, selectedImage }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      style={{
        content: {
          maxWidth: "80%",
          maxHeight: "80%",
          margin: "auto",
        },
      }}
    >
      {selectedImage && <img src={selectedImage} alt="Selected" />}
    </Modal>
  );
};

export default ImageModal;
