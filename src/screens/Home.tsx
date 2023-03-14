import { useColorScheme } from 'nativewind';
import { useEffect, useState } from 'react';
import { Text, ScrollView, Switch, View } from 'react-native';
import { List } from '../components/List';

export function Home() {
    const { colorScheme, toggleColorScheme } = useColorScheme();
    const [isDark, setIsDark] = useState<boolean>(false);
    const data = require('../data/data.json');

    useEffect(() => {
        colorScheme === "dark" ? setIsDark(true) : setIsDark(false);
    }, [colorScheme]);

    return (
        <View className='flex-1 bg-white dark:bg-background pt-8'>
            <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>

                <View className='flex-row justify-end items-center mx-5 mt-2'>
                    <Text className='text-black dark:text-white text-base font-nunitoBold'>
                        {colorScheme === "dark" ? "DarkMode" : "LightMode"}
                    </Text>
                    <Switch
                        trackColor={{ false: '#080815', true: '#FFFFFF' }}
                        thumbColor={colorScheme === "dark" ? '#FFFFFF' : '#080815'}
                        onValueChange={toggleColorScheme}
                        value={isDark}
                    />
                </View>

                <List data={data} title="Gradient" route="gradient" />

                <List data={data} title="Square" route="square" />

                <List data={data} title="Square Behind" route="square" />

                <List data={data} title="Circle" route="gradient" />

            </ScrollView>
        </View>
    )
}