"use client";

import { useState } from 'react';
import Hero from '@/components/sections/Hero';

export default function Home() {
  const handleScrollDown = () => {
    // Keep the handler to prevent errors, even if it does nothing
  };

  return (
    <>
      <Hero onScrollDown={handleScrollDown} />
    </>
  );
}
