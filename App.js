import React,{useState} from 'react';
import type {Node} from 'react';
import { launchCamera,launchImageLibrary} from 'react-native-image-picker';
import {Button,SafeAreaView,StyleSheet,Text,useColorScheme,View,Image,} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => Node=() => {
  const[imageUri,setimageUri] = useState('');

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const openCamera = () =>{
    const options={
     storageOptions: {
      path: 'images',
      mediaType:'photo',
     },
     includeBase64: true,
    };


    launchCamera(options, response =>{
      console.log('Response =' , response);
      if (response.didCancel){
        console.log('User cancelled image picker');
      } else if (response.error){
        console.log('ImagePicker Error:' , response.error)
      } else if(response.customButton){
        console.log('User tapped custom button:',response.customButton);
      } else{
        const source ={uri:'data:image/jpeg:base64,'+response.base64}
        setimageUri(source)
      }

    })
  }

  const openGallery = () =>{
    const options={
      storageOptions: {
       path: 'images',
       mediaType:'photo',
      },
      includeBase64: true,
     };
 
 
     launchImageLibrary(options,response =>{
       cconsole.log('Response =' , response);
       if (response.didCancel){
         console.log('User cancelled image picker');
       } else if (response.error){
         console.log('ImagePicker Error:' , response.error)
       } else if(response.customButton){
         console.log('User tapped custom button:',response.customButton);
       } else{
         const source ={uri:'data:image/jpeg:base64,'+response.base64}
         setimageUri(source);
       }
 
     })
  }
 
  return (
    <SafeAreaView style={[backgroundStyle,{flex:1}]}>
      <View
       style={
        {justifyContent:'center',
        alignItems:'center',
        alignSelf: 'center',
        flex:1}}>

     
<Button title={'Open Camera'} 
      onPress={() => {
        openCamera()
      }}/>

      <Image 
      source={imageUri}
      style={
         {height: 100,
          width: 100, 
          borderRadius:100, 
          borderWidth:2,
          borderColor:'black'}}
      />
        
        <Button title={'Open Gallery'} 
      onPress={() => {
        openGallery()
      }}/>

      <Image 
      source={imageUri}
      style={
         {height: 100,
          width: 100, 
          borderRadius:100, 
          borderWidth:2,
          borderColor:'black'}}
      />

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
