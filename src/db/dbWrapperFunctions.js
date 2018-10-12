import {AsyncStroage} from 'react-native';

async function getAllMatches(){
    try{
        return await AsyncStroage.getAllKeys().then(keys =>{
            return await AsyncStroage.multiGet(keys, (matches) =>{
                //note this returns key value pairs in arrays ['business ID', 'Business Object in string form']
                // you will need to convert this to obets using map or something
            })
        })
    } catch(error) {
        console.log('Error Retrieving matches');
        console.log(error.message);
    }
}

async function addToMatches(business){
    try{
        await AsyncStroage.setItem(business.id, JSON.stringify(business));
    } catch (error){
        console.log('Error adding to matches');
        console.log(error.message);
    }
}

async function getBusinessesAlreadySeen(){
    try{
        await AsyncStroage.getAllKeys().then(keys=>{
            return keys;
        })
    } catch (error){
        console.log('Error retrieving previously matched items');
        console.log(error.message);
    }
}

export {getAllMatches, getAllKeys, getBusinessesAlreadySeen};