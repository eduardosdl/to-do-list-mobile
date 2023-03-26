import { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Platform } from 'react-native';
import { Button } from '../components/Button';
import { TaskCard } from '../components/TaskCard';

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

      <Button action={handleAddNewTask} />

      <Text style={[styles.title, { marginVertical: 50 }]}>My Tasks</Text>

      {myTasks.map((task) => (
        <TaskCard key={task} task={task} />
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
});
