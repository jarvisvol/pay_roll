import { Tabs } from 'expo-router'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs>
        <Tabs.Screen name='(home)' 
          options={{title:'Home', headerShown: false,
            tabBarIcon: ({}) => <FontAwesome name='home' size={18}/>
          }} 
        />
        <Tabs.Screen 
          name='(leaves)' 
          options={{title:'Leaves', headerShown: false,
            tabBarIcon: ({}) => <FontAwesome name='calendar-minus-o' size={18}/>
          }} 
          />
        <Tabs.Screen name='(attendence)' 
          options={{title:'Attendence', headerShown: false,
            tabBarIcon: ({}) => <FontAwesome name='calendar-check-o' size={18}/>
          }} 
        />
        <Tabs.Screen 
          name='(profile)' 
          options={{title:'Profile', headerShown: false,
            tabBarIcon: ({}) => <FontAwesome name='user' size={18}/>
          }} 
          />
        <Tabs.Screen name='(auth)' 
          options={{title:'auth', href: null, headerShown: false, tabBarStyle: {display: 'none'}}} 
        />
    </Tabs>
  )
}