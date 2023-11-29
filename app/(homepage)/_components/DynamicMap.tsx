import { cn } from '@/lib/utils';
import React from 'react';
import { MapContainer } from 'react-leaflet';

interface Props {
  children: React.ReactNode;
  className?: string;
  width?: number;
  height?: number;
}

export default function DynamicMap({
  children,
  className,
  width,
  height,
}: Props) {
  return (
    <MapContainer className={cn('w-full h-full', className)}>
      {children}
    </MapContainer>
  );
}
