import React, {useMemo, useState, useCallback, useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CreateToDo from './createToDo';

const ToDoList = props => {
  const {navigation} = props;
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const dataFiltered = useMemo(() => {
    return data.filter(data => data.includes(search));
  }, [data, search]);

  const Delete = useCallback(
    id => {
      if (id > -1) {
        const newList = [...data];
        newList.splice(id, 1);
        setData(newList);
        console.log('delete');
      }
    },
    [data],
  );

  const goToPageToDo = useCallback(
    item => {
      navigation.push('Ma To Do', {name: item});
    },
    [navigation],
  );

  const saveData = useCallback(async () => {
    const json = JSON.stringify(data);
    await AsyncStorage.setItem('listToDo', json);
  }, [data]);

  const loadData = useCallback(async () => {
    const json = await AsyncStorage.getItem('listToDo');
    if (!json) {
      return;
    }
    console.log(json);
    setData(JSON.parse(json));
  }, []);

  useEffect(() => {
    try {
      loadData();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }, [loadData]);

  useEffect(() => {
    try {
      saveData();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }, [data, saveData]);

  return (
    <>
      <View style={styles.top}>
        <TextInput
          style={styles.search}
          value={search}
          onChangeText={setSearch}
          placeholder="Rechercher ..."
        />
      </View>
      <View style={styles.mid}>
        <FlatList
          data={dataFiltered}
          renderItem={({item, index}) => {
            return (
              <View style={styles.todos}>
                <Text
                  style={styles.textTodos}
                  ref={index}
                  onPress={goToPageToDo.bind(this, item)}>
                  {item}
                </Text>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={Delete.bind(this, index)}>
                  <Text style={styles.textButton}>Supprimer</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
      <CreateToDo name={'CreateToDo'} data={data} setData={setData} />
    </>
  );
};
const styles = StyleSheet.create({
  top: {
    flex: 1,
  },
  search: {
    borderRadius: 5,
    borderColor: 'grey',
    borderWidth: 2,
    margin: 5,
  },
  mid: {
    flex: 5,
  },
  todos: {
    backgroundColor: 'lightgrey',
    padding: 20,
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTodos: {
    flex: 3,
    fontSize: 20,
    color: 'black',
  },
  deleteButton: {
    color: 'black',
    backgroundColor: 'red',
    borderRadius: 5,
  },
  textButton: {
    padding: 5,
  },
});

export default ToDoList;
