import React, {useCallback} from 'react';
import SafeAreaView from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ToDo = ({route, navigation}) => {
  const {name} = route.params;

  const goBack = useCallback(() => {
    navigation.goBack();
  });

  return (
    <SafeAreaView style={styles.screen}>
      <TouchableOpacity style={styles.back} onPress={goBack}>
        <Image
          style={styles.img}
          source={{
            uri: 'https://lh3.googleusercontent.com/proxy/v6NFWyxZIpW2bvLXIECR0w5AXdoVkmDxnnba4Vx0ItQl8dLLqob2i7ws49asnhOSo0RjG0HK-sIbi5whJTQgZhKdfV9uIl82FItW47RgO6bxtJf4jOe82WEeMccmy2Edjfk3seFN5HU_dd8fyhRG3Bb7MQ',
          }}
        />
      </TouchableOpacity>
      <View style={styles.todo}>
        <Text style={[styles.text, styles.bold]}>Ma To Do:</Text>
        <Text style={[styles.text, styles.padding]}>{name}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  todo: {
    marginLeft: 10,
  },
  text: {
    fontSize: 20,
  },
  padding: {
    marginLeft: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  img: {
    width: 40,
    height: 20,
  },
  back: {
    alignSelf: 'flex-start',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'gray',
    padding: 2,
    paddingHorizontal: 3,
    margin: 5,
    width: 60,
    height: 40,
    justifyContent: 'center',
  },
});

export default ToDo;
