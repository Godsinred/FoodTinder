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
                <PictureContainer source={pic} />
                <InfoBar
                    name={this.props.business.name}
                    city={this.props.business.location.city}
                    distance={this.props.business.distance}
                    rating={this.props.business.rating}
                    price={this.props.business.price}
                />
                <ScrollView businessId={this.props.business.id}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignSelf: 'stretch'
    }
});
