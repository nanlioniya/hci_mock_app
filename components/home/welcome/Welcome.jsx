import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { Stack, useRouter, Link } from 'expo-router';
import ScreenHeaderBtn from '../../../components/common/header/ScreenHeaderBtn'
import styles from "./welcome.style";
import { icons, SIZES, images } from "../../../constants";
import { NavigationContainer } from "@react-navigation/native";

const mode = ["Overview", "Map", "Gallery"];
const graphMode = ["pie", "line"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeType, setActiveType] = useState("Overview");
  const [activeGraphType, setActiveGraphType] = useState("pie");

  const renderImage = () => {
    switch (activeGraphType) {
      case "line":
        return(
            <Image
            source={images.line}
            style={styles.lineGraphimageDisplay}
            resizeMode='cover'
          />
        )
      
      case "pie":
        return(
          <Image
            // {renderImage()}
            source={images.pie}
            style={styles.pieChartimageDisplay}
            resizeMode='cover'
          />
        )
      default:
        return null;
    }
  }


  const renderContent = () => {
    switch (activeType) {
      case "Overview":
        return (
          
            
          <View>
            <View style={styles.container}>
              
              <Text style={styles.overviewDisplay}>
                Budget: 30000 NTD{'\n'}
                Expense: 25404 NTD
              </Text>
        
          
              <TouchableOpacity style={styles.pieBtn}
                onPress={() => {
                  setActiveGraphType("pie");
                }}>
                  <Image
                  
                  source={icons.pieChart}
                  resizeMode="contain"
                  style={styles.pieChartIconImage}
                />
                
              </TouchableOpacity>
              <TouchableOpacity style={styles.lineBtn}
                onPress={() => {
                  setActiveGraphType("line");
                }}>
                <Image
                
                source={icons.lineGraph}
                resizeMode="contain"
                style={styles.lineGraphIconImage}
                />
                
              </TouchableOpacity>
              {renderImage()}
              
            </View>
          </View>
          

          
        )  
      
      case "Map":
        return (
          <Text>
            Map Content
          </Text>
        )  
      
      case "Gallery":
        return (
          <Text>
            Gallery Content
          </Text>
        )

      default:
        return null;
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>OSAKA</Text>
        <Text style={styles.userName}>2023.7.24(Mon.) - 2023.7.29(Sun.)</Text>
      </View>

      {/* empty */}
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}></Text>
      </View>

      {/* <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View> */}
      
      <View style={styles.tabsContainer}>
        <FlatList
          data={mode}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeType, item)}
              onPress={() => {
                setActiveType(item);
                //router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeType, item)}>
                  {item}
              </Text>
              
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
          
        />
        
      </View>
      


      {/* button display */}
      <View>
        <View style={styles.container}>
          {renderContent()}
        </View>
      </View>

      
      
    </View>
  );
};

export default Welcome;
