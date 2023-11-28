import React, {useState} from "react";
import { Stack, useRouter } from "expo-router";
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity, 
  ActivityIndicator, 
  TextInput, 
  Image, 
  Modal 
} from "react-native";
import Task from './task'
import Checkbox from 'expo-checkbox';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const transparent = 'rgba(0,0,0,0.5)';

import styles from "./addExpense.style";
import { COLORS, images } from "../../../constants";
import addExpenseCard from "../../common/cards/addExpense/addExpenseCard";


const AddExpense = () => {
  const router = useRouter();
  const [openModal, setOpenModal] = React.useState(false);

  const [id, set_id] = useState(100);
  const [isChecked_cat, setChecked_cat] = useState(100);
  const [isChecked_pay, setChecked_pay] = useState(100);
  //跳出視窗
  function renderModal() {
    return (

      <Modal visible={openModal} animationType="slide" transparent={true}>
        <View
          style={{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: transparent,
          }}>
          <View 
            style={{
              backgroundColor: 'white',
              padding: 15,
              width: '90%',
              borderRadius: 10,
              height:250 //跳出視窗大小
            }}>

            <View>
              <FontAwesome.Button name="close" onPress={() => setOpenModal(false)}>
              </FontAwesome.Button>
            </View>

            {id == 0 ? (
              <View style={styles.container}>
              
                <View style={{flexDirection: 'row'}}>
                  <Checkbox 
                    style={{marginRight:20}} 
                    value={isChecked_cat == 0} 
                    onValueChange={() => setChecked_cat(0)} 
                  />
                  <Task text={'早餐'}/>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <Checkbox
                    style={{marginRight:20}}
                    value={isChecked_cat == 1}
                    onValueChange={() => setChecked_cat(1)}
                  />
                    <Task text={'午餐'}/>
                </View>


                <View style={{flexDirection: 'row'}}>
                  <Checkbox
                    style={{marginRight:20}}
                    value={isChecked_cat == 2}
                    onValueChange={() => setChecked_cat(2)}
                  />
                  <Task text={'晚餐'}/>
                </View>
              </View>
              ) : (
              <View style={styles.container}>
              
                <View style={{flexDirection: 'row'}}>
                  <Checkbox 
                    style={{marginRight:20}} 
                    value={isChecked_pay == 0} 
                    onValueChange={() => setChecked_pay(0)} 
                  />
                  <Task text={'現金'}/>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <Checkbox
                    style={{marginRight:20}}
                    value={isChecked_pay == 1}
                    onValueChange={() => setChecked_pay(1)}
                  />
                    <Task text={'信用卡'}/>
                </View>
              </View>
            )}
          </View>
        </View>
      </Modal>
    );
  }

  const loginWithFacebook = () => {
    console.log('Button pressed');
  };


  return (
    <View>
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>編輯品項</Text>
      </View>
      

      {/* <View style={styles.container}>
        <Image
          // {renderImage()}
          source={images.pie}
          style={{width: "70%",
          height: "70%",}}
          resizeMode='contain'
        />
      </View> */}
      
        
    
      
      <View style={styles.modifyItem}>
        <Text style={styles.itemTitle}>名稱 </Text>
        <TextInput placeholder="品項"></TextInput>
      </View>
      <View style={styles.modifyItem}>
        <Text style={styles.itemTitle}>價錢 </Text>
        <TextInput placeholder="價錢"></TextInput>
      </View>
      <View style={styles.modifyItem}>
        <Text style={styles.itemTitle}>分帳對象 </Text>
        <TextInput placeholder="People"></TextInput>
      </View>

      

      <View style={styles.modifyItem}>
        <Text style={styles.itemTitle}>類別 </Text>
        <TouchableOpacity onPress={() => { setOpenModal(true); set_id(0); }}>
          {/* <TextInput placeholder="類別"></TextInput> */}
          <Text>類別</Text>
        </TouchableOpacity>
        
      </View>

      <View style={styles.modifyItem}>
        <Text style={styles.itemTitle}>付費方式 </Text>
        <TouchableOpacity onPress={() => { setOpenModal(true); set_id(1); }}>
          {/* <TextInput placeholder="方式"></TextInput> */}
          <Text>方式</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.modifyItem}>
        <Text style={styles.itemTitle}>備註 </Text>
        <TextInput placeholder="備註"></TextInput>
      </View>
      {renderModal()}
    </View>


    
    
  );
};

export default AddExpense;
