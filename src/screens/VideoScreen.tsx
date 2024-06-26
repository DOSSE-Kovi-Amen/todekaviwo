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
    BackHandler,
    TouchableOpacity,
    Image,
} from 'react-native';
// import YoutubeIframe from 'react-native-youtube-iframe';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';
import storage from '@react-native-firebase/storage';
import WebView from 'react-native-webview';
import { colors } from '../constants/colors';
import TrackPlayer from 'react-native-track-player';
import { Project } from '../constants/type';

// const videos = [
//     require('../assets/video1.mp4'),
//     require('../assets/video2.mp4'),
//     require('../assets/video3.mp4'),
// ];

const VideoScreen = () => {

    const [refreshing, setRefreshing] = useState(false);
    const [istutoplaying, setIsTutoplaying] = useState(true);
    const [videoError, setVideoError] = useState(false);
    const [isloaded, setIsLoaded] = useState(false);
    const [isloading, setIsLoading] = useState(true);
    const [tvUrl, setTvUrl] = useState<string>("");

    const videoRef = useRef<any>(null);
    const videoRef2 = useRef<any>(null);
    const [textError, setTextError] = useState("");

    const nav = useNavigation();
    const [randomIndex, setRandomIndex] = useState(0);


    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setIsTutoplaying(false);

        setTimeout(() => {
            setRefreshing(false);
            setIsTutoplaying(false);

        }, 1000);
    }, []);

    useEffect(() => {
        TrackPlayer.pause();

    })
    useEffect(() => {
        fetch('https://dashboard.groupelynxvision.org/api/projects/todekaviwo')
        .then(response => {
          return response.json();
        })
        .then(async (data: Project) => {
          console.log('====================================');
          console.log(data.tv);
          console.log('====================================');
          setTvUrl(data.tv)
        })
    
      
    }, [])
    

    const handleVideoError = (e: any) => {
        setIsLoading(false)
        console.log('Video error:');
        Alert.alert("Oops Tv éteinte !")
        setTextError("Oops Tv éteinte !")
        // getStorage();
        setVideoError(true);
    };

    var styles2 = StyleSheet.create({
        backgroundVideo: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
        },
        container: {
            flex: 1,
        },
        scrollView: {
            flex: 1,
            // backgroundColor:'#FFDD0031',
            alignItems: 'center',
            justifyContent: 'center',
        },
        activityIndicator: {

        },
    });
    const styles3 = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        video: {
            width: Dimensions.get('window').width,
            height: 200,
        },
    });
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'black' }}
            contentContainerStyle={styles2.scrollView}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <TouchableOpacity style={{ padding: 15, backgroundColor: colors.mainColor, position: 'absolute', top: 20, left: 20, zIndex: 15 }} onPress={() => { nav.goBack() }}><Text style={{ color: 'white' }}>Retour</Text></TouchableOpacity>

            <View style={{ width: '100%', height: '100%', backgroundColor: 'black' }}>
               {tvUrl!=""&& <Video
                    ref={videoRef2}
                    source={{ uri: tvUrl }}
                    controls
                    paused={false}
                    resizeMode='contain'
                    style={{ position: 'absolute', width: "100%", height: '100%' }}
                    onBuffer={handleVideoError}                // Callback when remote video is buffering
                    onError={handleVideoError}
                    onLoadStart={() => {
                        console.log('load video');
                        setIsTutoplaying(true)
                    }}
                    onLoad={() => {
                        console.log('load end');
                        setVideoError(false);
                        setIsLoaded(true);
                        setIsLoading(false)
                        setIsTutoplaying(false)
                    }}
                // Autres propriétés et gestionnaires d'événements ici
                />}
                {!isloaded && < View style={{ flex: 1, padding: 25, width: '100%',backgroundColor:'black',  flexDirection: 'column', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
                    <Image source={require("../assets/tv.png")} style={{
                        width: '100%',
                        height: 300,
                        marginRight: 25,
                        objectFit: "contain"
                    }} />
                    <ActivityIndicator size={100} color="#00ff00" />
                    {textError != "" && <Text style={{ color: 'white', textAlign: "center", fontSize: 25, marginBottom: 15, fontWeight: 'bold' }}>{textError}</Text>}

                </View>}

                {/* {(istutoplaying || videoError) && <WebView
                    source={videos[randomIndex]}
                    // allowsInlineMediaPlayback={true}
                    allowsFullscreenVideo
                    startInLoadingState={true}
                    // paused={paused}
                    style={styles3.video}
                />} */}
                {/* {(istutoplaying || videoError) && <Video
                    source={videos[randomIndex]}
                    controls
                    paused={false}
                    onEnd={onVideoEnd}
                    resizeMode='contain'
                    style={{ position: 'absolute', width: "100%", height: '100%' }}
                // Autres propriétés et gestionnaires d'événements ici
                />} */}
            </View>
        </ScrollView >

    );
}

export default VideoScreen

