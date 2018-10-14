import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import InfoBar from '../InfoBar/InfoBar';
import PictureContainer from '../PictureContainer/PictureContainer';
import ScrollView from '../MatchView/ScrollView';

export default class CardContainer extends React.Component {
    render() {
        let pic = {uri : this.props.business.image_url};
        return (
            <View style={styles.container}>
                <PictureContainer
                    style={styles.pictureContainer}
                    source={pic} />
                <InfoBar
                    style={styles.infoBar}
                    name={this.props.business.name}
                    city={this.props.business.location.city}
                    distance={Number(this.props.business.distance/1609.34).toFixed(1)}
                    rating={this.props.business.rating}
                    price={this.props.business.price}
                />
                <ScrollView
                    style={styles.scrollView}
                    businessId={this.props.business.id}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 5,
        alignSelf: 'stretch'
<<<<<<< HEAD
    }
=======
    },
    pictureContainer :{
        flex: 2, 
    },
    infoBar :{
        flex: 0.5, 
    }, scrollView :{
        flex: 5, 
    }  
>>>>>>> eca7a3a888ae6ace9c42979fc7d992db1d2ceb28
});