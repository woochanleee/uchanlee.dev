import React, { useCallback, useEffect, useRef } from 'react';
import styled from '@emotion/styled';

export interface CategoryItem {
  category: string;
  onClick: (value: string) => void;
  title: string;
  count: number;
  scrollToCenter: (ref: React.MutableRefObject<HTMLLIElement>) => void;
}

const Item: React.FC<CategoryItem> = ({
  category,
  onClick,
  title,
  count,
  scrollToCenter,
}) => {
  const tabRef = useRef<HTMLLIElement>(null);

  const handleClick = useCallback(() => {
    scrollToCenter(tabRef);
    onClick(title);
  }, []);

  useEffect(() => {
    if (category === title) {
      scrollToCenter(tabRef);
    }
  }, [category, tabRef]);

  return (
    <Wrapper
      ref={tabRef}
      className={`item ${category === title ? 'active' : ''}`}
      onClick={handleClick}
    >
      {title} <span>({count})</span>
    </Wrapper>
  );
};

export default Item;

const Wrapper = styled.li`
  border-width: 1px;
  border-style: solid;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  display: inline-block;
  margin: 1px 6px 1px 0;
  border-radius: 15px;
  box-sizing: border-box;
  cursor: pointer;
  padding: 14px 16px 16px 16px;
  font-size: 13px;
  box-sizing: border-box;

  &.active {
    border-width: 2px;
    border-style: solid;
    font-weight: bolder;
  }

  > span {
    opacity: 0.5;
    font-weight: normal;
  }
`;
