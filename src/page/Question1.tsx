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

export default function Question1({ navigation, route} : {navigation: any, route: any}) {
  
  const [question, setQuestion] = useAtom(questionAtom);
  const [language, setLanguage] = useAtom(languageAtom);
  const [checked, setChecked] = useState('');
  const id = route.params.param
  const que1 = question[id];
  // console.log(que1);
  
  const handleNav = (name: string, p:Number) => {
    console.log(que1);
    navigation.navigate(name, {param: p});
  }

  const handleSubmit = async () => {
    console.log("Successfully Saved");
    if (checked !== "") {
      const data = {
        questionId : que1.categoryId,
        selectedOption: checked
      }
      let Data = await postAnswer('questionnaire/question', data);
      console.log(checked, que1.categoryId);
      if (id === 3 ) {
        navigation.navigate("CompleteQuestion");
      } else {
        navigation.navigate("BlockM"+ (id+2).toString(), {param: id+1});
      }
    }
  }
  return (
    <View style={styles.contain}
    >
      <StatusBar translucent backgroundColor={'transparent'} />
      <View style={styles.container}>
        <Image source={images.logo} style={styles.logo} />
        <View style={styles.subHead}>
          <View style={[styles.subHead, {width: '50%', padding: 0, marginVertical: 0}]}>
            <TouchableOpacity 
              onPress={() => {
                // handleNav('Home')
                if (route.params.param === 0) {
                  handleNav("Home", 100)
                }
                else {
                  handleNav("BlockM"+(route.params.param).toString(), (route.params.param-1))
                }}
              }
            >
              <Image source={images.back} style ={styles.back} />
            </TouchableOpacity>
            <Text style={styles.text}>ACTIVE ADS</Text>
          </View>
          <Image source={images.menu} style ={styles.back} />
        </View>
        <Text style={[styles.text, {color: 'white'}]}>Get EARN tokens now!</Text>
        <Text style={[styles.text, {color: 'white', width: '95%', fontSize: 16, marginTop: 15, marginLeft: '5%'}]}>{que1.question}</Text>
        <View style={styles.option}>
          {
            que1.options.map((item: string, index: number) =>  
              <TouchableOpacity 
                key={index}
                style={[
                  styles.subHead, 
                  {backgroundColor: '#212332', 
                    justifyContent: 'flex-start', 
                    gap: 20, 
                    paddingVertical: 10, 
                    width: '100%',
                    marginVertical: 0,
                    height: 60,
                    borderRadius: 10
                  }
                ]}
                onPress={() => setChecked(item)}  
              >                
                <View style={[
                  styles.radioCircle,
                  checked === item && styles.selectedRadioCircle,
                ]}>
                  {checked === item && <View style={styles.selectedInnerCircle} />}
                </View>
                <Text style={[styles.text, {color: 'white', fontSize: 14, width:'80%'}]}>{item}</Text>
              </TouchableOpacity>
            )
          }
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
          <Image source={images.next} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contain: {
    backgroundColor: 'black', 
    height: '100%'
  },
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
    gap: 10,
    marginTop: 20, 
    width: '100%',
    paddingHorizontal: '5%'
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