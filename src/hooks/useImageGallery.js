import { useState, useCallback } from 'react';

export function useImageGallery(initialIndex = 0) {
  const [activeImageIndex, setActiveImageIndex] = useState(initialIndex);
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);
  const [zoomStyle, setZoomStyle] = useState({ show: false, x: "50%", y: "50%" });

  // Handle the inline magnifier effect
  const handleMouseMove = useCallback((e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setZoomStyle({ show: true, x: `${x}%`, y: `${y}%` });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setZoomStyle(prev => ({ ...prev, show: false }));
  }, []);

  const handleMouseEnter = useCallback((e) => {
    // Pre-calculate position so it doesn't jump from 0,0 when fading in
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setZoomStyle({ show: true, x: `${x}%`, y: `${y}%` });
  }, []);

  return {
    activeImageIndex,
    setActiveImageIndex,
    isZoomModalOpen,
    setIsZoomModalOpen,
    zoomStyle,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      onMouseEnter: handleMouseEnter,
    }
  };
}
