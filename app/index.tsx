import { useQuery } from '@tanstack/react-query';
import { Text, View } from 'react-native';

export default function Index() {
  const { isPending, error, data } = useQuery({
    queryKey: ['ping'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3000/ping');
      return await response;
    },
  });

  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;
  console.log(data);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
