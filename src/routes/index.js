import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Ionicons } from '@expo/vector-icons'

import Welcome from '../pages/Welcome'
import Signin from '../pages/Signin'
import Home from '../pages/Home'
import Profile from '../pages/Profile';
import Search from '../pages/Search';

const Tab = createBottomTabNavigator();

export default function Routes() {

    return(

        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#38a69d',
                tabBarShowLabel: false,
                tabBarStyle:{
                    position: 'absolute',
                    backgroundColor: '#171626',
                    borderTopWidth: 0,

                    bottom: 14,
                    left: 14,
                    right: 14,
                    elevation: 0,
                    borderRadius: 4,
                    height: 60
                }
            }}
        >


            <Tab.Screen
            name="Home"
            component={Home}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if(focused){
                        return <Ionicons name="home" size={size} color={color} />
                    }
                    return <Ionicons name="home-outline" size={size} color={color} />
                }
            }}
            />

            

            <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if(focused){
                        return <Ionicons name="game-controller" size={size} color={color} />
                    }
                    return <Ionicons name = "game-controller-outline" size={size} color={color} />
                }
            }}
            />

            <Tab.Screen
            name="Search"
            component={Search}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if(focused){
                        return <Ionicons name="search" size={size} color={color} />
                    }
                    return <Ionicons name="search-outline" size={size} color={color} />
                }
            }}
            />

        </Tab.Navigator>
    )

}
