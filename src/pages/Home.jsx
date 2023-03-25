import { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';

import { Trash } from '../components/icons/Trash';

export function Home() {
  const [newTask, setNewTask] = useState('');
  const [myTasks, setMyTasks] = useState([]);

  function handleAddNewTask() {
    setMyTasks((prevState) => [...prevState, newTask]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wellcome</Text>

      <TextInput
        style={styles.input}
        placeholder="New Task"
        placeholderTextColor="#555"
        onChangeText={setNewTask}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddNewTask}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginVertical: 50 }]}>My Tasks</Text>

      {myTasks.map((task) => (
        <TouchableOpacity style={styles.buttonTask} key={task}>
          <Text style={styles.textTask}>{task}</Text>
          <TouchableOpacity style={styles.trashButton}>
            <Trash />
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#3a3b44',
    fontSize: 18,
    color: '#FFF',
    padding: Platform === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  buttonTask: {
    backgroundColor: '#3a3b44',
    padding: 15,
    borderRadius: 50,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textTask: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    borderRadius: 20,
  },
  trashButton: {
    backgroundColor: '#6a6b7a',
    padding: 10,
    borderRadius: 30,
  },
});
