import React, { Component } from 'react';

import {PostCardStyle, PostUser, PostText, PostComment} from '../styles/posts';

import PostCard from './PostCard';

class Main extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Gustavo Alexandrino",
          avatar: "http://localhost:8080/img/gustavo.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://localhost:8080/img/diegofernandes.png"
            },
            date: "05 jun 2019",
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discor! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Astronauta",
          avatar: "http://localhost:8080/img/astronauta.png"
        },
        date: "20 Out 2019",
        content: "Galera, como eu faço pra chegar na Rocketseat Experience 2019?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://localhost:8080/img/diegofernandes.png"
            },
            date: "20 out 2019",
            content: "Aterrissa no aeroporto de Congonhas em São Paulo, Brasil. Vai rolar no SP Expo nos dias 25, 26 e 27 de novembro e vai ser massa!"
          },
          {
            id: 2,
            author: {
              name: "Gustavo Alexandrino",
              avatar: "http://localhost:8080/img/gustavo.png"
            },
            date: "21 out 2019",
            content: "Te dou uma carona até o local do evento quando você chegar, blz? É só mandar um zap!"
          },
        ]
      },
    ]
  };

  // Elemento escrito neste formato de classNamee precisa do método render()
  render() {
    const {posts} = this.state;

    return (
      <main>
        { posts.map(post => <PostCard key={post.id} data={post} />) }
      </main>
    )
  }
}

export default Main;