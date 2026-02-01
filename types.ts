import React from 'react';

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ElementType;
  size: 'small' | 'medium' | 'large';
}

export enum UserType {
  HOSPITAL = 'HOSPITAL',
  SUPPLIER = 'SUPPLIER'
}