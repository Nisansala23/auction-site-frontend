// src/components/AuctionItem.jsx
import React from 'react';
import './AuctionItem.css';

const AuctionItem = ({ image, status, lotNumber, title, currentBid, actionText }) => {
  return (
    <div className="auction-item">
      <div className="image-container">
        <img src={image} alt={title} className="item-image" />
        <span className={`status-tag ${status.toLowerCase()}`}>{status}</span>
        <span className="lot-number">Lot #{lotNumber}</span>
      </div>

      <div className="timer-container">
        <div className="timer-box">
          <div className="timer-value">00</div>
          <div className="timer-label">Days</div>
        </div>
        <div className="timer-box">
          <div className="timer-value">00</div>
          <div className="timer-label">Hours</div>
        </div>
        <div className="timer-box">
          <div className="timer-value">00</div>
          <div className="timer-label">Min</div>
        </div>
        <div className="timer-box">
          <div className="timer-value">00</div>
          <div className="timer-label">Sec</div>
        </div>
      </div>

      <h3 className="item-title">{title}</h3>
      <div className="bid-info">
        <p className="current-bid-label">Current Bid at:</p>
        <p className="current-bid-value">{currentBid}</p>
        <button className="bid-button">{actionText}</button>
      </div>
    </div>
  );
};

export default AuctionItem;