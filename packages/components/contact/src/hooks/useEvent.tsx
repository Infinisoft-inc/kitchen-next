/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { useEffect } from 'react';

/**
 *  Subscribe to event and unsubscribe
 * @param name      Event name
 * @param handler   Event handler
 */
export const useEvent = (
  name: string,
  handler: (e: Event) => void
) => {
  useEffect(() => {
    window.addEventListener(name, handler);
    return () => window.removeEventListener(name, handler);
  }, []);
};

