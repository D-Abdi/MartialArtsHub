import {supabase} from "../../supabase";
import {useToast} from "native-base";

const toast = useToast();
export const fetchGyms = async () => {
    const { data, error } = await supabase.from('gyms').select(`
            id,
            name,
            description,
            slogan,
            discipline,
            locationName,
            disColor,
            imageUrl,
            distance,
            phone,
            email,
            website,
            longitude,
            latitude
        `)
    if (error) {
        await console.log("ERROR", error)
        return error
    } else {
        await toast.show({
            description: "Gyms retrieved!",
            placement: "top",
        })
        return data
    }
}
