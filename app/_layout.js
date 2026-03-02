import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '../constants/colors';
import { ReadingListProvider } from '../contexts/ReadingListContext';

export default function RootLayout() {
  return (
    <ReadingListProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: Colors.background },
        }}
      />
    </ReadingListProvider>
  );
}
