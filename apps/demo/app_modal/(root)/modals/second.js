import { StatusBar, View, Text, StyleSheet } from "react-native"
import { Link } from "expo-router"

export default function Second ({ navigation }) {

	const isPresented = navigation.canGoBack()

	return (
		<View style={styles.container}>
			<Text style={styles.title}>
				Modal: <Text style={styles.uri}>/modals/second</Text>
			</Text>
			<Text style={styles.file}>app/(root)/modals/second.js</Text>
			{/* Use `../` as a simple way to navigate to the root. This is not analogous to "goBack". */}
			{!isPresented && <Link to="../">Dismiss</Link>}
			{isPresented && <StatusBar barStyle="light-content"/>}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		marginBottom: 10,
		fontWeight: "600",
	},
	uri: {
		fontWeight: "400",
	},
	file: {
		fontSize: 16,
		marginBottom: 20,
		color: "#666",
	},
	button: {
		marginTop: 20,
		fontSize: 16,
		borderRadius: 10,
		backgroundColor: "#333",
		color: "#fff",
		paddingVertical: 10,
		paddingHorizontal: 20,
		overflow: "hidden",
		textAlign: "center",
	},
	annotate: {
		color: "#666",
		fontSize: 12,
		marginTop: 5,
		marginLeft: 20,
	},
})
