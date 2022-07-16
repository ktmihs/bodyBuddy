import { useRef } from 'react';
import { StyledItemGroup } from './styledItemGroup';
import { field } from '@data';
export const ItemGroup = ({ changeSelectedItem }: ItemGroupProps) => {
  const items = useRef<any[]>([]);

  const onClickChangeItem = (e: React.SyntheticEvent<HTMLUListElement>): void => {
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
        {field.map((item, index) => (
          <li
            key={index}
            data-index={index}
            className={!index ? 'active' : ''}
            ref={(e) => (items.current[+index] = e)}
          >
            {item}
          </li>
        ))}
      </ul>
    </StyledItemGroup>
  );
};
