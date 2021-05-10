import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal({ isShowModal, openModal, closeModal, selected}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [id, setId] = React.useState(selected.id)
  const [title, setTitle] = React.useState(selected.title)
  const [bodyValue, setBodyValue] = React.useState(selected.body)

  const handleOpen = () => {
    openModal();
  };

  const handleClose = () => {
    closeModal();
  };

  const onTitleChange = (e) => {
    console.log(e.target.value)
    setTitle(e.target.value)
  }

  React.useEffect(() => {
    setId(selected.id)
    setTitle(selected.title)
    setBodyValue(selected.body)
  }, [selected])

  console.log('selevted : ', selected)
  console.log('title : ', title)

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Update User</h2>
      <p id="simple-modal-description">
        ID : {selected.id}
      </p>
      <p id="simple-modal-description">
        Title : {selected.title}
      </p>
      <input type='text' onChange={onTitleChange} defaultValue={title}/>
      <p id="simple-modal-description">
        Body : {selected.body}
      </p>
      <textarea onChange={e => setBodyValue(e.target.value)} defaultValue={bodyValue}></textarea>
    </div>
  );

  return (
    <Modal
        open={isShowModal}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
    >
    {body}
  </Modal>
  );
}