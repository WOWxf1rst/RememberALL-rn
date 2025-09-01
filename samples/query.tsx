import { useQuery } from '@tanstack/react-query';
import { fetch } from 'expo/fetch';
import { Text, View } from 'react-native';

export default function Index() {
  const { isPending, error, data } = useQuery({
    queryKey: ['ping'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3000/ping');
      return await response.json();
    },
  });

  if (isPending) return <Text>Loading...</Text>;

  if (error) return <Text>An error has occurred: {error.message}</Text>;
  console.log(data);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>{data.ping}</Text>
    </View>
  );
}
