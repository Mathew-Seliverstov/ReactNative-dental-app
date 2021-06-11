import React from 'react'
import { StyleSheet, Text, View, SectionList } from 'react-native'
import styled from 'styled-components'
import { Ionicons } from '@expo/vector-icons'

import Appointment from './components/Appointment'
import SectionTitle from './components/SectionTitle'

const DATA = [
  {
    title: '9 июня',
    data: [
        {
          time: '15:30',
          diagnosis: 'удаление зуба',
          active: true,
          user: {
            fullname: 'Вася Пупкин',
            avatar: 'https://sun9-40.userapi.com/c1928/u33594593/a_81a66875.jpg'
          }
        },
        {
          time: '18:00',
          diagnosis: 'ультрозвуковая чистка',
          user: {
            fullname: 'Даниил Грачев',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10g2rTtpAHwynpVAMFRy0A0iBH26KBpoyUJ7P5_s8hFWvVmIq8iU7x8dY9d6qQAIhLQM&usqp=CAU'
          }
        },
        {
          time: '20:15',
          diagnosis: 'пульпит, пломба',
          user: {
            fullname: 'Андрей Корольков',
            avatar: 'https://img5.goodfon.ru/wallpaper/nbig/0/7a/chelovek-vzgliad-portret-20.jpg'
          }
        }
      ]
  },
  {
    title: '28 июня',
    data: [
        {
          time: '10:45',
          diagnosis: 'удаление осколков',
          user: {
            fullname: 'Анастасия Ковалькова',
            avatar: 'https://c.wallhere.com/photos/bf/06/women_face_portrait-50458.jpg!d'
          }
        },
        {
          time: '16:30',
          diagnosis: 'пульпит',
          user: {
            fullname: 'Иван Петриченко',
            avatar: 'https://st.depositphotos.com/1771835/2038/i/950/depositphotos_20387253-stock-photo-happy-man-portrait-real-high.jpg'
          }
        },
      ]
  }
]

export default function App() {
  return (
    <Container>
      <SectionList 
        sections={DATA}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <Appointment {...item} />}
        renderSectionHeader={({ section: {title} }) => (
          <SectionTitle>{title}</SectionTitle>
        )}
      />

      <PlusButton>
        <Ionicons name="ios-add" size={36} color="white" />
      </PlusButton>
    </Container>
  );
}

const PlusButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background: #2a86ff;
  position: absolute;
  right: 25px;
  bottom: 25px;
  shadow-color: #2a86ff;
  shadow-opacity: 0.7;
  shadow-radius: 3.5;
  elevation: 4;
`

const Container = styled.View`
  flex: 1;
  margin-top: 50px;
`
