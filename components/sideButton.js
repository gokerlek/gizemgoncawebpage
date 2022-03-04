import { useState } from 'react';
import { Container } from './container';
import { BaseText } from './baseText';
import { SidebarToggler } from './sidebarToggler';
import classNames from 'classnames';

export const SideButton = ({ left, open, onClick, hide }) => {
  const [isOpenLeft, setIsOpenLeft] = useState(true);
  const [isOpenRight, setIsOpenRight] = useState(true);
  const [openLeftSidebar, setOpenLeftSidebar] = useState(false);
  const [openRightSidebar, setOpenRightSidebar] = useState(false);

  const label = left ? 'Gizem Gonca' : 'Voice and Piano Teacher';

  const buttonClassName = classNames(
    'flex items-center h-full justify-end',
    'fixed top-50% gap-4',
    'transition-transform',
    left ? 'origin-left flex-row-reverse left-16' : 'origin-right right-16',
    open ? 'rotate-0' : left ? 'rotate-90' : '-rotate-90',
  );

  return (
    <Container>
      <div className={buttonClassName}>
        {hide && <BaseText>{label}</BaseText>}
        <SidebarToggler onClick={onClick} isOpen={hide} isLeft={left} />
      </div>
    </Container>
  );
};
