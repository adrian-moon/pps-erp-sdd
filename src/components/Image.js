import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Image({src, caption, alt}) {
  const processedPath = useBaseUrl(src);

  return (
    <figure style={{ 
      margin: '20px auto',
      maxWidth: 'fit-content', 
      border: 'none',
      borderRadius: '8px',
      backgroundColor: '#f5f6f8ff', /* The "Frame" color */
      padding: '15px',           /* PADDING ALL AROUND */
      display: 'table',          /* Ensures the box shrinks to the image width */
    }}>
      <div style={{ backgroundColor: '#fff', borderRadius: '4px', overflow: 'hidden', border: '1px solid #d0d7de' }}>
        <img 
          src={processedPath} 
          alt={alt || caption || "Image"} 
          style={{ 
            display: 'block',
            maxWidth: '100%',
            height: 'auto'
          }} 
        />
      </div>
      {caption && (
        <figcaption style={{ 
          paddingTop: '12px',      /* Space between image and text */
          fontSize: '0.85em',
          color: '#57606a',
          textAlign: 'center',
          lineHeight: '1.4',
          fontStyle: 'italic',
          maxWidth: '100%'
        }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}