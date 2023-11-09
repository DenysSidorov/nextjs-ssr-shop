import React, {FC} from 'react';

const MainContent = ({children}: {
    children: React.ReactNode;
}) => {
  return (
    <div className='mainContainerSection fullWidth left' style={{marginTop: '25px'}}>
      <div className='container'>
        <div className='preloader-main-content' />
          <main>
            {children}
          </main>
      </div>
    </div>
  );
};

export default MainContent;
