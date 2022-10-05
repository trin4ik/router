import { Tabs } from "expo-router"

export default function TabsNavigation () {
	return (
		<Tabs screenOptions={{ headerShown: false, lazy: false }}>
			<Tabs.Screen name={"profile"}/>
			<Tabs.Screen name={"index"}/>
		</Tabs>
	)
}