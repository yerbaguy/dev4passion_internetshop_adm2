import React from 'react';
import 'react-native-gesture-handler';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => <AppNavigator />;

export default App;



// // App.js
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import AddCategoryScreen from './src/screens/AddCategoryScreen';
// import ProductListScreen from '../dev4passion_internetshop_admin/screens/ProductListScreen';
// // import CartScreen from './src/screeens/AddCategoryScreen'
// import { HomeS}
// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         {/* <Stack.Screen name="Category" component={AddCategoryScreen} />
//         <Stack.Screen name="Product" component={ProductListScreen} />
//         <Stack.Screen name="Cart" component={CartScreen``} /> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// // HomeScreen.js
// const HomeScreen = () => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const unsubscribe = firebase.firestore()
//       .collection('categories')
//       .onSnapshot(snapshot => {
//         const categoryData = snapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }));
//         setCategories(categoryData);
//       });
//     return () => unsubscribe();
//   }, []);

//   return (
//     <FlatList
//       data={categories}
//       renderItem={({ item }) => <CategoryItem category={item} />}
//     />
//   );
// };



// import 'react-native-gesture-handler';
// import React, { useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { View, Text, StyleSheet } from 'react-native';
// import firebase from '@react-native-firebase/app'; // Import the Firebase app module
// import firestore from '@react-native-firebase/firestore';

// // Firebase configuration (replace with your own config from Firebase Console)
// // const firebaseConfig = {
// //   apiKey: "your-api-key",
// //   authDomain: "your-auth-domain",
// //   projectId: "your-project-id",
// //   storageBucket: "your-storage-bucket",
// //   messagingSenderId: "your-messaging-sender-id",
// //   appId: "your-app-id",
// // };
// const firebaseConfig = {
//   apiKey: "AIzaSyCEaylFdChEU-idKJjo5hF1L027hFIsdXk",
//   authDomain: "internetshop-8bc07.firebaseapp.com",
//   databaseURL: "https://internetshop-8bc07.firebaseio.com",
//   projectId: "internetshop-8bc07",
//   storageBucket: "internetshop-8bc07.firebasestorage.app",
//   messagingSenderId: "39838192060",
//   appId: "1:39838192060:web:63fe6d61fa881474625bb9",
//   measurementId: "G-PVRM21E6EV"
// };

// // Initialize Firebase only if it hasn’t been initialized yet
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// const Drawer = createDrawerNavigator();

// const DashboardScreen = () => {
//   useEffect(() => {
//     firestore()
//       .collection('test')
//       .doc('example')
//       .set({ message: 'Hello Firebase - dev4passion_internetshop_admin testtttting!' })
//       .then(() => console.log('Data set!'))
//       .catch(error => console.error('Error:', error));
//   }, []);

//   console.log('DashboardScreen rendered');
//   return (
//     <View style={styles.screen}>
//       <Text style={styles.text}>Dashboard Screen</Text>
//     </View>
//   );
// };

// const SettingsScreen = () => {
//   console.log('SettingsScreen rendered');
//   return (
//     <View style={styles.screen}>
//       <Text style={styles.text}>Settings Screen</Text>
//     </View>
//   );
// };

// const App = () => {
//   console.log('App rendered');
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Dashboard">
//         <Drawer.Screen name="Dashboard" component={DashboardScreen} />
//         <Drawer.Screen name="Settings" component={SettingsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });

// export default App;





// import 'react-native-gesture-handler';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { Text, View } from 'react-native';

// const Drawer = createDrawerNavigator();

// const HomeScreen = () => <View><Text>Home</Text></View>;
// const ProfileScreen = () => <View><Text>Profile</Text></View>;

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Profile" component={ProfileScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }



// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
