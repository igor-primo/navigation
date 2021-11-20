import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
const Stack = createStackNavigator();
import PassoStack from '../components/PassoStack'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'

export default props => (
	<Stack.Navigator initialRouteName="TelaA">
		<Stack.Screen name="TelaA" 
		options={{title: 'Informacoes iniciais'}}>	
		{props => (
			<PassoStack {...props} avancar="TelaB">
				<TelaA />
			</PassoStack>
		)}
		</Stack.Screen>
		<Stack.Screen name="TelaB"> 
		{props => (
			<PassoStack {...props} avancar="TelaC" voltar 
				avancarParams = {{numero: 1007}}>
				<TelaB />
			</PassoStack>
		)}
		</Stack.Screen>
		<Stack.Screen name="TelaC"> 
		{props => (
			<PassoStack {...props} avancar="TelaC" voltar >
				<TelaC {...props} />
			</PassoStack>
		)}
		</Stack.Screen>
	</Stack.Navigator>
);

