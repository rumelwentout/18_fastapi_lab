import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className="mx-auto">
      <>{children}</>
    </div>
  );
};

export default MainLayout;
