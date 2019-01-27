import React from 'react';
import { ActivityIndicator ,Text, View, StyleSheet } from 'react-native';

//import Header from '../components/Header'; o navigation possue seu proprio header que acabamos de configurar
import PeopleList from '../components/PeopleList';
import axios from 'axios';

export default class PeoplePages extends React.Component {
 
 constructor(props) {
   super(props);

   this.state = {
     peoples: [],
     loading: false,
     error: false,
   };
 }

 componentDidMount(){
   this.setState({loading:true});
   /*Promises */
   setTimeout(() =>{
axios
   .get('https://randomuser.me/api/?nat=br&results=100')
   .then(response => {
      const { results } = response.data;
      this.setState({
          peoples: results,
          loading: false
    });
   }).catch(error =>{
     this.setState({
      loading: false, 
      error: true})
   });
   },3500)
 }

//  renderLoading(){
//    if(this.state.loading){
//     return <ActivityIndicator size="large" color="#426ef4"/>
//    }
//    return null;
//  }
 
  render() {
    return (
      <View style={styles.container}>
        { /*this.renderLoading()
        o codigo abaixo é a condicional para aparecer e desaparecer o carregamento na tela*/ }
       
       {
          this.state.loading 
          ?<ActivityIndicator size="large" color="#426ef4"/>
          :this.state.error
            ?<Text style={styles.error}>Ops... Algo deu errado =(</Text>
            :<PeopleList 
                peoples ={this.state.peoples}
                onPressItem={params =>{
                  this.props.navigation.navigate('PeopleDetail',
                     params);
                }} />
        } 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    color: '#bf0e0b',
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

