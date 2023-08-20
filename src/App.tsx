import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import Header from './components/Header';
import ScrollWithFloatingButton from './components/ScrollWithFloatingButton';
import { CreateModal } from './components/creatModal';

function App(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollWithFloatingButton />
      <TouchableOpacity style={styles.appFloatingButton} onPress={handleOpenModal}>
        <Text style={styles.appTextButton}>Novo</Text>
      </TouchableOpacity>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
    </SafeAreaView>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appFloatingButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: 'blue',
    borderRadius: 50,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appTextButton: {
    fontSize: 18,
    color: 'white'
  },
});