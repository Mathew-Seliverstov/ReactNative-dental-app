import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components/native'

const Group = ({ user, diagnosis, active, time }) => {
	return (
		<GroupItem>
			<Avatar source={{uri: user.avatar}} />

			<View style={{ flex: 1 }}>
				<FullName>{user.fullname}</FullName>
				<ProcedureName>{diagnosis}</ProcedureName>
			</View>
			<GroupDate active={active}>{time}</GroupDate>
		</GroupItem>
	)
}

Group.defaultProps = {
	title: 'Untitled',
	items: []
}

const GroupDate = styled.Text`
  background: ${props => (props.active ? '#2a86ff' : '#e9f5ff')};
  color: ${props => (props.active ? '#ffffff' : '#4294ff')};
  border-radius: 18px;
  font-weight: bold;
  font-size: 14px;
  width: 70px;
  height: 32px;
  text-align: center;
  line-height: 28px;
`

const ProcedureName = styled.Text`
  font-size: 16px;
  color: #8b979f;
`

const FullName = styled.Text`
  font-size: 16px;
  font-weight: bold;
`

const Avatar = styled.Image`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 15px;
`

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
`

export default Group
