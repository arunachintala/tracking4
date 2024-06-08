
import React from 'react';
import VerticalStepper from '../Stepper/VerticalStepper';
import './Deliverydetails.css';

function Deliverydetails() {
    return (
        <div className="deliverydetails-container">
            <div className="deliverydetails-header">
                <div className="deliverydetails-date">
                    <p className="deliverydetails-date-text">May 16, 2024</p>
                </div>
            </div>
            <div className="deliverydetails-body">
                <VerticalStepper />
            </div>
            <div className="deliverydetails-footer">
                <p className="deliverydetails-footer-text">May 15, 2024</p>
            </div>
        </div>
    );
}


export default Deliverydetails;
