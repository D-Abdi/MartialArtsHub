import {TouchableOpacity} from "react-native";
import {FlatList, Box} from "native-base";
import {SummaryCard} from "../../Components/SummaryCard/SummaryCard"
import {styles} from "../../Styles/Styles";

import {AntDesign} from "@expo/vector-icons";
import {dummyData} from "../../../dummyData";
import React from "react";

export type Props = {
    navigation: any
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
                        imageUrl={item.imageUrl}
                        disColor={item.disColor}
                        name={item.name}
                        discipline={item.discipline}
                        slogan={item.slogan}
                        description={item.description}
                        location={item.location}
                        distance={item.distance}
                    />
                </Box>
            )}/>

            <TouchableOpacity
                onPress={() => switchToMapHandler()}
                style={[
                    styles.homeSwitchBtn,
                ]}
            >
                <AntDesign name="pluscircle" size={60} color="black"/>
            </TouchableOpacity>
        </Box>
    )
}
