import React, { useState, useEffect } from 'react';
import { ScrollView, Image, TouchableOpacity, View, Text, StyleSheet, StatusBar } from 'react-native';
import { RadioButton } from 'react-native-paper';
import MenuBtn from '../component/MenuBtn';
import images from '../../assets/images';
import { useAtom } from 'jotai';
import { questionAtom, languageAtom } from '../context/QuestionProvider';
import { postAnswer } from '../utils/useApi';

interface Question {
  question: string;
  option: string[];
  categoryId: string;
}

export default function CompleteQuestion({ navigation} : {navigation: any}) {
  
  const [question, setQuestion] = useAtom(questionAtom);
  const [language, setLanguage] = useAtom(languageAtom);
  const [checked, setChecked] = useState('');
  const que1 = question[0];

  const handleNav = (data: string) => {
    console.log(que1);
    navigation.navigate(data);
  }

  const handleSubmit = async () => {
    // console.log(checked, que1.categoryId);
    // const data = {
    //   questionId : que1.categoryId,
    //   selectedOption: checked
    // }
    // let Data = await postAnswer('questionnaire/question', data);
    
    navigation.navigate("Home");

  }
  return (
    <View style={{backgroundColor: 'black', height: '100%', display: 'block'}}
    >
      <StatusBar translucent backgroundColor={'transparent'} />
      <View style={styles.container}>
        <Image source={images.logo} style={styles.logo} />
        <View style={styles.subHead}>
          <View style={[styles.subHead, {width: '50%', padding: 0, marginVertical: 0, gap: 10}]}>
            <TouchableOpacity 
              onPress={() => 
                handleNav('BlockM4')
                // if (route.params.param === 0) {
                //   handleNav("Home", 100)
                // }
                // else {
                //   handleNav("Question"+(route.params.param-1).toString(), (route.params.param-1))
                // }
              }
            >
              <Image source={images.back} style ={styles.back} />
            </TouchableOpacity>
            <Text style={styles.text}>ACTIVE ADS</Text>
          </View>
          <Image source={images.menu} style ={styles.back} />
        </View>
        <View style={{width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={[styles.text, {color: 'white'}]}>You earned  EARN Tokens!</Text>
          <Text style={[styles.text, {fontSize: 30, marginTop: 15, color: '#FF6989'}]}>Congratulations</Text>
          <View style={styles.option}>
            <Image source={images.medal} style ={styles.back} />
          </View>
          <Text style={[styles.text, {color: 'white', marginTop: 50}]}>You have Earn Tokens</Text>
        </View>
        <TouchableOpacity 
          style={ styles.next }
          onPress={() => 
            handleSubmit()
            // if (route.params.param === 3) {
            //   handleNav('EarnToken', 100)
            // } else {
            //   handleNav('Question'+(route.params.param + 1).toString(), (route.params.param+1))
            // }
          }  
        >
          <Image source={images.exit} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    width: '100%',
    backgroundColor: 'black',
  },
  menuBtn: {
    width: '90%',
    paddingHorizontal: 30,
    flexDirection: 'row',
    paddingVertical: 15,
    gap: 30,
    marginBottom: 10
  },
  logo: {
    marginTop: 50,
  },
  text: {
    color: 'black',
    fontFamily: 'Sansation Bold',
    fontSize: 20
  },
  subHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#29ECF9',
    marginVertical: 30,
    padding: 20,
    width: '100%',
  },
  back: {},
  option: {
    marginTop: 20, 
    width: '100%',
    flexDirection:'row',
    justifyContent: 'center'
  },
  radioCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    backgroundColor: '#E1E1E4',
  },
  selectedRadioCircle: {
    borderColor: 'transparent', // Border color when selected
  },
  selectedInnerCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#5AD625', // Inner circle color when selected
  },
  next: {
    position:'absolute',
    top: '85%'
  }
})