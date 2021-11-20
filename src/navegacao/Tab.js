import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator();
import PassoStack from '../components/PassoStack'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'

import Ionicons from 'react-native-vector-icons/Ionicons'

export default props => (
	<Tab.Navigator tabBarOption={{
		activeTiintColor: 'red',
			inactiveTintColor: 'blue',
			labelStyle: {fontsize: 30}
	}} initialRouteName="TelaB">
		<Tab.Screen name="TelaA" component={TelaA} />
		<Tab.Screen name="TelaB" component={TelaB} />
		<Tab.Screen name="TelaC" component={TelaC} />
	</Tab.Navigator>
);

