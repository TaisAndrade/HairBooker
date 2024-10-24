import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#ffff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
  },

  icon: {
    width: 30,
    height: 30,
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
    backgroundColor: '#fff',
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