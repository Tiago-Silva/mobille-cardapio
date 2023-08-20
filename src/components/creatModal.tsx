import { useEffect, useState } from "react";
import { Button, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { FoodData } from "../interface/FoodData";
import axios, { AxiosPromise } from "axios";

interface ModalProps {
    closeModal(): void
}

export function CreateModal({ closeModal }: ModalProps) {

    const [title, setTitle] = useState("");
    let price:number = 0;
    const [valor, setValor] = useState('');
    const [image, setImage] = useState("");
    const [isModalVisible, setModalVisible] = useState(false);

    const postData = async (data: FoodData): AxiosPromise<any> => {
        const response = axios.post('http://192.168.20.17:8080/food', data);
        return response;
    }

    const fecharModal = () => {
        setModalVisible(!isModalVisible);
        closeModal();
    };

    const novoPoste = () => {
        price = parseFloat(valor);
        const foodData: FoodData = {
            title, 
            price,
            image
        }
        postData(foodData);
        setModalVisible(false);
        closeModal();
    }
    
    useEffect(() => {
        setModalVisible(true);
    },[])

    return (
        <Modal visible={isModalVisible} animationType="slide">
            <View style={styles.modalContent}>
                <View style={styles.modalView}>
                    <View>
                        <TextInput placeholder='Titulo'style={styles.modalInput} value={title} onChangeText={setTitle}/>
                        <TextInput placeholder='Preço' style={styles.modalInput} keyboardType = 'number-pad' value={valor} onChangeText={setValor} />
                        <TextInput placeholder='Imagem' style={styles.modalInput} value={image} onChangeText={setImage}/>
                    </View>
                </View>
                <Button
                    title="Postar"
                    onPress={novoPoste}
                />
                <TouchableOpacity style={styles.fecharModal} onPress={fecharModal}>
                    <Text style={styles.textButton}>Sair</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    fecharModal: {
      position: 'absolute',
      bottom: 16,
      right: 16,
      backgroundColor: 'gray',
      borderRadius: 50,
      width: 56,
      height: 56,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textButton: {
      fontSize: 18,
      color: 'white'
    },
    modalContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 20,
    },
    modalView: {
      flexDirection: 'row',
      flexGrow: 1,
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalInput: {
      textAlign: 'center',
      width: 300,
      borderBottomWidth: 0.5,
      borderBottomColor: 'blue',
    },
  });