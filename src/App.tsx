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
  const [isGetAll, setGetAll] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev);
  };

  useEffect(() => {
    setGetAll(true);
  },[]);

  const isSave = () => {
    setGetAll(true);
    handleOpenModal();
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollWithFloatingButton isGetAll={isGetAll}/>
      <TouchableOpacity style={styles.appFloatingButton} onPress={handleOpenModal}>
        <Text style={styles.appTextButton}>Novo</Text>
      </TouchableOpacity>
      {isModalOpen && <CreateModal closeModal={handleOpenModal} salvaDados={isSave}/>}
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