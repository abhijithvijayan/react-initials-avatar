/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import './styles.scss';

function getInitials(name: string): string {
  const [firstName, lastName] = name.split(' ');

  if (firstName && lastName) {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  }

  return firstName.charAt(0).toUpperCase();
}

export interface InitialsAvatarProps {
  name: string;
  className?: string;
}

const InitialsAvatar: React.FC<InitialsAvatarProps> = ({name, className}) => {
  return (
    <>
      <div
        aria-label={name}
        role="img"
        className={className || 'initials-avatar'}
      >
        <div>{getInitials(name)}</div>
      </div>
    </>
  );
};

export default React.memo(InitialsAvatar);
