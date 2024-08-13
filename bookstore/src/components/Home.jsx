import React, { useEffect } from "react";
import '../css/Home.css';


export default function Home() {
  
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-text">Book Store</h1>
        <p className="hero-desc">
          Welcome to Bookstore, where every book is a new journey waiting
          to unfold. We offer a carefully curated selection of titles across
          genres to fuel your imagination and inspire your curiosity.
        </p>
      </div>
      <div className="hero-image"></div>
    </div>
  );
}
