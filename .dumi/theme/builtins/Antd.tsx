import * as all from 'antd';
import * as React from 'react';

interface AntdProps {
  component: keyof typeof all;
}

const Antd: React.FC<AntdProps> = (props) => {
  const { component, ...restProps } = props;
  const Component = (all[component] ?? React.Fragment) as React.ComponentType<unknown>;
  return <Component {...restProps} />;
};

export default Antd;
