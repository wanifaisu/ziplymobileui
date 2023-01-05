import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {colors} from './utils/Colors';
// import { StripeProvider } from "@stripe/stripe-react-native";
import {Provider as PaperProvider} from 'react-native-paper';
import StackNavigation from './Navigation/StackNavigation';
import { ToastProvider } from 'react-native-toast-notifications'
export default function App() {
  return (
    // <StripeProvider publishableKey="pk_test_51M5NuUSJEDFLnFPiNJv6fmJq1cQfTZKBm3HNcGzpHnJH9RgoJtkJa5iiLDJxO5kKHLutkRx4Vpv4vay6K2xFepQB00rd1tih4U">
      <ToastProvider successColor={colors.success}>
    <PaperProvider>
      <NavigationContainer style={styles.container}>
        <StackNavigation />
      </NavigationContainer>
    </PaperProvider>
    </ToastProvider>
    // </StripeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Gill Sans Extrabold, sans-serif',
  },
});
