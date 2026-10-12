"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ModalOptions {
  source?: string;
  defaultDegree?: string;
}

interface ApplyModalContextType {
  isOpen: boolean;
  options: ModalOptions;
  openModal: (options?: ModalOptions) => void;
  closeModal: () => void;
}

const ApplyModalContext = createContext<ApplyModalContextType | undefined>(undefined);

export const ApplyModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<ModalOptions>({});

  const openModal = (opts?: ModalOptions) => {
    setOptions(opts || {});
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Support global custom event so any non-React script or raw link can trigger it
  useEffect(() => {
    const handleTrigger = (e: Event) => {
      const customEvent = e as CustomEvent<ModalOptions>;
      openModal(customEvent.detail);
    };

    window.addEventListener('open-apply-modal', handleTrigger);
    return () => {
      window.removeEventListener('open-apply-modal', handleTrigger);
    };
  }, []);

  return (
    <ApplyModalContext.Provider value={{ isOpen, options, openModal, closeModal }}>
      {children}
    </ApplyModalContext.Provider>
  );
};

export const useApplyModal = () => {
  const context = useContext(ApplyModalContext);
  if (!context) {
    return {
      isOpen: false,
      options: {},
      openModal: () => {},
      closeModal: () => {},
    };
  }
  return context;
};
