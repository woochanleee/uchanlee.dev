import { useCallback, useEffect, useState } from 'react';
import qs from 'query-string';

import * as ScrollManager from '../utils/scroll';

const DEST_POS = 333;

const useCategory = (): [string, (value: string) => void] => {
  if (typeof window === 'undefined') return ['', (value) => {}];

  const [category, setCategory] = useState('All');
  const locationChangeHandler = useCallback(() => {
    const { category } = qs.parse(location.search);
    const target =
      category != null
        ? typeof category === 'object'
          ? category[0]
          : category
        : 'All';
    setCategory(target);
  }, []);

  const changeCategory = useCallback((category: string) => {
    setCategory(category);
    window.history.pushState(
      { category },
      '',
      `${window.location.pathname}?${qs.stringify({ category })}`
    );
    if (DEST_POS <= window.scrollY) {
      window.scrollTo({ top: DEST_POS, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    ScrollManager.init();
    return () => {
      ScrollManager.destroy();
    };
  }, []);

  useEffect(() => {
    locationChangeHandler();
  }, [location.search]);

  return [category, changeCategory];
};

export default useCategory;
