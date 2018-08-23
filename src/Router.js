import AuthScreen from "./screens/AuthScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import {createStackNavigator, createTabNavigator} from "react-navigation";
import ReviewScreen from "./screens/ReviewScreen";
import SettingsScreen from "./screens/SettingsScreen";
import MapScreen from "./screens/MapScreen";
import DeckScreen from "./screens/DeckScreen";

const Router = createTabNavigator({
    welcome: {screen: WelcomeScreen},
    auth: {screen: AuthScreen},
    main: {
        screen: createTabNavigator({
            map: {screen: MapScreen},
            deck: {screen: DeckScreen},
            review: {
                screen: createStackNavigator({
                    review: {screen: ReviewScreen},
                    settings: {screen: SettingsScreen}
                })
            }
        })
    }
});

export default Router;