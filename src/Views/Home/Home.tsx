import {TouchableOpacity} from "react-native";
import {FlatList, Box} from "native-base";
import {SummaryCard} from "../../Components/SummaryCard/SummaryCard"
import {styles} from "../../Styles/Styles";

import { FontAwesome5 } from '@expo/vector-icons';
import {dummyData} from "../../../dummyData";
import React from "react";

export type Props = {
    navigation: any;
}

export const Home: React.FC<Props> = ({navigation}) => {
     const switchToMapHandler = async () => {
        await navigation.navigate("Map");
    }

    return (
        <Box>
            <FlatList data={dummyData} renderItem={({item}) => (
                <Box my={3}>
                    <SummaryCard
                        navigation={navigation}
                        gym={item}
                    />
                </Box>
            )}/>

            <TouchableOpacity
                onPress={() => switchToMapHandler()}
                style={[
                    styles.homeSwitchBtn,
                ]}
            >
                <FontAwesome5 name="map-marker-alt" size={30} color="#dc2626" />
            </TouchableOpacity>
        </Box>
    )
}
