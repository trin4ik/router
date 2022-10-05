import { Link, Tabs } from "expo-router"
import { StyleSheet, Text, View } from "react-native"

export default function Profile () {
	return (
		<View style={styles.container}>

			<Tabs.Screen parent={"../"} options={{ title: "Profile" }}/>

			<View style={styles.main}>
				<Text style={styles.title}>Profile</Text>
				<Link style={styles.button} href={"/profile/orders"}>Orders</Link>
				<Text style={styles.annotate}>{"<Link href={\"/profile/orders\"} />"}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
	},
	main: {
		flex: 1,
		justifyContent: "center",
	},
	title: {
		fontSize: 64,
		fontWeight: "bold",
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
