import {FlatList, Box} from "native-base";
import {SummaryCard} from "../../Components/SummaryCard/SummaryCard"

import {dummyData} from "../../../dummyData";

export const Home = () => {
    return (
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

    )
}
