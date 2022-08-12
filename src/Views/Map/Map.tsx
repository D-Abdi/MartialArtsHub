import React, { useEffect } from "react"
import axios from "axios"
import { Text } from "native-base"

export const Map = () => {
    const config = {
        method: 'get',
        url: 'https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20United%20Kingdom&apiKey=c48817bcfee44980a44c1f74243a8fbf',
        headers: { }
    };

    useEffect(() => {
        axios(config)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [])

    return (
        <Text>It Works!</Text>
    )
}
