import React from 'react';

export interface ServiceFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export enum AnalysisStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface KeywordResult {
  keyword: string;
  difficulty: string;
  volume: string;
}