import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const CustomLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>

      <main>{children}</main>

    </div>
  );
};

export default CustomLayout;