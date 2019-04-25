import React from 'react';
import { View, Text, FlatList } from 'react-native';

const renderUsers = ({ item }) => (
  <View style={{ borderColor: 'gray', borderWidth: 1 }}>
    <Text>Name: {item.name}</Text>
    <Text>Sex: {item.gender}</Text>
    <Text>Email: {item.email}</Text>
    <Text>Ph: {item.phoneNo}</Text>
  </View>
)

export const UsersList = ({ users }) => (
  <View style={{ padding: 30 }}>
    <FlatList
      data={users}
      renderItem={renderUsers}
    />
  </View>
)