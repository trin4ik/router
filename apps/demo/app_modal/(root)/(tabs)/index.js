import { StyleSheet, Text, View } from "react-native"
import { Link, Tabs } from "expo-router"

export default function Index () {
	return (
		<View style={styles.container}>
			<Tabs.Screen options={{ title: "Home" }}/>
			<View style={styles.main}>
				<Text style={styles.title}>Hello World</Text>
				<Link style={styles.button} href={"/profile"}>Go to profile</Link>
				<Text style={styles.annotate}>{"<Link href={\"/profile/orders\"} />"}</Text>

				<Link style={styles.button} href={"/modal"}>Single Modal</Link>
				<Text style={styles.annotate}>{"<Link href={\"/modal\"} />"}</Text>

				<Link style={styles.button} href={"/modals/first"}>Modal first from Stack</Link>
				<Text style={styles.annotate}>{"<Link href={\"/modals/first\"} />"}</Text>

				<Link style={styles.button} href={"/modals/second"}>Modal second from Stack</Link>
				<Text style={styles.annotate}>{"<Link href={\"/modals/second\"} />"}</Text>
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
