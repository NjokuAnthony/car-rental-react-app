import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../screens/Home';
import ReviewsDetails from "../screens/ReviewsDetails";

const screens = {
    Home: {
        screen: Home
    },
    ReviewsDetails: {
        screen: ReviewsDetails
    }
}


const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);