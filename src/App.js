import React from 'react';
import Form from './components/Form';
import Header from './components/Header';
import styled from 'styled-components';

const AppStyle = styled.div`
    background: #F9FEFF; 
`;

function App() {
  return (
      <AppStyle>
        <Header />
        <Form />
      </AppStyle>
  );
}

export default App;
