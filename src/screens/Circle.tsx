import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { Dimensions, FlatList, Image, ListRenderItemInfo, ScrollView, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from "tailwindcss/colors";
import { Copyright } from "../components/Copyright";
import { MusicList } from "../components/MusicList";

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

export function Circle() {
    const [isActive, setIsActive] = useState<Music | null>(null);
    const route = useRoute();
    const { data } = route.params as Params;
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    const play = (() => {
        setIsActive(data.musics[0]);
    });

    function renderItem({ item }: ListRenderItemInfo<Music>) {
        return <MusicList item={item} isActive={isActive} setIsActive={setIsActive} circle={true} />
    }

    return (
        <View className="flex-1 bg-white dark:bg-background">

            <TouchableHighlight
                activeOpacity={0.7}
                underlayColor={colors.teal[100]}
                className="z-20 absolute right-0 h-28 w-28 justify-center bg-teal-100 rounded-bl-full"
                onPress={() => { }}
            >
                <View className="-right-12">
                    <Feather name="menu" size={28} color={colors.teal[500]} />
                </View>
            </TouchableHighlight>

            <ScrollView
                className="flex-1 z-10 "
                showsVerticalScrollIndicator={false}
            >

                <View className="absolute h-[500px] w-[500px] -top-16 -left-48 rounded-b-full rounded-r-full overflow-hidden">
                    <Image
                        source={{ uri: `${data.cover}` }}
                        className="absolute left-40"
                        style={{ width: screenWidth, height: screenHeight - 250 }}
                    />
                </View>

                <View className="flex-row mt-[485px] bg-white dark:bg-background justify-between px-8">
                    <View className="gap-1 w-2/3">
                        <Text
                            className="text-2xl text-black dark:text-white font-nunitoBold"
                            numberOfLines={2}
                        >
                            {data.name}
                        </Text>
                        <Text className="text-lg text-zinc-400 dark:text-white font-nunitoSemiBold">
                            {data.artist}  .  {data.release}
                        </Text>
                    </View>

                    <TouchableOpacity
                        activeOpacity={0.7}
                        className="flex-row bg-teal-500 h-14 w-24 rounded-full items-center justify-center"
                        onPress={play}
                    >
                        <FontAwesome name="play" size={16} color={colors.white} />
                    </TouchableOpacity>
                </View>

                <View className="pt-10 px-5 mb-5 bg-white dark:bg-background">
                    <FlatList
                        keyExtractor={(item) => item.id + item.name}
                        data={data.musics}
                        renderItem={renderItem}
                        scrollEnabled={false}
                        horizontal={false}
                    />
                </View>

                <Copyright data={data} />

            </ScrollView>

        </View>
    )
}