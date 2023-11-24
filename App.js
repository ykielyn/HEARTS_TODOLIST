import React, { useState } from 'react';
import {View,Text,TextInput,TouchableOpacity,ScrollView,} from 'react-native';

const TodoApp = () => {
  const [data, setData] = useState({ title: '', description: '' });
  const [tasks, setTasks] = useState([]);

  const addTodo = () => {
    if (data.title.trim() === '' || data.description.trim() === '') {
      alert('Enter all fields.');
      return;
    }

    setTasks([...tasks, data]);
    clearInput();
  };

  const removeTodo = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const clearInput = () => {
    setData({ title: '', description: '' });
  };

  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: 'pink',
          alignItems: 'center',
          paddingTop: 210,
          paddingBottom: 210,
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
            borderRadius: 20,
            borderStyle: 'solid',
            borderWidth: 2,
            padding: 20,
            backgroundColor: 'aliceblue',
          }}
        >
          <Text style={{ textAlign: 'center', fontSize: 20 }}>
            Task Organizer
          </Text>
          <TextInput
            style={{
              marginBottom: 20,
              borderRadius: 10,
              padding: 8,
              textAlign: 'center',
              borderWidth: 1,
            }}
            placeholder="Title"
            value={data.title}
            onChangeText={(text) => setData({ ...data, title: text })}
          />
          <TextInput
            style={{
              marginBottom: 20,
              borderRadius: 10,
              padding: 12,
              textAlign: 'center',
              borderWidth: 1,
            }}
            placeholder="Description"
            value={data.description}
            onChangeText={(text) => setData({ ...data, description: text })}
          />
          <TouchableOpacity
            onPress={addTodo}
            style={{
              marginBottom: 20,
              borderRadius: 10,
              padding: 10,
              borderWidth: 1,
              borderColor: 'black',
              backgroundColor: 'dodgerblue',
            }}
          >
            <Text>Add To-Do List</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
            borderRadius: 20,
            borderStyle: 'solid',
            borderWidth: 2,
            backgroundColor: 'dodgerblue',
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 20, marginBottom: 10, textAlign: 'center' }}>
            Task Lists
          </Text>
          {tasks.map((task, index) => (
            <View
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 20,
                borderStyle: 'solid',
                borderWidth: 2,
                marginBottom: 20,
                padding: 20,
                backgroundColor: 'aliceblue',
              }}
            >
              <Text>{task.title}</Text>
              <Text style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                Description: {'\n\n'}
                {task.description}
              </Text>
              <TouchableOpacity
                onPress={() => removeTodo(index)}
                style={{
                  marginTop: 10,
                  borderRadius: 10,
                  borderWidth: 1,
                  padding: 8,
                  backgroundColor: 'white',
                }}
              >
                <Text>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default TodoApp;
