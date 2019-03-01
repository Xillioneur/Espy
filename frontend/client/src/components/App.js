import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from '../images/logo.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  font-family: 'Open Sans', sans-serif;
  background-color: #ffeedd;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40%;
`;

const Title = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 3rem;
  font-family: 'Georgia';
  font-style: italic;
  color: #ccb0ac;
  text-align: center;
`;

const Paragraph = styled.p`
  color: black;
  font-family: Futura, 'Trebuchet MS', Arial, sans-serif;
  font-size: 1rem;
  font-style: italic;
  font-variant: normal;
  font-weight: 400;
  line-height: 23px;
  color: #ccb0ac;
`;

const Link = styled.a`
  color: #ffaa33;
`;

const apiUrl = process.env.API_URL || 'http://localhost:3000';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
    };
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getData();
  }

  // Retrieves the list of items from the Express app
  getData = () => {
    fetch(`${apiUrl}/status`)
      .then(res => res.json())
      .then(json => this.setState({ status: json.status }));
  };

  render() {
    const { status } = this.state;
    console.log(status);
    return (
      <Container>
        <Wrapper>
          <Title>
            <img src={Logo} alt="Logo" />
            Think Fast!
          </Title>
          <Paragraph>Mind your clipboard</Paragraph>
          <Link href={apiUrl} target="_blank">
            {status}
          </Link>
        </Wrapper>
      </Container>
    );
  }
}

export default App;
