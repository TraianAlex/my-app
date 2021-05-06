// @ts-nocheck
import React, { memo } from 'react';

export const CornerButton = memo(({ corner, setPosition, position }) => {
  return (
    <div
      onClick={() => setPosition(corner)}
      className={`arrow arrow-${corner} ${position === corner ? 'd-none' : ''}`}
    />
  );
});
