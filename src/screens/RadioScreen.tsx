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
    Button,
    Image,
} from 'react-native';
// import YoutubeIframe from 'react-native-youtube-iframe';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Feather';
import TrackPlayer, { State, Event } from 'react-native-track-player';
import _ from 'lodash';

const RadioScreen = () => {
    const isFocused = useIsFocused();
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [second, setSecond] = useState(0);
    const [pause, setPause] = useState(false);


    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);
    useEffect(() => {
        TrackPlayer.play();

        TrackPlayer.addEventListener(Event.PlaybackState, async (data) => {

            // TrackPlayer.skip(1);
            // await TrackPlayer.skipToNext();


            if (data.state.toString() === "idle") {
                // Lorsque la piste est en état "Idle", passez à la piste audio suivante
                console.log(data.state);
                // await TrackPlayer.play();


                // await TrackPlayer.skipToNext()
                // const currentTrack = await TrackPlayer.getCurrentTrack();
                setIsLoading(false);
                Alert.alert("Oops radio éteinte!")

            }
            // if (data.state === State.Stopped && isLoading) {
            //     // La radio s'est arrêtée, commencez à jouer les autres fichiers audio
            //     console.log('stopped...');
            //     TrackPlayer.play();
            //     setIsLoading(true);
            // }
            if (data.state === State.Playing) {
                console.log('playing...');
                // TrackPlayer.play();
                setIsLoading(false);
            }

        });
        TrackPlayer.addEventListener(Event.PlaybackTrackChanged, async (data) => {
            if (data.nextTrack) {
                // Le lecteur est passé au morceau suivant dans la liste de lecture
                // Vous pouvez vérifier ici si le prochain morceau est le suivant que vous souhaitez lire
                // Si c'est le cas, commencez la lecture automatiquement
                await TrackPlayer.play();
            }
        });
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setSecond((prev) => prev + 1);
        }, 1000)
        return () => {
            clearInterval(interval);
        };
    }, [isFocused]);



    const playRadio = async () => {
        setPause(false);
        TrackPlayer.play();
    };

    const pauseRadio = async () => {
        console.log('pause');
        TrackPlayer.pause();
        setPause(true);
    };
    const styles = StyleSheet.create({
        container: {
            // flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        controls: {
            flexDirection: 'row',
            marginTop: 20,
        },
    });

    // function isStringJson(chaine: string) {
    //     try {
    //         JSON.parse(chaine);
    //         return true;
    //     } catch (error) {
    //         return false;
    //     }
    // }

    // useEffect(() => {
    //     const tracks: any = [{
    //         id: 1,
    //         url: "http://195.110.35.54:8000/radiotodakaviwo.mp3",
    //         title: 'Radio  todekaviwo',
    //         artist: 'Nom de l\'artiste 1',
    //         type: 'default',
    //     }]
    //     console.log('Start radio');

    //     TrackPlayer.setupPlayer().then(async () => {

    //         // Ajoutez toutes les pistes à la liste de lecture
    //         await TrackPlayer.add(tracks);

    //         // Écoutez l'événement onPlaybackQueueEnded

    //         await TrackPlayer.play();

    // TrackPlayer.addEventListener(Event.PlaybackState, async (data) => {

    //     // TrackPlayer.skip(1);
    //     // await TrackPlayer.skipToNext();


    //     if (data.state.toString() === "idle") {
    //         // Lorsque la piste est en état "Idle", passez à la piste audio suivante
    //         console.log(data.state);
    //         // await TrackPlayer.play();


    //         // await TrackPlayer.skipToNext()
    //         // const currentTrack = await TrackPlayer.getCurrentTrack();
    //         setIsLoading(false);
    //         Alert.alert("Oops radio éteinte!")

    //     }
    //     // if (data.state === State.Stopped && isLoading) {
    //     //     // La radio s'est arrêtée, commencez à jouer les autres fichiers audio
    //     //     console.log('stopped...');
    //     //     TrackPlayer.play();
    //     //     setIsLoading(true);
    //     // }
    //     if (data.state === State.Playing) {
    //         console.log('playing...');
    //         // TrackPlayer.play();
    //         setIsLoading(false);
    //     }

    // });
    // TrackPlayer.addEventListener(Event.PlaybackTrackChanged, async (data) => {
    //     if (data.nextTrack) {
    //         // Le lecteur est passé au morceau suivant dans la liste de lecture
    //         // Vous pouvez vérifier ici si le prochain morceau est le suivant que vous souhaitez lire
    //         // Si c'est le cas, commencez la lecture automatiquement
    //         await TrackPlayer.play();
    //     }
    // });
    //     });
    // }, [])

    // async function checkServerStatus() {
    //     try {
    //         const response = await fetch("http://vps89738.serveur-vps.net:8000/radiotodekaviwo");
    //         // Vérifiez si la réponse est valide (statut HTTP, contenu, etc.)

    //         // Si le serveur ne répond pas ou renvoie une erreur
    //         if (!response.ok) {
    //             // Affichez une alerte pour informer l'utilisateur du problème
    //             // Alert.alert('Erreur de serveur de diffusion', 'Le serveur de diffusion a rencontré une erreur.');
    //         } else {
    //             await TrackPlayer.pause()
    //             setPause(false);
    //         }
    //     } catch (error) {
    //         // Une erreur s'est produite lors de la vérification (peut être due à une absence de réseau)
    //         // console.error('Erreur de vérification du serveur de diffusion :', error);
    //         await TrackPlayer.play()
    //         setPause(true)
    //     }
    // }


    // useEffect(() => {
    //     let tracks: any = [];
    //     // checkServerStatus();

    //     const interval = setInterval(() => {
    //         checkServerStatus();
    //     }, 15000);

    //     fetch('https://dashboard.groupelynxvision.org/api/files/todekaviwo')
    //         .then((response) => {
    //             // Gestion de la réponse HTTP
    //             if (!response.ok) {
    //                 throw new Error('Erreur réseau');
    //             }
    //             // Analyse de la réponse JSON
    //             return response.json();
    //         })
    //         .then((data) => {
    //             // Gestion des données JSON
    //             console.log('====================================');
    //             console.log(data);
    //             console.log('====================================');
    //             // Faites quelque chose avec les données ici
    //             if (isStringJson(data?.files)) {
    //                 // setFiles(JSON.parse(data?.files));
    //                 JSON.parse(data?.files)?.map((url: any, index: number) => {
    //                     tracks.push({
    //                         id: index + 1,
    //                         url: "https://dashboard.groupelynxvision.org/storage/" + url,
    //                         title: 'Radio  todekaviwo',
    //                         artist: 'Nom de l\'artiste 1',
    //                         type: 'default',
    //                     })
    //                 })

    //             } else {
    //                 tracks.push({
    //                     id: 1,
    //                     url: "https://dashboard.groupelynxvision.org/storage/" + data?.files,
    //                     title: 'Radio  todekaviwo',
    //                     artist: 'Nom de l\'artiste 1',
    //                     type: 'default',
    //                 })
    //             }
    //             TrackPlayer.setupPlayer().then(async () => {
    //                 const shuffledPlaylist = _.shuffle(tracks);

    //                 // Ajoutez toutes les pistes à la liste de lecture
    //                 await TrackPlayer.add(shuffledPlaylist);
    //                 console.log('=============test2=======================');
    //                 console.log(tracks);
    //                 console.log('====================================');
    //                 // Écoutez l'événement onPlaybackQueueEnded

    //                 await TrackPlayer.play();

    //                 TrackPlayer.addEventListener(Event.PlaybackState, async (data) => {

    //                     // TrackPlayer.skip(1);
    //                     // await TrackPlayer.skipToNext();


    //                     if (data.state.toString() === "idle") {
    //                         // Lorsque la piste est en état "Idle", passez à la piste audio suivante
    //                         console.log(data.state);
    //                         await TrackPlayer.play();


    //                         await TrackPlayer.skipToNext()
    //                         const currentTrack = await TrackPlayer.getCurrentTrack();
    //                         setIsLoading(false);

    //                     }
    //                     if (data.state === State.Stopped && isLoading) {
    //                         // La radio s'est arrêtée, commencez à jouer les autres fichiers audio
    //                         console.log('stopped...');
    //                         TrackPlayer.play();
    //                         setIsLoading(true);
    //                     }
    //                     if (data.state === State.Playing) {
    //                         console.log('playing...');
    //                         TrackPlayer.play();
    //                         setIsLoading(false);
    //                     }

    //                 });
    //                 TrackPlayer.addEventListener(Event.PlaybackTrackChanged, async (data) => {
    //                     if (data.nextTrack) {
    //                       // Le lecteur est passé au morceau suivant dans la liste de lecture
    //                       // Vous pouvez vérifier ici si le prochain morceau est le suivant que vous souhaitez lire
    //                       // Si c'est le cas, commencez la lecture automatiquement
    //                       await TrackPlayer.play();
    //                     }
    //                   });
    //             });
    //         })
    //         .catch((error) => {
    //             // Gestion des erreurs
    //             console.error(error);
    //         });

    //     return () => {
    //         // TrackPlayer.reset()// Nettoyage lorsque le composant est démonté
    //         clearInterval(interval);
    //     }
    // }, [])



    return (
        <ScrollView
            contentContainerStyle={styles2.scrollView}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>

            {/* <Video
                source={{ uri: "http://vps89738.serveur-vps.net:8000/radiotodekaviwo" }}
                controls
                audioOnly
                paused={pause}
                onLoad={async (e) => {
                    setIsLoading(false)
                    await TrackPlayer.pause()
                }}
                onError={() => {
                    TrackPlayer.play()
                    console.log('====================================');
                    console.log('error');
                    console.log('====================================');
                }}
                onBuffer={async () => {
                    await TrackPlayer.play()
                    console.log('====================================');
                    console.log('error');
                    console.log('====================================');
                }}

                resizeMode='contain'
                style={{ position: "absolute", width: 0, height: 0, zIndex: 15 }}
            // Autres propriétés et gestionnaires d'événements ici
            /> */}

            <View style={{ width: '100%', height: '100%', backgroundColor: '#ffffff' }}>
                {isLoading ? (
                    <View style={{ height: 100, width: '100%', marginBottom: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size={80} color="green" />
                        <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Chargement de la radio en cours...</Text>
                    </View>
                ) : <View style={{ height: 150, flexDirection: 'row', justifyContent: 'center' }}>
                    <Icon2 name='radio' color={second % 2 == 0 ? '#5050509C' : '#000000'} size={second % 2 == 0 ? 170 : 190} />
                </View>
                }

                <View style={{ height: 150,marginBottom:40,padding:25, flexDirection: 'row', justifyContent: 'center' }}>
                    {/* <Icon name='radio' color='#ffffff' size={140} /> */}
                    <Image source={require("../assets/radio.png")} style={{
                        width: 175,
                        height: 175,
                        marginRight: 25,
                        objectFit: "cover"
                    }} />
                </View>
                <View style={styles.container}>
                    {/* <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#ffffff' }}>Radio Todekaviwo</Text> */}
                    <View style={styles.controls}>
                        <Button title="Jouer" onPress={playRadio} color='#528CBD' />
                        <View style={{ width: 15 }}></View>
                        <Button title="Pause" onPress={pauseRadio} color='#E41D1D' />
                    </View>

                </View>


            </View>

        </ScrollView>

    );
}
var styles2 = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        backgroundColor: 'black',
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    activityIndicator: {

    },
});

export default RadioScreen

