import React, { useCallback, useRef } from 'react';
import styled from '@emotion/styled';

import Item, { CategoryItem } from './item';

interface Props {
  category: string;
  changeCategory: (value: string) => void;
  categories: Array<{
    title: string;
    count: number;
  }>;
}

const Category: React.FC<Props> = ({
  category,
  changeCategory,
  categories,
}) => {
  const containerRef = useRef<HTMLUListElement>(null);

  const scrollToCenter = useCallback(
    (tabRef) => {
      const { offsetWidth: tabWidth } = tabRef.current;
      const { scrollLeft, offsetWidth: containerWidth } = containerRef.current;
      const tabLeft = tabRef.current.getBoundingClientRect().left;
      const containerLeft = containerRef.current.getBoundingClientRect().left;
      const refineLeft = tabLeft - containerLeft;
      const targetScollX =
        scrollLeft + refineLeft - containerWidth / 2 + tabWidth / 2;

      containerRef.current.scroll({
        left: targetScollX,
        top: 0,
        behavior: 'smooth',
      });
    },
    [containerRef]
  );

  return (
    <Wrapper ref={containerRef} className="category">
      <Item
        category={category}
        onClick={changeCategory}
        title={'All'}
        count={categories.reduce((prev, { count }) => prev + count, 0)}
        scrollToCenter={scrollToCenter}
      />
      {categories.map(({ title, count }) => (
        <Item
          category={category}
          onClick={changeCategory}
          key={title}
          title={title}
          count={count}
          scrollToCenter={scrollToCenter}
        />
      ))}
    </Wrapper>
  );
};

export default Category;

const Wrapper = styled.ul`
  margin: 30px -19.5px 0;
  border-style: solid;
  border-width: 1px 6px;
  position: sticky;
  position: -webkit-sticky;
  top: 8px;
  line-height: 0;
  white-space: nowrap;
  overflow-x: scroll;
  -ms-overflow-style: none; // IE 10+
  overflow: -moz-scrollbars-none; // Firefox
  -ms-overflow-style: none; // IE에서 스크롤바 감춤
  &::-webkit-scrollbar {
    display: none;
  }
  z-index: 1;
  padding: 6px 20px;
`;
