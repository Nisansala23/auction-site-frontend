// src/components/AuctionGrid.jsx
import React from 'react';
import AuctionItem from './AuctionItem';
import './AuctionGrid.css';

// Placeholder data to populate the grid
const auctionItems = [
  {
    image: 'src/Images/PorcelainVase.jpg',
    status: 'Live',
    lotNumber: '25896742',
    title: 'Velocity visions performance meets precision.',
    currentBid: '$2,898',
    actionText: 'Bid Now'
  },
  {
    image: 'src/Images/antique-6.webp',
    status: 'Upcoming',
    lotNumber: '25896742',
    title: '19th century chines antique porcelain vase.',
    currentBid: '$4,648',
    actionText: 'Bid Now'
  },
  {
    image: 'src/Images/antique.avif',
    status: 'Upcoming',
    lotNumber: '25896742',
    title: 'Art decorat bronze sculpture antique pot.',
    currentBid: '$8,974',
    actionText: 'Notify Me'
  },
  {
    image: 'src/Images/SilverClock.jpg',
    status: 'Live',
    lotNumber: '25896742',
    title: 'Neo-classical marble busting rustic farmhouse.',
    currentBid: '$5,237',
    actionText: 'Bid Now'
  },
  {
    image: 'src/Images/pots.webp',
    status: 'Live',
    lotNumber: '25896742',
    title: 'Neo-classical marble busting rustic farmhouse.',
    currentBid: '$5,237',
    actionText: 'Bid Now'
  },
  {
    image: 'src/Images/ring.webp',
    status: 'Live',
    lotNumber: '25896742',
    title: 'Gold Ring Diamond ',
    currentBid: '$5,237',
    actionText: 'Bid Now'
  },
  {
    image: 'src/Images/chandalier.jpg',
    status: 'Live',
    lotNumber: '25896742',
    title: ' Brass and Crystal Chandelier',
    currentBid: '$5,237',
    actionText: 'Bid Now'
  },
  {
    image: 'src/Images/table.jpg',
    status: 'Live',
    lotNumber: '25896742',
    title: 'Antique Table',
    currentBid: '$5,237',
    actionText: 'Bid Now'
  },
  {
    image: 'src/Images/clock.jpg',
    status: 'Live',
    lotNumber: '25896742',
    title: 'Neo-classical marble busting rustic farmhouse.',
    currentBid: '$5,237',
    actionText: 'Bid Now'
  },
   {
    image: 'src/Images/chandalier.jpg',
    status: 'Live',
    lotNumber: '25896742',
    title: ' Brass and Crystal Chandelier',
    currentBid: '$5,237',
    actionText: 'Bid Now'
  },
   {
    image: 'src/Images/chandalier.jpg',
    status: 'Live',
    lotNumber: '25896742',
    title: ' Brass and Crystal Chandelier',
    currentBid: '$5,237',
    actionText: 'Bid Now'
  },
   {
    image: 'src/Images/chandalier.jpg',
    status: 'Live',
    lotNumber: '25896742',
    title: ' Brass and Crystal Chandelier',
    currentBid: '$5,237',
    actionText: 'Bid Now'
  },
];

const AuctionGrid = () => {
  return (
    <div className="auction-grid-container">
      {auctionItems.map((item, index) => (
        <AuctionItem
          key={index}
          image={item.image}
          status={item.status}
          lotNumber={item.lotNumber}
          title={item.title}
          currentBid={item.currentBid}
          actionText={item.actionText}
        />
      ))}
    </div>
  );
};

export default AuctionGrid;