import React from 'react';
import {FlatList, StyleSheet, Text, View } from 'react-native';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop :2
  },
 
 
  item: {
    padding:20,
    fontSize:18,
    height:44,
  },

});

const FlatListBasics = () => {
  return (

    <View style={styles.container}>
      {/* sd*/}
      <FlatList
       data={[
         {key:'OUSL1'},
         {key:'OUSL2'},
         {key:'OUSadL3'},
         {key:'OUSL4'},
         {key:'OUSL5'},
         {key:'OUSL6'},
         {key:'OUSL7'},
         {key:'OUSL8'},
         
        ]}
        renderItem={ ({item}) => <Text styles={styles.item}>{item.key}</Text>}
       
        
        
      />
      </View>
  );
}

export default FlatListBasics;
