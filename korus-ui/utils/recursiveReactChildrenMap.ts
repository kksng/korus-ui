import React from 'react';

interface RecursiveFunction {
  (child: React.ReactNode): React.ReactNode | RecursiveFunction,
}

export const recursiveReactChildrenMap = (children: React.ReactNode, fn: RecursiveFunction): React.ReactNode => React.Children.map(children, (child) => {
  if (!React.isValidElement(child)) {
    return child;
  }

  const nextChild = child.props.children
    ? React.cloneElement(child, {
      children: recursiveReactChildrenMap(child.props.children, fn),
    })
    : child;

  return fn(nextChild);
});
