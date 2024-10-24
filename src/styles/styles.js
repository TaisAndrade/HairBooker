import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  logo: {
    width: 100, 
    height: 100, 
    marginBottom: 30, 
    marginTop: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 30, 
    fontWeight: 'bold',
    marginRight: 10,
  },

  image: {
    width: 40, 
    height: 40, 
  },

  inputContainer: {
    width: width * 0.9, 
    marginBottom: 20,
  },

  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },

  input: {
    width: '100%',
    height: 55,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
    marginBottom: 10, 
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },

  passwordInput: {
    flex: 1,
    height: 55, 
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
  },

  toggleButton: {
    position: 'absolute',
    right: 15,
    height: 55,
    justifyContent: 'center',
  },

  buttonContainer: {
    width: width * 0.9, 
    justifyContent: 'space-between',
    marginTop: 20,
  },

  buttonWrapper: {
    marginBottom: 15,
  },

  button: {
    height: 55,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  buttonContainer: {
    width: width * 0.9, 
    justifyContent: 'space-between',
    marginTop: 20,
  },

  loginButton: {
    backgroundColor: '#ff6f61', 
  },
  
  registerButton: {
    backgroundColor: '#ff6f61', 
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },

  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#F8A3A1', 
    borderRadius: 10,
    alignItems: 'center',
  },

  modalText: {
    fontSize: 18,
    color: '#fff', 
    marginBottom: 15,
  },

});


export default styles;
