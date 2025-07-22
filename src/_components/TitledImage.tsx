import React from 'react';
import styles from './TitledImage.module.css';

interface TitledImageProps {
  src: string;
  alt?: string;
  title: string;
  className?: string;
}

export const TitledImage: React.FC<TitledImageProps> = ({
  src,
  alt = '',
  title,
  className = '',
}) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div className={styles.inner}>
        <img src={src} alt={alt} className={styles.image} />
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
};
