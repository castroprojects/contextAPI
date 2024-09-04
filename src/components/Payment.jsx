import React from "react";

const PaymentPage = () => {
    return (
        <div className="cont">
    <div className="card">
      <div className="card-image">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
          alt="Card Image"
          id="card-image"
        />
      </div>
      <div className="card-content">
        <h2>Secure Payment</h2>
        <form>
          <div className="input-group">
            <label htmlFor="cardholder">Cardholder Name</label>
            <input type="text" id="cardholder" placeholder="John Doe" />
          </div>
          <div className="input-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              placeholder="1234 5678 9012 3456"
              oninput="updateCardImage()"
            />
          </div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input type="text" id="expiryDate" placeholder="MM/YY" />
            </div>
            <div className="input-group">
              <label htmlFor="cvc">CVC</label>
              <input type="text" id="cvc" placeholder={123} />
            </div>
          </div>
          <button className="newButton" type="submit">Pay Now</button>
        </form>
      </div>
    </div>
  </div>
    );
  };
  
  export default PaymentPage;