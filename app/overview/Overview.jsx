import { useState } from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { Stack } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import styles from "./overview.style";
import { FontAwesome, Entypo, AntDesign } from '@expo/vector-icons';
import { COLORS, SIZES, images, icons } from "../../constants";

const Overview = () => {
  const [activeType, setActiveType] = useState("Overview");
  const [activeGraphType, setActiveGraphType] = useState("pie");
  const mode = ["Overview", "Map", "Gallery"];

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


  function renderHeader(){
    return(
        <ImageBackground
        source={images.osaka}
        style={{
          width: 500,
          height: 500,
        }}
        resizeMode='cover'>
          <LinearGradient  
            colors={["transparent", "black"]} 
            locations={[0.7,1.2]} 
            style={styles.linearGradient}>
            {/* place info */}
            <View style={{
              position: 'absolute',
              bottom: 20, 
              left: 20}}>
              <Text style={styles.placeName}>OSAKA</Text>
              <Text style={styles.info}>2023.7.24(Mon.) - 2023.7.29(Sun.)</Text>
              
              {/* people */}
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Text style={styles.people}>with </Text>
                <Image
                  source={images.karina}
                  style={styles.profile}
                  resizeMode='cover' 
                />
                <Image
                  source={images.winter}
                  style={styles.profile}
                  resizeMode='cover' 
                />
                <Image
                  source={images.jen}
                  style={styles.profile}
                  resizeMode='cover'
                />
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
        
       
    )
  }


  return (
    
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite}}>
        <Stack.Screen
            options={{
                headerStyle: { backgroundColor: 'transparent'},
                headerShadowVisible: false,
                headerLeft: ()=>(
                  <FontAwesome name="chevron-left" size={30} color="#555" />
                ),
                headerRight: () => (
                  <Entypo name="cog" size={30} color="black" />
                ),
                headerTitle: "大阪行",
                headerTitleAlign: 'center'
            }}
        />
      <ScrollView showsVerticalScrollIndicator={false}>
      
        {renderHeader()}
      
        <View
            style={{
                flex: 1,
                padding: SIZES.medium
            }}
        >
          
          {/* contents */}
        
          <View style={styles.tabsContainer}>
            <FlatList
              data={mode}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.tab(activeType, item)}
                  onPress={() => {
                    setActiveType(item);
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
      
      </ScrollView>
    </SafeAreaView>
  );
};

export default Overview;
