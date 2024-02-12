import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

const Custom = ({data}) => {
  return (
    <ScrollView>
      {data.map((item, index) => {
        return(
          <View>
            <View>
              <Image source={item.image} />
            </View>
          </View>
        )
      })}
    </ScrollView>
  )
}

export default Custom

const styles = StyleSheet.create({})