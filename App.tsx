import { StatusBar } from "react-native";
import { Routes } from "./src/routes";
import SystemNavigationBar from 'react-native-system-navigation-bar';
import { useColorScheme } from "nativewind";

export default function App() {
    const { colorScheme } = useColorScheme();

    SystemNavigationBar.setNavigationColor(
        `${colorScheme === "dark" ? '#080815' : "#FFFFFF"}`,
        `${colorScheme === "dark" ? 'light' : "dark"}`,
        'navigation'
    );

    return (
        <>
            <Routes />
            <StatusBar
                barStyle={colorScheme === "dark" ? 'light-content' : 'dark-content'}
                backgroundColor='transparent'
                translucent
            />
        </>
    )
}