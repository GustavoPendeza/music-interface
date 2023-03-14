import { FlatList, ListRenderItemInfo, Text, View } from 'react-native';
import { Card } from './Card';

interface Album {
    id: number;
    name: string;
    cover: string;
}

interface Props {
    data: Album[];
    title: string;
    route: any;
}

export function List({ data, title, route }: Props) {
    function renderItem({ item }: ListRenderItemInfo<Album>) {
        return (
            <Card item={item} title={title} route={route} />
        )
    }

    return (
        <View className='py-2'>
            <View className='py-3 px-3'>
                <Text className='text-black dark:text-white font-nunitoBold text-2xl capitalize'>{title}</Text>
            </View>

            <FlatList
                keyExtractor={(item, index) => item.name + item.id + index}
                data={data}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 4 }}
            />
        </View>
    )
}