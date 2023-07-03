import React, { useState } from "react";
import ReactDOM from 'react-dom';
import './lostform.css'
import { defaults } from "autoprefixer";
export function LostForm() {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [description, setDescription] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [itemDate, setItemDate] = useState("");
  const [itemLocation, setItemLocation] = useState("");
  const [itemTime, setItemTime] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div>
      <div className="main">
        <div className="form-container">
          <h2>LOST ITEM FORM</h2>
          <form id="lost-item-form">
            <label htmlFor="itemName">Item Name:</label>
            <input type="text" id="item-name" name="item-name" required value={itemName} onChange={e => setItemName(e.target.value)} />

            <label htmlFor="item-category">Item Category:</label>

            <select id="item-category" name="item-category" required style={{ width: '95%' }} value={itemCategory} onChange={e => setItemCategory(e.target.value)}>
              <option value="">Select a category</option>
              <option value="Electronics">Electronics(Phone/Laptop/Tablet/Earphone)</option>
              <option value="Clothing">Clothing(Cap/Others)</option>
              <option value="Jewelry">Jewelry(Ring/Necklace)</option>
              <option value="Books">Books(Notebooks/Textbooks/Others)</option>
              <option value="Other">Personal Belongings(Bag/Bottle/Wallet/Keys/Specs/Watch/Others)</option>
              <option value="Other">Other</option>
            </select>

            <label htmlFor="item-location">Location:</label>
            <input type="text" id="item-location" name="item-location" required value={itemLocation} onChange={e => setItemLocation(e.target.value)} />


            <label htmlFor="item-date">Date:</label>
            <input type="date" id="item-date" name="item-date" required value={itemDate} onChange={e => setItemDate(e.target.value)} />

            <label htmlFor="item-time">Time:</label>
            <input type="time" id="item-time" name="item-time" required value={itemTime} onChange={e => setItemTime(e.target.value)} />

            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" rows="5" required style={{ width: '95%' }} value={description} onChange={e => setDescription(e.target.value)}></textarea>

            <h2>YOUR INFORMATION</h2>

            <label htmlFor="contact-name">Your Name:</label>
            <input type="text" id="contact-name" name="contact-name" required value={contactName} onChange={e => setContactName(e.target.value)} />

            <label htmlFor="phone-number">Your Phone Number:</label>
            <input type="number" id="phone-number" name="phone-number" required value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />

            <label htmlFor="contact-email">Your Email:</label>
            <input type="email" id="contact-email" name="contact-email" required value={contactEmail} onChange={e => setContactEmail(e.target.value)} />
            <div className="sub">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// ReactDOM.render(<LostForm />, document.getElementById('root'));
export default LostForm

