import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface Props {
    item: {
        id: number
        name: string;
        cover: string;
    };
    title: string;
    route: any;
}

export function Card({ item, title, route }: Props) {
    const { navigate } = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigate(route, { data: item, title: title })}
        >
            <View className="w-32 mx-2">
                <View className="h-32 w-32 rounded-lg mb-1">
                    <Image
                        source={{ uri: `${item.cover}` }}
                        className="h-full w-full"
                    />
                </View>

                <Text className="text-black dark:text-white font-nunitoBold text-sm" numberOfLines={2}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    )
}