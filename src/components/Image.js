import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Image({src, caption, alt}) {
  const processedPath = useBaseUrl(src);

  return (
    <figure style={{ 
      margin: '20px auto',
      maxWidth: 'fit-content', 
      border: '1px solid #d0d7de',
      borderRadius: '8px',
      backgroundColor: '#f8f8f9ff', 
      padding: '15px', 
      display: 'table',
    }}>
      <div style={{ 
        backgroundColor: '#fff', 
        borderRadius: '4px', 
        overflow: 'hidden', 
        border: 'none'
      }}>
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
          paddingTop: '12px',
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