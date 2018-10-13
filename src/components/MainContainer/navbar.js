import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import CardSection from './CardSection';
import Button from './Button';

const Navbar = ({ text }) => {
  const {
    navBarStyle
  } = styles;
  return (
      <CardSection>
        <Button>
          { text }
        </Button>
      </CardSection>
  );
};
const styles = {
  navBarStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
};

export default Navbar;
