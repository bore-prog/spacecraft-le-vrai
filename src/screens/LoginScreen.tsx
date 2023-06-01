import { StyleSheet, View } from 'react-native';
import * as React from 'react';
import { Text, TextInput, Button } from 'react-native-paper';


export default function App() {

  const [mail, setMail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [hidePassword, setHide] = React.useState(true);

  function togglePassword() {
    setHide(!hidePassword)
  }

  return (
    <React.Fragment>
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
    </React.Fragment>
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
