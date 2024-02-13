import React from 'react';
import Modal from 'react-modal';
import "./modalComponent.css"
import { MdArrowDropDown } from 'react-icons/md';

const ModalComponent = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <div>
      <div className="mainContainer">
  <div className="cardHolder">
    <div className="header">
      <div className="heading center">Invest</div>
      <div className="stepHeading center">Payment Method</div>
      <div className="card">
       
        <div className="middle part">
          <div className="infoheader vcenter">CARD NUMBER</div>
          <div className="infocontent number vcenter">
          <input className="meh"placeholder='**** **** 4658 ****'type='number'/>
            
          </div>
          
        </div>
        <div className="bottom part wewe">
          <div className="holderInfo">
             <div className="infoheader vcenter ">CARD HOLDER</div>
             <input className="meh" placeholder='Your Name '/>
          </div>
          <div className="expDate">
            <div className="infoheader vcenter">EXP. DATE</div>
            <input className="meh" placeholder='**/****'/>
          </div>
          <div className="expDate">
            <div className="infoheader vcenter">CSC/CVC/CCV</div>
            <input className="meh" placeholder='***'/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="status vcenter"> <i className="fa fa-check" aria-hidden="true"></i>
    Option : Credit/Debit Card
  </div>
  
  <div className="payment vcenter">
    <div className="amount">
      <div className="infoheader vcenter">Your Amount</div>
      <div className="infocontent val vcenter">
      <input className='payy'placeholder='DH' type='number'/>
      </div>
    </div>
    <div className="button center">PAY</div>
  </div>
</div>
      </div>
        <button className="fermer" onClick={onClose}>Close</button>
    </Modal>
  );
};

export default ModalComponent;
