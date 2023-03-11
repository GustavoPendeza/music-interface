import { useNavigation, useRoute } from '@react-navigation/native';
import { useColorScheme } from 'nativewind';
import { useState } from 'react';
import { FlatList, Image, ListRenderItemInfo, ScrollView, Text, TouchableHighlight, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from 'tailwindcss/colors';
import { Copyright } from '../components/Copyright';
import { MusicList } from '../components/MusicList';

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

export function Square() {
    const [isActive, setIsActive] = useState<Music | null>(null);
    const route = useRoute();
    const { data } = route.params as Params;
    const { goBack } = useNavigation()
    const { colorScheme } = useColorScheme();

    function renderItem({ item }: ListRenderItemInfo<Music>) {
        return <MusicList item={item} isActive={isActive} setIsActive={setIsActive} />
    }

    return (
        <View className='flex-1 bg-white dark:bg-background'>

            <View className='h-96 bg-teal-500 absolute top-0 left-0 right-0 rounded-br-[100px]'></View>

            <View className='z-10 bg-white dark:bg-background rounded-xl absolute right-0 top-14'>
                <TouchableHighlight
                    className='h-14 w-12 bg-white dark:bg-background rounded-tl-xl items-center justify-center border-b border-zinc-200'
                    onPress={goBack}
                    activeOpacity={0.7}
                    underlayColor={colorScheme === "dark" ? colors.slate[900] : colors.zinc[100]}

                >
                    <Feather name="arrow-left" size={28} color={colors.teal[500]} />
                </TouchableHighlight>
                <TouchableHighlight
                    className='h-14 w-12 bg-white dark:bg-background rounded-bl-xl items-center justify-center border-b border-zinc-400'
                    onPress={() => {}}
                    activeOpacity={0.7}
                    underlayColor={colorScheme === "dark" ? colors.slate[900] : colors.zinc[100]}
                >
                    <Feather name="search" size={26} color={colors.teal[500]} />
                </TouchableHighlight>
            </View>

            <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
                <View className='mx-14 absolute top-20 left-0 right-0'>
                    <Text className='text-white text-3xl font-nunitoBold' numberOfLines={2}>{data.name}</Text>
                    <Text className='text-zinc-100 text-xl font-nunitoRegular'>
                        {data.musics.length} songs . {data.release}
                    </Text>
                </View>

                <View className='items-center absolute top-52 left-0 right-0'>
                    <Image source={{ uri: data.cover }} className="h-72 w-72 rounded-3xl" />
                </View>

                <View className='h-96'></View>

                <View className="mt-36 mx-5 mb-5 rounded-3xl bg-white dark:bg-background">
                    <FlatList
                        keyExtractor={(item) => item.order + item.name}
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