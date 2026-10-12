"use client";

import React from 'react';
import { useApplyModal } from './ApplyModalContext';

interface ApplyNowButtonProps {
  className?: string;
  source?: string;
  defaultDegree?: string;
  children?: React.ReactNode;
  id?: string;
}

export const ApplyNowButton: React.FC<ApplyNowButtonProps> = ({
  className,
  source = 'Apply Button',
  defaultDegree,
  children = 'Apply Now',
  id,
}) => {
  const { openModal } = useApplyModal();

  return (
    <button
      type="button"
      id={id}
      onClick={() => openModal({ source, defaultDegree })}
      className={className}
    >
      {children}
    </button>
  );
};

export default ApplyNowButton;
