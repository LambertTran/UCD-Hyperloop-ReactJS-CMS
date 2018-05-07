/** Packages */
import React from 'react';
import Modal from 'react-modal';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/** Component */
import InputForm from '../../components/InputForm/InputForm';

/** Styles */
const modalStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)',
    zIndex            : '20',
  },
  content: {
    position              : 'absolute',
    width                 : '90%',
    top                   : '0',
    bottom                : '0',
    right                 : '0',
    left                  :'0',
    margin                :'auto',
    border                : '1px solid #303036',
    borderRadius          : '20px',
    height                : '80%',
    overflow              : 'auto',
    padding               : '0',
  },
};

export default class InputModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  handleOpenModal = () => {
    this.setState({ 
      isModalOpen: true,
    });
  }

  handleCloseModal = () => {
    // this.setState({ animation: 'fadeOutDown' }, this.closeModal);
    this.closeModal();
  }
  
  closeModal = () => {
    setTimeout(() => {
      this.setState({ isModalOpen: false }); 
    }, 300);
  }

  render() {
    return (
      <div>
        <button 
          className="btn btn-primary" 
          onClick={this.handleOpenModal}
        >
          {this.props.btnName}
        </button>
        <Modal
          onRequestClose={this.handleCloseModal}
          isOpen={this.state.isModalOpen}
          style={modalStyle}
          shouldFocusAfterRender={false}
          contentLabel="project modal"
        >
          <InputForm />
        </Modal>
      </div>
    )
  }
}