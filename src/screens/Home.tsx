import { useColorScheme } from 'nativewind';
import { useEffect, useState } from 'react';
import { Text, ScrollView, Switch, View } from 'react-native';
import { List } from '../components/List';

export function Home() {
    const { colorScheme, toggleColorScheme } = useColorScheme();
    const [isDark, setIsDark] = useState<boolean>(false);
    const data = require('../data/data.json');
    const date = new Date();
    const hour = date.getHours();

    useEffect(() => {
        colorScheme === "dark" ? setIsDark(true) : setIsDark(false);
    }, [colorScheme]);

    return (
        <View className='flex-1 bg-white dark:bg-background pt-8'>

            <View className='flex-row justify-between items-center mx-5 my-2'>
                <View>
                    <Text className='text-black dark:text-white text-lg font-nunitoBold'>
                        {hour >= 6 ? hour >= 12 ? hour >= 19 ?  'Boa noite' : 'Boa tarde' : 'Bom dia' :'Boa madrugada'}
                    </Text>
                </View>

                <View className='flex-row'>
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
            </View>

            <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>


                <List data={data} title="Gradient" route="gradient" />

                <List data={data} title="Square" route="square" />

                <List data={data} title="Square Behind" route="square" />

                <List data={data} title="Circle" route="circle" />

            </ScrollView>
        </View>
    )
}