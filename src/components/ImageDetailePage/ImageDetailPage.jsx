// src/components/ImageDetailPage.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allProducts } from '../../ImageData'; // Import the combined image data

const ImageDetailPage = () => {
  const { category, id } = useParams(); // Get the category and id from the URL
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Find the product based on the id
  // Note: 'category' could be used for more specific filtering if needed,
  // but 'id' should be unique across all products.
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Product Not Found</h2>
        <p>The product you are looking for does not exist.</p>
        <button onClick={() => navigate('/PoojaTech')} style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h1>{product.alt}</h1>
      <img
        src={product.src}
        alt={product.alt}
        style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px', border: '1px solid #ddd' }}
      />
      <p style={{ lineHeight: '1.6', fontSize: '1.1em' }}>{product.description}</p>
      <button onClick={() => navigate('/PoojaTech')} style={{ marginTop: '30px', padding: '10px 20px', cursor: 'pointer' }}>
        Back to Gallery
      </button>
    </div>
  );
};

export default ImageDetailPage;
