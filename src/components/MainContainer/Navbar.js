import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const Navbar = () => {
  const {
    navBarStyle
  } = styles;
  return (
    <Card>
      <CardSection>
        <Button>
          Match Me NOWWWWWW!
        </Button>
        <Image
            source={{ uri: "https://tinder.com/static/tinder.png" }}
          />
      </CardSection>
    </Card>
  );
};
const styles = {
  navBarStyle: {
    flexDirection: 'column',
    //justifyContent: 'space-around'
  }
};

export default Navbar;
