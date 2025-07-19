// // components/AuthForm.tsx
// import { useState } from 'react';
// import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

// export default function AuthForm({ mode }: { mode: 'signin' | 'signup' }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = () => {
//     if (mode === 'signin') {
//       console.log('Signing in with:', email, password);
//     } else {
//       console.log('Signing up with:', email, password);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>{mode === 'signin' ? 'Sign In' : 'Sign Up'}</Text>
//       <TextInput
//         placeholder="Email"
//         style={styles.input}
//         autoCapitalize="none"
//         keyboardType="email-address"
//         onChangeText={setEmail}
//         value={email}
//       />
//       <TextInput
//         placeholder="Password"
//         style={styles.input}
//         secureTextEntry
//         onChangeText={setPassword}
//         value={password}
//       />
//       <Button title={mode === 'signin' ? 'Sign In' : 'Sign Up'} onPress={handleSubmit} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { padding: 20, flex: 1, justifyContent: 'center' },
//   input: { borderBottomWidth: 1, marginBottom: 20, fontSize: 16, padding: 8 },
//   heading: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
// });
