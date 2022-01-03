import { useState } from 'react';
import { Container } from './container';
import { BaseText } from './baseText';
import { SidebarToggler } from './sidebarToggler';
import className from 'classnames';

export const SideButton = ({ label, left }) => {
  const [isOpenLeft, setIsOpenLeft] = useState(true);
  const [isOpenRight, setIsOpenRight] = useState(true);
  const [openLeftSidebar, setOpenLeftSidebar] = useState(false);
  const [openRightSidebar, setOpenRightSidebar] = useState(false);

  const leftButtonClassName = className(
    isOpenLeft
      ? 'rotate-0 origin-left transition-transform'
      : 'rotate-90 origin-left transition-transform',
    'flex-row-reverse left-16',
    'flex items-center h-full justify-end',
    'fixed top-50% gap-4',
  );

  const rightButtonClassName = className(
    isOpenRight
      ? 'rotate-0 origin-right transition-transform'
      : '-rotate-90 origin-right transition-transform',
    'right-16',
    'flex items-center h-full justify-end',
    'fixed top-50% gap-4',
  );

  const onClick = () => {
    left
      ? (setOpenLeftSidebar(!openLeftSidebar),
        setIsOpenLeft(!isOpenLeft) && setIsOpenRight(isOpen ? false : true))
      : (setOpenRightSidebar(!openRightSidebar),
        setIsOpenRight(!isOpenRight) && setIsOpenLeft(isOpenRight ? false : true));
  };
  return (
    <Container>
      <div className={left ? leftButtonClassName : rightButtonClassName}>
        <BaseText>{label}</BaseText>
        <SidebarToggler
          onClick={onClick}
          isOpen={left ? isOpenLeft : isOpenRight}
          isLeft={left}
        />
      </div>
    </Container>
  );
};
/*
isOpenLeft
      ? left
        ? 'rotate-0 origin-left transition-transform'
        : '-rotate-0 origin-right transition-transform '
      : left
      ? 'rotate-90 origin-left transition-transform'
      : '-rotate-90 origin-right transition-transform',
    left ? 'flex-row-reverse left-16' : 'right-16 ',
    'flex items-center h-full justify-end',
    'fixed top-50% gap-4',
    */
