import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <Ionicons name='home' />,
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          title: 'Настройки',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <Ionicons name='settings' />,
        }}
      />
    </Tabs>
  );
}
