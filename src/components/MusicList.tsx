import { useColorScheme } from "nativewind";
import { Text, TouchableHighlight, View } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from "tailwindcss/colors";

interface Props {
    item: Music;
    isActive: Music | null;
    setIsActive: any;
}

interface Music {
    id: number;
    order: number;
    name: string;
    duration: string;
}

export function MusicList({ item, isActive, setIsActive }: Props) {
    const { colorScheme } = useColorScheme();

    const playMusic = (() => {
        setIsActive(item);
    })

    return (
        <TouchableHighlight
            activeOpacity={0.7}
            underlayColor={colorScheme === "dark" ? colors.slate[900] : colors.zinc[100]}
            className="rounded-lg"
            onPress={playMusic}
        >
            <View className="flex-row h-16 w-full pl-5 justify-between items-center">
                <View className="flex-row items-center">
                    {
                        isActive && isActive.id === item.id ?
                            <FontAwesome name="play" size={18} color={colors.teal[500]} />
                            :
                            <Text className="text-black dark:text-white">
                                {
                                    item.order < 10 ?
                                        "0" + item.order
                                        :
                                        item.order
                                }
                            </Text>
                    }
                    <View className="ml-5 gap-y-1">
                        <Text className={`${isActive && isActive.id === item.id ? 'text-teal-500' : 'text-black dark:text-white'}`}>{item.name}</Text>
                        <Text className="text-zinc-400">{item.duration}</Text>
                    </View>
                </View>
                <TouchableHighlight
                    activeOpacity={0.7}
                    underlayColor={colorScheme === "dark" ? colors.slate[900] : colors.zinc[100]}
                    className="h-full px-5 justify-center rounded-lg"
                    onPress={() => { }}
                >
                    <Feather name="more-horizontal" size={20} color={colorScheme === "dark" ? colors.white : colors.black} />
                </TouchableHighlight>
            </View>
        </TouchableHighlight>
    )
}