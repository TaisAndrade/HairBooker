import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 100, 
    height: 100, 
    marginBottom: 20, 
    marginTop: 50, 
    alignSelf: 'center',
  },

  slogan: {
    fontSize: 22, 
    fontWeight: 'bold',
    textAlign: 'center',
  },

  image: {
    width: 40, 
    height: 40, 
  },

  box: {
    width: 320, 
    height: 120, 
    justifyContent: 'center',
    alignItems: 'center', 
    marginVertical: 10, 
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#ff6f61',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },

  boxText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  
});

export default styles;
