import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, Keyboard, TouchableWithoutFeedback, Image, ImageBackground, KeyboardAvoidingView, TextInput, TouchableOpacity, Modal, FlatList } from 'react-native';
import React, { useState } from 'react';

const data = [
  {
    id: 1,
    name: "Sebine"
  }
]

export default function App() {
  const [name, setName] = useState();
  const [loading, setLoading] = useState(false);
  const [visible,setVisible] = useState(false);

  const addItem = () => {
    setLoading(true)
    setTimeout(()=>{
      const item = new Object;
      item.id = data.length + 1;
      item.name = name;
      data.push(item);
      setName('');
      console.log(data);
      setLoading(false);
      setVisible(true);
    },1000)
  }

  const closeModal = () => {
    setVisible(false);
  }

  const Modall = () => {
    return(
      <Modal animationType="slide"
      transparent={true} visible={visible}>
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <View style={{backgroundColor:'white',padding:25,borderRadius:15,alignItems:'center',gap:20}}>
            <Text>
              Elave olundu
            </Text>
            <TouchableOpacity style={{paddingHorizontal:15,paddingVertical:10,borderRadius:15,backgroundColor:'purple'}} onPress={closeModal}>
              <Text style={{color:'white'}}>bagla</Text>
            </TouchableOpacity>

          </View>

        </View>
      </Modal>
    )
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ImageBackground source={{ uri: 'https://i.pinimg.com/originals/09/30/2d/09302d615853fd9444414e31d8af65ab.jpg' }} style={{ width: '100%', height: '100%' }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

          <SafeAreaView style={{ height: '100%', justifyContent: 'center' }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 20 }}>
              <Image style={{ width: 50, height: 50 }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4720/4720451.png' }} />
              <Text style={{ fontSize: 24 }}>Mekteb qeydiyyat</Text>
            </View>
            <View style={styles.container}>
              <View style={{ alignItems: 'flex-start', width: '100%', gap: 20 }}>
                <TextInput onChangeText={setName} value={name} placeholder='Ad' style={{ padding: 12, backgroundColor: '#f1f1f1', width: '100%', borderRadius: 15 }} />
                <TouchableOpacity onPress={addItem} style={{ width: '100%', height: 40, backgroundColor: 'purple', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}>
                  {loading?
                  <ActivityIndicator />
                  :
                  <Text style={{ color: 'white', fontSize: 18 }}>Elave et</Text>

                  }
                </TouchableOpacity>
                <FlatList
                  data={data}
                  style={{}}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({ item }) => (
                    <Text style={{ color: 'black', height: 20, fontSize: 20 }}>{item.name}</Text>
                  )}
                />

              </View>

            <Modall />
            </View>
            <StatusBar style="auto" />
          </SafeAreaView>

        </TouchableWithoutFeedback>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
