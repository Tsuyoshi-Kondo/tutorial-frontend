import React, { useState } from 'react';
import { AllBooksProvider } from '../../../hooks/useAllBooksContext';
import { MenuBody } from '../../organisms/MenuBody/MenuBody';
import { MenuFooter } from '../../organisms/MenuFooter/MenuFooter';
import { MenuHeader } from '../../organisms/MenuHeader/MenuHeader';
import { Container } from './style';
export const Menu: React.FC = () => {
  const [isMenuMode, setIsMenuMode] = useState<boolean>(false);
  return (
    <Container>
      <AllBooksProvider>
        <MenuHeader />
        <MenuBody isMenuMode={isMenuMode} />
        <MenuFooter isMenuMode={isMenuMode} switchIsMenuMode={() => setIsMenuMode(!isMenuMode)} />
      </AllBooksProvider>
    </Container>
  );
};
