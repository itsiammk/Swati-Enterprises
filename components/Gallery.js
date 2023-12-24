// components/Gallery.js

import { useState } from 'react';
import styles from '../styles/Gallery.module.css';
import { useDashboard } from '@/pages/DashboardProvider';

const Gallery = ({}) => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const {theme, setTheme} = useDashboard()

  const mediaList = [
    {
      type: 'image',
      src: '/img1.jfif',
      alt: 'Image 1',
    },
    {
      type: 'image',
      src: '/img2.jfif',
      alt: 'Image 1',
    },
    {
      type: 'image',
      src: '/img3.jfif',
      alt: 'Image 1',
    },
    {
      type: 'image',
      src: '/img4.jfif',
      alt: 'Image 1',
    },
    {
      type: 'image',
      src: '/img5.jfif',
      alt: 'Image 1',
    },
    {
      type: 'image',
      src: '/img1.png',
      alt: 'Image 1',
    },
    {
      type: 'image',
      src: '/img1.png',
      alt: 'Image 1',
    },
    {
      type: 'image',
      src: '/img1.png',
      alt: 'Image 1',
    },
    // Add more image items as needed
    {
      type: 'video',
      src: '/vid1.mp4',
      alt: 'Video 1',
    },
    {
      type: 'video',
      src: '/vid1.mp4',
      alt: 'Video 1',
    },
    {
      type: 'video',
      src: '/vid1.mp4',
      alt: 'Video 1',
    },
    {
      type: 'video',
      src: '/vid1.mp4',
      alt: 'Video 1',
    },
    {
      type: 'video',
      src: '/vid1.mp4',
      alt: 'Video 1',
    },
    {
      type: 'video',
      src: '/vid1.mp4',
      alt: 'Video 1',
    },
    {
      type: 'video',
      src: '/vid1.mp4',
      alt: 'Video 2',
    },
    {
      type: 'video',
      src: '/vid1.mp4',
      alt: 'Video 3',
    },
    {
      type: 'video',
      src: '/vid1.mp4',
      alt: 'Video 4',
    },
    // Add more video items as needed
  ];

  const openMedia = (media) => {
    setSelectedMedia(media);
  };

  const closeMedia = () => {
    setSelectedMedia(null);
  };

  // Create rows with 4 items each
  const rows = [];
  for (let i = 0; i < mediaList.length; i += 4) {
    const rowItems = mediaList.slice(i, i + 4);
    rows.push(rowItems);
  }

  return (
    <>
      <div className={`${styles.title} ${theme && styles.containerTitle}`}>
        <h1>GALLERY</h1>
        <p>Images and Videos</p>
      </div>
    <div className={`${styles.gallery} ${theme && styles.containerGallery}`}>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.mediaRow}>
          {row.map((media, index) => (
            <div key={index} className={styles.mediaItem} onClick={() => openMedia(media)}>
              {media.type === 'image' ? (
                <div className={`${styles.image} ${theme && styles.containerImage}`}>
                  <img src={media.src} alt={media.alt} layout="responsive" width={400} height={300} />
                </div>
              ) : (
                <div className={`${styles.video}  ${theme && styles.containerVideo}`}>
                  <video controls>
                    <source src={media.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
      {selectedMedia && (
        <div className={styles.mediaFullView}>
          <div className={styles.mediaContent}>
            {selectedMedia.type === 'image' ? (
              <img
                src={selectedMedia.src}
                alt={selectedMedia.alt}
                layout="responsive"
                width={800}
                height={600}
              />
            ) : (
              <video controls width={800} height={600}>
                <source src={selectedMedia.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          <div className={styles.closeButton} onClick={closeMedia}>
            &#10006; Close
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Gallery;
