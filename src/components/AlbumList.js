import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'

// const AlbumsList = () => {
class AlbumList extends Component {
  // classes require some amount of rendered data
  state = { albums: [] };
  // componentWillMount automatically gets called right away. life cycle methods
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  } // setState is the only way to update the component


  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />);
      // key must be unique in array so it helps re render elemends
      // album={album} passing prop to class
      // |^^^^| can be names what ever you want. its name when passed as a prop
  }
  render() {
    console.log(this.state);
      return (
        <ScrollView>
          {this.renderAlbums()}
        </ScrollView>
      );
    }
  } // classses dont require semicolons at the end

export default AlbumList;
