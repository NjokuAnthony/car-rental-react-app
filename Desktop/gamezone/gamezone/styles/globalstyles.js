import {styleSheet} from 'react-native';


export const globalStyle = styleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    titleText: {
        fontFamily: "nunito-bold",
        fontsize: 18,
        color: "#333"
    },
    paragraph: {
        marginVertical: 18,
        lineHeight: 20
    }
})