import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

export default function AboutScreen() {
    return (
        <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>À Propos de TODEKAVIWO</Text>
                    <Text style={styles.description}>
                        Le concept TODEKAVIWO (Enfants d'un même Père) n'est pas une église ou une congrégation restreinte, mais une organisation chrétienne qui rassemble tous les enfants de Dieu de toutes dénominations confondues sans distinction d'églises ni de races pour l'unité du Corps du Christ et la réconciliation nationale.
                    </Text>
                    <Text style={styles.description}>
                        Parlant de la naissance du concept, alors qu'il priait pour le Togo, l'évangéliste GNAMAVO Koffi, alias "Tonton Édouard", a reçu du Seigneur l'instruction selon laquelle il fallait d'abord unifier le Corps de Christ. En réalité, le Corps de Christ était divisé par le mur des barrières dénominationnelles. C'est ainsi que l'évangéliste commença sur la Radio JVA (1997) une émission pour l'unification du Corps de Christ. Quelques années plus tard, un premier grand rassemblement eu lieu dans la chapelle internationale de l'ESTAO en 2003. Les autres éditions du grand rassemblement auront lieu chaque année au Palais des Congrès de Lomé.
                    </Text>
                    <Text style={styles.description}>
                        Sur le plan spirituel, le concept TODEKAVIWO organise chaque année un grand rassemblement de tous les enfants de Dieu au Palais des Congrès de Lomé, des armées de midi et veillées de prières au cours desquelles la cause du Togo, de ses gouvernants et aussi des populations est plaidée devant l'Éternel.
                    </Text>
                    <Text style={styles.description}>
                        Sur le plan social, le concept TODEKAVIWO fait don des matériaux didactiques à chaque rentrée aux orphelins. Les enfants malades sont visités à chaque Noël dans les hôpitaux afin de semer la joie dans leurs cœurs. Les veuves et les prisonniers sont aussi visités, et nous soutenons les hommes de Dieu en difficultés.
                    </Text>
                    <Text style={styles.description}>
                        Toute personne qui a reçu le Seigneur Jésus-Christ comme son Seigneur et Sauveur personnel et tous ceux qui croient à l'existence de Dieu sont TODEKAVIWO (enfant d'un même Père).
                    </Text>
                    <Text style={styles.description}>
                        Cœur sensible : Regroupe des volontaires qui ont mis sur eux de donner à chaque fin de mois un montant selon leur capacité en vue de soutenir l'œuvre du Seigneur dans les coins reculés du Togo et de venir en aide aux familles des pasteurs des coins reculés.
                    </Text>
                    <Text style={styles.description}>
                        Le siège du concept TODEKAVIWO est situé à Lomé, quartier Klikamé dans le von en face de la pharmacie St Joseph.
                    </Text>
                    <Text style={styles.description}>
                        REJOIGNEZ-NOUS sur les ondes de la Radio de l'Évangile (100.7 FM) chaque lundi de 22h à 23h30
                    </Text>
                    <Text style={styles.description}>
                        Récépissé : N°0463/MATD CL-SG-DDC-DC
                    </Text>
                    <Text style={styles.description}>
                        Avec le concept TODEKAVIWO, brisons nos barrières dénominationnelles et repentons-nous pour amener notre pays dans une nouvelle dimension.
                    </Text>
                </View>


        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        // backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'black'
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 20,
        color:'black'
    },
});
