import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
  colSpan?: number; // For Bento grid layout
}

export interface YieldData {
  asset: string;
  apy: string;
  protocol: string;
}

export interface StepItem {
  title: string;
  description: string;
}