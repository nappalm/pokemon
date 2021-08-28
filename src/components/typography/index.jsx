import classNames from 'classnames';
import { cloneElement } from 'react';

import HeadLine from './headLine';
import Text from './text';

const prefixCls = 'typography';
const Typography = ({ children, className, style }) => {
  const classes = classNames(
    prefixCls,
    className,
    style,
  );

  return (
    cloneElement(
      children, {
        className: classes,
        style,
      },
    )
  );
};

Typography.HeadLine = HeadLine;
Typography.Text = Text;

export default Typography;
