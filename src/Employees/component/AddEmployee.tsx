import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';

type Props = {
  visible: boolean;
  handleClose?: () => void;
  onSubmit: (data: any) => void;
};

export default function AddEmployee({ visible, handleClose, onSubmit }: Props) {
  const [state, setState] = useState({ name: '', email: '', position: '' });

  const setValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    setState({ ...state, [name]: e.target.value });
  };
  return (
    <Modal
      open={visible}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className="card">
        <h4 className="p-2">Add Employee</h4>
        <div className="form-group col-12">
          <label className="srch-icon"></label>
          <input
            type="text"
            id="name"
            className="form-control  srch-icon-space cus_srch"
            placeholder="Name here.."
            onChange={(e) => setValue(e)}
            name="name"
          />
        </div>
        <div className="form-group col-12">
          <label className="srch-icon"></label>
          <input
            type="text"
            id="email"
            className="form-control  srch-icon-space cus_srch"
            placeholder="Email here.."
            onChange={(e) => setValue(e)}
            name="email"
          />
        </div>
        <div className="form-group col-12">
          <label className="srch-icon"></label>
          <input
            type="text"
            id="name"
            className="form-control  srch-icon-space cus_srch"
            placeholder="Position.."
            onChange={(e) => setValue(e)}
            name="position"
          />
        </div>

        <button onClick={() => onSubmit(state)}>Submit</button>
      </div>
    </Modal>
  );
}
