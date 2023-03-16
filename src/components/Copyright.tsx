import { Text, View } from "react-native";

interface Album {
    artist: string;
    release: number;
}

interface Props {
    data: Album;
}

export function Copyright({ data }: Props) {
    return (
        <View className='mx-3 mb-2 bg-white dark:bg-background items-center'>
            <Text className='text-black dark:text-white text-base font-nunitoSemiBold'>
                © ℗ {data.release} {data.artist}
            </Text>
        </View>
    )
}