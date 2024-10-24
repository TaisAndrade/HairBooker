import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff', 
  },

  title: { 
    paddingTop: 8,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
    color: '#333',
  },

  itemContainer: {
    flexDirection: 'column', 
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#ff6f61',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  
  textItem: {
    color: '#FFF', 
    fontSize: 16, 
    marginVertical: 2, 
  },
  
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 16,
  },

  // Estilos modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },

  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10,
    alignItems: 'center',
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },

  modalButton: {
    width: '100%',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#ff6f61',
    alignItems: 'center',
    marginVertical: 10,
  },

  modalButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },

  cancelButton: {
    backgroundColor: '#ccc',
  },

  cancelButtonText: {
    color: '#333',
  },
});

export default styles;
