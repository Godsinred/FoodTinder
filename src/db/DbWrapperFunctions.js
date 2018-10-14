import {AsyncStorage} from 'react-native';

async function addToMatches(business){
    try{
        await AsyncStorage.setItem(business.id, JSON.stringify(business));
    } catch (error){
        console.log('Error adding to matches');
        console.log(error.message);
    }
}

async function removeAllItems(){
    try{
        await AsyncStorage.clear();
    } catch (error){
        console.log(error)
    }
}

async function printAllKeys(){
    try{
        await AsyncStorage.getAllKeys().then((keys)=>{
            console.log(keys)
        })
    } catch (error){
        console.log(error)
    }
}

async function getAllMatches(){
    try{
        return AsyncStorage.getAllKeys().then(keys =>{
            return AsyncStorage.multiGet(keys, (err, keys) =>{
                let mapping = keys.map(pair =>{
                    console.log('Mapping: ')
                    console.log(JSON.parse(pair[1]))
                    return JSON.parse(pair[1])
                })
                return mapping;
            })
        })
    } catch(error){
        console.log(error)
    }
}

async function getRestaurantCount(){

}

async function setRestaurantCount(){
  
}

export {addToMatches, removeAllItems, printAllKeys, getAllMatches};
