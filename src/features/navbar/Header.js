import { Container, Section } from '@/lib/CommonStyles';
import Row from '@/ui/Row';
import { SearchInput } from '@/ui/SearchInput';
import { Text } from '@/ui/Text';
import React from 'react';
import { styled } from 'styled-components';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import useLocalStorageState from '@/hooks/useLocalStorageState';
import useThemeToggle from '@/hooks/useThemeToggle';
import { useRouter } from 'next/navigation';

const Header = () => {
  const { toggleDarkMode, isDarkMode } = useThemeToggle();
  const router = useRouter()

  return (
    <>
      <LyoutContainer>
        <Row type='horizontal' gap='1.6rem'>
          <Text cursor='pointer' color='#0F253E' weight='500'  onClick={()=> router.push('/') }>
            {' '}
            React Pizza
          </Text>

          <Row type='horizontal'>
            {isDarkMode ? (
              <HiOutlineSun size={26} onClick={toggleDarkMode} />
            ) : (
              <HiOutlineMoon size={26} onClick={toggleDarkMode} />
            )}
          </Row>
        </Row>
        <SearchInput placeholder='Search order #' />
      </LyoutContainer>
    </>
  );
};

export default Header;

const LyoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-yellow-500);
  padding: 20px;
`;
