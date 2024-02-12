import { View, Text, SafeAreaView, Platform, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import Custom from '../components/Custom'

const Test = () => {
    const data = [
        {
            Image: require('../assets/news1.jpg'),
        },
        // {
        //     Image: require('../assets/news2.jpg'),
        // },
        // {
        //     Image: require('../assets/news3.jpg'),
        // },
        // {
        //     Image: require('../assets/news4.jpg'),
        // },
        // {
        //     Image: require('../assets/news5.jpg'),
        // },
    ];
  return (
    <SafeAreaView style={styles.container}>
      <Custom data={data} />
    </SafeAreaView>
  );
};

export default Test;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});
    