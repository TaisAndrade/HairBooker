import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const InserirAgendamentoStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'left',
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  inputContainer: {
    width: width * 0.9,
    marginBottom: 20,
  },

  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
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

  button: {
    backgroundColor: '#ff6f61',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },


});

export default InserirAgendamentoStyles;
