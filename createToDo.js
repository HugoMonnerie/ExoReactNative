import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const CreateToDo = props => {
  const [nameCreateTodo, setNameCreateTodo] = useState('');
  const data = props.data;
  const setData = props.setData;

  const Create = useCallback(
    name => {
      if (name) {
        const newList = [...data];
        newList.push(name);
        setData(newList);
        console.log('create');
      }
    },
    [nameCreateTodo, data],
  );

  return (
    <>
      <View style={styles.bot}>
        <TextInput
          style={styles.inputTextCreate}
          value={nameCreateTodo}
          onChangeText={setNameCreateTodo}
          placeholder="A faire ..."
        />
        <TouchableOpacity
          style={styles.createButton}
          onPress={Create.bind(this, nameCreateTodo)}>
          <Text style={styles.textButton}>Ajouter</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bot: {
    flex: 1,
    margin: 5,
    flexDirection: 'row',
  },
  inputTextCreate: {
    flex: 1,
    borderRadius: 5,
    borderColor: 'grey',
    borderWidth: 2,
  },
  createButton: {
    color: 'black',
    backgroundColor: 'green',
    borderRadius: 5,
    margin: 10,
    justifyContent: 'center',
  },
});

export default CreateToDo;
