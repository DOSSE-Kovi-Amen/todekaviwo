import React, { useEffect, useRef, useState } from 'react';
import {
    StyleSheet,
    View,
    Alert,
    ActivityIndicator,
    Text,
    ScrollView,
    RefreshControl,
    Dimensions,
    TouchableOpacity,
    Button,
    Image,
    Linking,
} from 'react-native';
// import YoutubeIframe from 'react-native-youtube-iframe';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import { colors } from '../constants/colors';
import Carousel from 'react-native-reanimated-carousel';
import { Card2 } from '../components/Card';


const HomeScreen = () => {
    const isFocused = useIsFocused();
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [videoError, setVideoError] = useState(false);
    const width = Dimensions.get('window').width;
    const nav: any = useNavigation();

    const handleYoutubePress = () => {
        Linking.openURL('https://www.youtube.com/channel/UCMpMXcrxIohko3aLaugHr_g');
    };

    const handleFacebookPress = () => {
        Linking.openURL('https://www.facebook.com/profile.php?id=61552041984242&mibextid=ZbWKwL');
    };
    const handleSitePress = () => {
        Linking.openURL('https://www.todekaviwo.org');
    };
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setVideoError(false);
        setIsLoading(true) // Reset video error indicator
        setTimeout(() => {
            setRefreshing(false);
            setIsLoading(false);
        }, 3000);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000);

    }, [isFocused]);

    return (
        <ScrollView style={{ flex: 1, padding: 25, marginTop: 20 }}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <Text style={{ color: 'black', textAlign: "center", fontSize: 18, marginBottom: 15, fontWeight: 'bold' }}>Cliquer sur l'un des lien suivants</Text>
            <Text style={{ color: 'black', textAlign: "center", fontSize: 25, marginBottom: 15, fontWeight: 'bold' }}>👇</Text>

            {/* <TouchableOpacity onPress={() => nav.navigate('video')}>
                <Button title='Cliquer pour Suivre la tv' color={colors.mainColor} onPress={() => nav.navigate('video')} />
            </TouchableOpacity> */}
            <Card2 imageSource={require("../assets/tv.png")} text="TV Todekaviwo" onPress={() => nav.navigate('video')} />
            <Card2 imageSource={require("../assets/logo.png")} text="Radio Todekaviwo" onPress={() => nav.navigate('radio')} />
            <Card2 imageSource={require("../assets/facebook.png")} text="Facebook Todekaviwo" onPress={handleFacebookPress} />
            <Card2 imageSource={require("../assets/youtube.png")} text="Youtube Todekaviwo" onPress={handleYoutubePress} />
            <Card2 icon={'globe-africa'} text="Site Web" onPress={handleSitePress} />
       
            <View style={{ marginBottom:45 }}></View>
        </ScrollView>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 16,
        overflow: 'hidden',
        borderWidth: 3,
        // borderColor: 'lightgray',
        borderColor: colors.mainColor,
        borderRadius: 15,
        marginBottom: 8,
    },
    title: {
        marginLeft: 8,
        fontSize: 16,
        fontWeight: 'bold',
    },
});