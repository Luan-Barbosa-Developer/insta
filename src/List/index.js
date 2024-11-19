import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function List(props){

  const [like, setLike] = useState(props.data.likeada);

  function carregaIcone(likeada) {
    return likeada ? require('../img/likeada.png') : require('../img/like.png')
  }

  function mostraLikes(likers) {
    if (likers == 0) {
      return ;
    }

      return(
        <Text>{likers} {likers == 1 ? ' curtida' : ' curtidas'}</Text>
      );
  }  

  function mudarStatus() {
    const newLike = !like;
    setLike(newLike);

    const updateFeed = props.feed.map((item) => {      
      if (item.id === props.data.id) {
        return {...item, likeada: newLike}
      }

      return item;
    })

    props.setFeed(updateFeed);
      
  }


  return(
    <View style={styles.container}>
      <View style={styles.viewPerfil}>
        <Image 
        source={{uri: props.data.imgperfil}}
        style={styles.imgPerfil}
        />
        <Text style={styles.nomeUsuario}>{props.data.nome}</Text>
      </View>
      <View>
        <Image
        resizeMode='cover'
        source={{uri: props.data.imgPublicacao}}
        style={styles.imgPublicacao}
        />

      </View>
      <View style={styles.areaBtn}>
        <TouchableOpacity onPress={mudarStatus}>
          <Image
          source={carregaIcone(props.data.likeada)}
          style={styles.iconLike}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSend}>
          <Image
          source={require('../img/comment.png')}
          style={styles.iconLike}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSend} on>
          <Image
          source={require('../img/send.png')}
          style={styles.iconLike}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.curtida}>{mostraLikes(props.data.likers)}</Text>
      <Text style={styles.nomeRodape}> { props.data.nome} </Text>
      <Text style={styles.descRodape}> { props.data.descricao} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewPerfil:{
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5

  },
  imgPerfil:{
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  nomeUsuario:{
    fontSize: 17,
    fontWeight: 'bold', 
    paddingLeft: 15,
    color: '#000'
  },
  imgPublicacao:{
    height: 400,
    alignItems: 'center',
  },
  areaBtn:{
    flexDirection: 'row',
    padding: 5
  },
  iconLike:{
    height: 30,
    width: 30
  },
  btnSend:{
    paddingLeft: 5
  },
  curtida:{
    marginLeft: 8,
    fontWeight: 'bold'

  },
  nomeRodape:{
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 5,
  }, 
  descRodape:{
    paddingLeft: 5,
    paddingBottom: 10,
    fontSize: 15
  }

});