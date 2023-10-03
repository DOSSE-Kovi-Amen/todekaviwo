/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
import TrackPlayer from 'react-native-track-player';


async function bootstrap() {
    await firestore().settings({
        persistence: false, // disable offline persistence
    });
};
TrackPlayer.registerPlaybackService(() => require('./service'));
// const audioTrack1 = {
//         id: 'station-1',
//         url: 'http://vps89738.serveur-vps.net:8000/radiotodekaviwo',
//         title: 'Nom de la station 1',
//         artist: 'Nom de l\'artiste 1',
//       };
//       TrackPlayer.setupPlayer().then(async () => {
//         // Ajoutez toutes les pistes à la liste de lecture
//         await TrackPlayer.add([audioTrack1]);
      
//         // Écoutez l'événement onPlaybackQueueEnded
//         // TrackPlayer.addEventListener('onPlaybackQueueEnded', async () => {
//         //   // La première station s'est terminée, passez à la deuxième station
//         //   await TrackPlayer.skipToNext();
//         // });
      
//         // Commencez la lecture de la première station
//         await TrackPlayer.play();
//       });
      
AppRegistry.registerComponent(appName, () => App);

