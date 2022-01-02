import { useState } from 'react';
import { Container } from './container';
import { BaseText } from './baseText';
import { SidebarToggler } from './sidebarToggler';
import className from 'classnames';

export const SideButton = ({ label, left }) => {
  const [isOpen, setIsOpen] = useState(true);
  const sidebarClassName = className(
    'w-64',
    left ? 'ml-10 flex-row-reverse left-16' : 'mr-10 right-16 ',
    'flex items-center h-full justify-end',
    'fixed top-50%',
  );

  return (
    <Container>
      <div className={sidebarClassName}>
        <BaseText>{label}</BaseText>
        <div className="w-3" />
        <SidebarToggler
          onClick={() => setIsOpen(!isOpen)}
          isOpen={isOpen}
          isLeft={left}
        />
      </div>
    </Container>
  );
};
