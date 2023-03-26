import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { Trash } from './icons/Trash';

export function TaskCard({ task }) {
  return (
    <TouchableOpacity style={styles.buttonTask}>
      <Text style={styles.textTask}>{task}</Text>
      <TouchableOpacity style={styles.trashButton}>
        <Trash />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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

TaskCard.propTypes = {
  task: PropTypes.string.isRequired,
};
