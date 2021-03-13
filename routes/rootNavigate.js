import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  console.log('What is this', name);
  console.log('What is this2', params);

  navigationRef.current?.navigate(name, params);
}
