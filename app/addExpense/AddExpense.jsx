import React, {useState} from "react";
import { 
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Modal,
  Image
} from "react-native";
import { Stack } from 'expo-router';
import Task from './task'
import { FontAwesome, Entypo, AntDesign } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import styles from "./addExpense.style";
import { COLORS, SIZES, images, icons } from "../../constants";

const AddExpense = () => {
  const transparent = 'rgba(0,0,0,0.5)';
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
              <TouchableOpacity onPress={() => { setOpenModal(false)}}>
                <AntDesign name="close" size={24} color="black" />
              </TouchableOpacity>
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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite}}>
      <Stack.Screen
          options={{
              headerStyle: { backgroundColor: 'transparent'},
              headerShadowVisible: false,
              headerLeft: ()=>(
                <FontAwesome name="chevron-left" size={20} color="#555" />
              ),
              headerRight: () => (
                <Text style={{
                  fontSize: 15,
                  color: 'dodgerblue', 
                  fontWeight: 'bold'
                }}> 完成</Text>
              ),
              headerTitle: "編輯品項",
              headerTitleAlign: 'center'
          }}
      />


      {/* image and text */}
      <View>
        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'center', 
          marginStart: 20,
          marginTop: 20, 
          marginBottom: 30
          }}>
          <Image
            source={images.taco}
            style={{
              width: 210, // 适当的宽度
              height: 150, // 适当的高度
              marginRight: 10,
              borderRadius: 15
            }}
            resizeMode='cover' // 适应容器大小
          />

          

          <View style={{ 
            flexDirection: 'column', 
            marginStart: 10
            }}> 
            <Text style={{
              fontSize: 18,
              fontWeight: 'bold'
            }}>時間</Text>
            <Text>2023/12/2 下午01:41</Text>
            <Text style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginTop: 20
            }}>地點</Text>
            <Text>大阪市中央區道頓堀</Text>
          </View>
        </View>

        
        <View style={styles.modifyContainer}>
          <Text style={styles.itemTitle}>名稱</Text>
          <View style={styles.modifyItem}>
            <TextInput placeholder="品項"></TextInput>
          </View>
        </View>

        <View style={styles.modifyContainer}>
          <Text style={styles.itemTitle}>價錢</Text>
          <View style={styles.modifyItem}>
            <TextInput placeholder="價錢"></TextInput>
          </View>
        </View>

        <View style={styles.modifyContainer}>
          <Text style={styles.itemTitle}>分帳對象</Text>
          <View style={styles.modifyItem}>
            <TextInput placeholder="對象"></TextInput>
          </View>
        </View>

        <View style={styles.modifyContainer}>
          <Text style={styles.itemTitle}>類別</Text>
            <View style={styles.modifyItem}>
              <TouchableOpacity onPress={() => { setOpenModal(true); set_id(0); }}>
                <Text>類別</Text>
              </TouchableOpacity>
            </View>
        </View>

        <View style={styles.modifyContainer}>
          <Text style={styles.itemTitle}>付費方式</Text>
          <View style={styles.modifyItem}>
            <TouchableOpacity onPress={() => { setOpenModal(true); set_id(1); }}>
              <Text>方式</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.modifyContainer}>
          <Text style={styles.itemTitle}>備註 </Text>
          <View style={styles.modifyItem}>
            <TextInput placeholder="備註"></TextInput>
          </View>
        </View>


        {renderModal()}
      </View>
    </SafeAreaView>
    
  );
};

export default AddExpense;
