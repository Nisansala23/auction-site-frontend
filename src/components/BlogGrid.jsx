// src/components/BlogGrid.jsx

import React from 'react';
import './BlogGrid.css';

const blogPosts = [
  {
    id: 1,
    image: 'https://via.placeholder.com/600x400?text=Vintage+Vibes',
    category: 'DIGITAL ART',
    date: '23 January, 2024',
    title: 'Vintage Vibes: Stories Behind Antique Auction Finds',
    excerpt: 'Discover the hidden histories of rare antiques that crossed our auction block last season.',
    link: '/blog/vintage-vibes',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/600x400?text=Heritage+Hamer',
    category: 'ANTIQUES',
    date: '14 March, 2024',
    title: 'Heritage Hammer: Where History Meets the Auction Gavel',
    excerpt: 'How provenance transforms objects into priceless treasures — and how to spot them.',
    link: '/blog/heritage-hammer',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/600x400?text=Lens+Legacy',
    category: 'PHOTOGRAPHY',
    date: '20 April, 2024',
    title: 'Lens Legacy: Capturing Moments That Became Masterpieces',
    excerpt: 'From vintage cameras to iconic prints — explore photography’s auction evolution.',
    link: '/blog/lens-legacy',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/600x400?text=Jewelry+Journey',
    category: 'FINE JEWELRY',
    date: '5 May, 2024',
    title: 'The Jewelry Journey: From Heirloom to High Bid',
    excerpt: 'Follow the path of a diamond necklace from estate sale to record-breaking gavel fall.',
    link: '/blog/jewelry-journey',
  },
];

const BlogGrid = () => {
  return (
    <div className="blog-grid-container">
      <div className="section-header">
        <h2>Latest From Our Blog</h2>
        <p className="subtitle">Insights, stories, and tips from the world of auctions and collectibles.</p>
      </div>

      <div className="blog-grid">
        {blogPosts.map(post => (
          <article key={post.id} className="blog-card">
            <div className="blog-image-wrapper">
              <img src={post.image} alt={post.title} className="blog-image" />
              <span className="category-badge">{post.category}</span>
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <span className="blog-date"><i className="far fa-calendar"></i> {post.date}</span>
              </div>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <a href={post.link} className="read-more-link">
                Read More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Optional: Load More Button */}
      <div className="load-more-section">
        <button className="load-more-btn">Load More Articles</button>
      </div>
    </div>
  );
};

export default BlogGrid;