import {AsyncStorage} from 'react-native';

async function addToMatches(business){
    try{
        await AsyncStorage.setItem(business.id, JSON.stringify(business));
    } catch (error){
        console.log('Error adding to matches');
        console.log(error.message);
    }
}

async function getBusinessesAlreadySeen(){
    try{
        await AsyncStorage.getAllKeys().then((err, keys)=>{
            return keys;
        })
    } catch (error){
        console.log('Error retrieving previously matched items');
        console.log(error.message);
    }
}

export {getBusinessesAlreadySeen, addToMatches};