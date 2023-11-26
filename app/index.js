import { useState } from 'react';
import { 
    View, 
    ScrollView, 
    SafeAreaView,
    ImageBackground,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList,
    Animated
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
// import LinearGradient from 'react-native-linear-gradient';


import { COLORS, icons, images, SIZES } from '../constants';
import { 
    AddExpense, Overview, ScreenHeaderBtn, Welcome 
} from '../components'
import styles from '../components/common/header/screenheader.style';



const Home = () => {

    const router = useRouter();

    

    function renderHeader(){
        return(
            <View
                style={{
                    height: SIZES.height > 700 ? "65%" : "60%"
                }}
            >
                <ImageBackground
                    source={images.osaka}
                    style={{
                        flex: 1,
                        justifyContent: 'flex-end'
                    }}
                    resizeMode='cover'
                >
                    {/* <LinearGradient
                        start={{ x:0, y:0 }}
                        end={{ x:0, y:1 }}
                        colors={[
                            COLORS.transparent,
                            COLORS.black
                        ]}
                        style={{
                            height: 200,
                            justifyContent: 'flex-end',
                            paddingHorizontals: SIZES.padding
                        }}
                    >
                    </LinearGradient> */}


                    {/* text on photo */}
                    {/* <View style={styles.container}>
                        <Text style={styles.title}>OSAKA</Text>

                    </View> */}

                </ImageBackground>
            </View>
        )
    }
    
    

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.
        lightWhite}}>





            {renderHeader()}
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: 'transparent'},
                    headerShadowVisible: false,
                    headerLeft: ()=>(
                        <ScreenHeaderBtn iconUrl={icons.back} dimension="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={icons.settings} dimension="80%" />
                    ),
                    headerTitle: ""
                }}
            />
            
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium
                    }}
                >
                    

                    <Welcome 

                    />

                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Home;