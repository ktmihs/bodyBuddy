import { useRef } from 'react';
import { StyledItemGroup } from './styledItemGroup';

export const ItemGroup = ({ changeSelectedItem }: ItemGroupProps) => {
  const items = useRef<any[]>([]);

  const onClickChangeItem = (e: React.SyntheticEvent<EventTarget>): void => {
    const { target } = e;
    if (!(target instanceof HTMLLIElement)) return;
    changeSelectedItem(target.dataset.index as string);
    items.current.forEach((item) => {
      item.className = target.dataset.index === item.dataset.index ? item.className + 'active' : '';
    });
  };

  return (
    <StyledItemGroup>
      <ul onClick={(e) => onClickChangeItem(e)}>
        <li data-index="0" ref={(e) => (items.current[0] = e)}>
          PT
        </li>
        <li data-index="1" ref={(e) => (items.current[1] = e)}>
          요가
        </li>
        <li data-index="2" ref={(e) => (items.current[2] = e)}>
          필라테스
        </li>
        <li data-index="3" ref={(e) => (items.current[3] = e)}>
          발레
        </li>
      </ul>
    </StyledItemGroup>
  );
};
