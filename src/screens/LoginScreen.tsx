import { StyleSheet, View } from 'react-native';
import * as React from 'react';
import { Text, TextInput, Button } from 'react-native-paper';
import { Layout } from '../components/Layout';


export default function App() {

  function togglePassword() {
    setHide(!hidePassword)
  }

  return (
    <Layout>
      <View style={styles.inputs}>
        <TextInput
          label="Email"
          value={mail}
          onChangeText={mail => setMail(mail)}
          style={styles.input}
          keyboardType='email-address'
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={password => setPassword(password)}
          style={styles.input}
          secureTextEntry={hidePassword}
          right={<TextInput.Icon icon={!hidePassword ? "eye" : "eye-off"} onPress={togglePassword} />}
        />
        <Button onPress={togglePassword} >{hidePassword ? 'Show' : 'Hide' } password</Button>
      </View>      
      <Button style={styles.loginbtn} mode="contained" onPress={() => console.log('Pressed')}>
        Login
      </Button>

      <Text style={styles.terms}>Read Terms and conditions</Text>
    </Layout>
  );
}

const styles = StyleSheet.create({
  inputs: {
    width: '100%',
  },
  input: {
    width: '80%',
    marginTop: '5%',
    marginLeft: 'auto',
    marginBottom: '0%',
    marginRight: 'auto',
  },
  loginbtn: {
    width: '60%',
    marginTop: '5%',
    marginRight: 'auto',
    marginBottom: '5%',
    marginLeft: 'auto',
  },
  terms: {
    textAlign: 'center',
    marginTop: '5%',
    marginBottom: '5%',
  },
});
