import { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';
import { Button } from '../components/Button';
import { TaskCard } from '../components/TaskCard';

export function Home() {
  const [newTask, setNewTask] = useState('');
  const [myTasks, setMyTasks] = useState([]);

  function handleAddNewTask() {
    setMyTasks((prevState) => [
      ...prevState,
      { check: false, content: newTask },
    ]);
  }

  function handleToggleCheckTask(content) {
    setMyTasks((prevState) => {
      const updatedTasks = prevState.map((task) =>
        task.content === content ? { ...task, check: !task.check } : task
      );

      return updatedTasks;
    });
  }

  function handleDeleteTask(content) {
    setMyTasks((prevState) =>
      prevState.filter((task) => task.content !== content)
    );
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

      <Text style={[styles.title, { marginVertical: 30 }]}>My Tasks</Text>

      <FlatList
        data={myTasks}
        keyExtractor={(item) => item.content}
        renderItem={({ item }) => (
          <TaskCard
            key={item.content}
            check={handleToggleCheckTask}
            deleteAction={handleDeleteTask}
            task={item}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingTop: 50,
    paddingBottom: 20,
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
