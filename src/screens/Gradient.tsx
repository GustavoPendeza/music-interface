import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { FlatList, ImageBackground, ListRenderItemInfo, ScrollView, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from 'tailwindcss/colors';
import { MusicList } from "../components/MusicList";
import { useColorScheme } from 'nativewind';
import { Copyright } from "../components/Copyright";

interface Music {
    id: number;
    order: number;
    name: string;
    duration: string;
}

interface Album {
    name: string;
    artist: string;
    release: number;
    cover: string;
    musics: Music[];
}

interface Params {
    data: Album;
}

export function Gradient() {
    const [isActive, setIsActive] = useState<Music | null>(null);
    const [isShuffle, setIsShuffle] = useState<Boolean>(false);
    const { colorScheme } = useColorScheme();
    const DARK_MODE = ['#07081500', '#070815'];
    const LIGHT_MODE = ['#FFFFFF00', '#FFFFFF'];
    const route = useRoute();
    const { data } = route.params as Params;
    const { goBack } = useNavigation()

    const play = (() => {
        if (isShuffle) {
            setIsActive(data.musics[Math.floor(Math.random() * data.musics.length)])
        } else {
            setIsActive(data.musics[0]);
        }
    });

    const shuffle = (() => {
        if (isShuffle) {
            setIsShuffle(false);
        } else {
            setIsShuffle(true);
        }
    });

    function renderItem({ item }: ListRenderItemInfo<Music>) {
        return <MusicList item={item} isActive={isActive} setIsActive={setIsActive} circle={false} />
    }

    return (
        <View className="flex-1 bg-white dark:bg-background">

            <ImageBackground
                source={{ uri: `${data.cover}` }}
                className="h-3/4 absolute -top-14 right-0 left-0"
                resizeMode="cover"
            >
            </ImageBackground>

            <TouchableOpacity activeOpacity={0.7} onPress={goBack} className="z-10 absolute ml-2 mt-8">
                <Feather name="arrow-left" size={32} color={colorScheme === "dark" ? colors.white : colors.black} />
            </TouchableOpacity>

            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>

                <View className="h-96 w-full">
                    <LinearGradient colors={colorScheme === "dark" ? DARK_MODE : LIGHT_MODE} className="h-full w-full">
                    </LinearGradient>
                </View>

                <View className="bg-white dark:bg-background">
                    <View className="items-center mt-2">
                        <Text className="text-black dark:text-white text-3xl font-nunitoBold">{data.name}</Text>
                        <Text className="text-zinc-500 text-lg font-nunitoRegular mt-1">{data.artist} . {data.release}</Text>
                    </View>

                    <View className="flex-row my-7 justify-evenly">
                        <TouchableOpacity
                            activeOpacity={0.7}
                            className="flex-row bg-teal-500 h-14 w-40 rounded-full items-center justify-center"
                            onPress={play}
                        >
                            <FontAwesome name="play" size={18} color={colors.white} />
                            <Text className="text-white text-base font-nunitoSemiBold ml-2">Play</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.7}
                            className={`flex-row ${isShuffle ? 'border-teal-500' : 'border-black dark:border-white'} border-solid border-2 h-14 w-40 rounded-full items-center justify-center`}
                            onPress={shuffle}
                        >
                            <Feather name="repeat" size={18} color={isShuffle ? colors.teal[500] : (colorScheme === "dark" ? colors.white : colors.black)} />
                            <Text className={`${isShuffle ? 'text-teal-500' : 'text-black dark:text-white'} text-base font-nunitoSemiBold ml-2`}>Shuffle</Text>
                        </TouchableOpacity>
                    </View>

                    <View className="mx-5 mb-5">
                        <FlatList
                            keyExtractor={(item) => item.order + item.name}
                            data={data.musics}
                            renderItem={renderItem}
                            scrollEnabled={false}
                            horizontal={false}
                        />
                    </View>
                </View>

                <Copyright data={data} />

            </ScrollView >
        </View >
    )
}