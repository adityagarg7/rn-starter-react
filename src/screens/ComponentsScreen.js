import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
	const greeting = 'Good Morning!';
	const name = 'Aditi';
	return (
		<View>
		<Text style={styles.textStyle}>Getting started with React Native</Text>
		<Text style={styles.subHeaderStyle}>My name is {name}</Text>
		</View>
		);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 45,
		color: "blue"
	},
	subHeaderStyle: {
		fontSize: 30,
		color: "red"
	}
});

export default ComponentsScreen;