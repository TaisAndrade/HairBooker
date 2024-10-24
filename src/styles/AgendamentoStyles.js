import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 50, 
  },

  barraNavegacao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ff6f61',
    borderRadius: 10,
    margin: 10,
  },

  tituloMes: {
    fontSize: 24, 
    color: '#FFF', 
  },

  mesContainer: {
    margin: 10,
  },

  mesAno: {
    fontSize: 24, 
    color: '#ff6f61',
    textAlign: 'center',
    marginBottom: 10, 
  },

  containerDiasDaSemana: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },

  diaDaSemana: {
    fontSize: 16,
    color: '#ff6f61',
  },

  grelhaCalendario: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  diaVazio: {
    width: '14.28%', 
    height: 50,
  },

  dia: {
    width: '14.28%', 
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#F8A3A1',
  },

  textoDia: {
    fontSize: 18,
    color: '#ff6f61', 
  },
  
  seta: {
    width: 30, 
    height: 30, 
  },

  imagemCalendario: {
    width: 100, 
    height: 100, 
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 10, 
  },

  textoSelecionarData: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20, 
    color: '#000',
  },

});

export default styles;
