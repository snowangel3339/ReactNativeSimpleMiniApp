import React, { useState, useEffect } from 'react';
import { ScrollView, Image, TouchableOpacity, View, Text, StyleSheet, StatusBar } from 'react-native';
import MenuBtn from '../component/MenuBtn';
import images from '../../assets/images';
import { useAtom } from 'jotai';
import { questionAtom, languageAtom } from '../context/QuestionProvider';
import { getQuestions } from '../utils/useApi';

interface QuestionData {
  options: string[];
  question: string;
  categoryId: string;
}

interface ExtractedData {
  options: string[];
  question: string;
  categoryId: string;
}

export default function Dashboard({ navigation } : { navigation: any }) {
  
  const [question, setQuestion] = useAtom(questionAtom);
  const [language, setLanguage] = useAtom(languageAtom);

  useEffect(() => {
    async function getData() {
      let Data: QuestionData[] = await getQuestions('questionnaire/');
      // console.log("Data", Data);
      const extractedData: ExtractedData [] = Data.map(({ options, question, categoryId } : { options : any, question: any, categoryId: any}) => ({
        options,
        question,
        categoryId
      }));
      setQuestion(extractedData);
      setLanguage('en');
    };
    getData();
  }, [])

  const [btnArray, setBtnArray] = useState([
    {image: images.megaphone, children: {"en" : 'BLOCK M'}, navUrl: "BlockM", backgroundColor: '#29ECF9'},
    {image: images.coupon, children: {"en" : 'BLOCK MUDI'}, navUrl: "BlockMudi", backgroundColor: '#1684F3'},
    {image: images.add, children: {"en" : 'BLOCK MED'}, navUrl: "BlockMed", backgroundColor: '#A42BF1'},
    {image: images.book, children: {"en" : 'BLOCK ED'}, navUrl: "BlockEd", backgroundColor: '#FE94B4'},
    {image: images.motocross, children: {"en" : 'BLOCK RIDE'}, navUrl: "BlockRide", backgroundColor: '#FD6A8A'},
    {image: images.payment, children: {"en" : 'ARTIST NFT'}, navUrl: "ArtistNFT", backgroundColor: '#F61444'},
    {image: images.coin, children: {"en" : 'BLOCK LOANS'}, navUrl: "BlockLoans", backgroundColor: '#CC081A'},
    {image: images.coins, children: {"en" : 'BLOCK FARM'}, navUrl: "BlockFarm", backgroundColor: '#FD6520'},
    {image: images.icons, children: {"en" : 'MESSAGES'}, navUrl: "Message", backgroundColor: '#FEAA73'},
    {image: images.user, children: {"en" : 'MY PROFILE'}, navUrl: "MyProfile", backgroundColor: '#FFDE32'},
    {image: images.logout, children: {"en" : 'LOGOUT'}, navUrl: "Logout", backgroundColor: '#5BCF27'},
  ])

  const handleClick = (name:string) => {
    console.log(name);
    navigation.navigate(name, {param: 0});
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} 
      style={{backgroundColor: 'black'}}
    >
      <StatusBar translucent backgroundColor={'transparent'} />
      <View style={styles.container}>
        <Image source={images.logo} style={styles.logo} />
        <Text style={styles.text}>Main Menu</Text>
        {
          btnArray.map((item, index) =>
            <MenuBtn key={index} 
              style={[styles.menuBtn, {backgroundColor: item.backgroundColor}]} 
              onPress={() => handleClick(item.navUrl)} 
              image={item.image} children={item.children["en"]} 
            />
          )
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
    marginVertical: 30,
    color: 'white',
    fontFamily: 'Sansation Bold',
    fontSize: 18
  }
})