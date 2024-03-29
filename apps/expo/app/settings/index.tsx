import React, { useState, useEffect } from 'react'
import { useSignIn, useAuth } from '@clerk/clerk-react'

import { Input, Button, Toast, H3, XStack, useToastState, YStack } from '@my/ui'

import { Stack, Link, router } from 'expo-router'

import { Alert, Dimensions, View } from 'react-native'

export default function Signout() {
  const { isLoaded, signOut } = useAuth()
  if (!isLoaded) {
    return null
  }

  return (
    <YStack justifyContent="center" alignItems="center">
      <Stack.Screen
        options={{
          title: 'Settings',
          headerLeft: () => (
            <Button
              onPress={() => {
                router.replace('bottomnav')
              }}
            >
              Back
            </Button>
          ),
        }}
      />
      <View style={{ height: 100 }} />
      <XStack>
        <Toast />
        <View style={{ width: 300 }}>
          <Button
            onPress={() => {
              Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {
                  text: 'Sign Out',
                  onPress: async () => {
                    await signOut()
                    router.replace('index')
                  },
                },
              ])
            }}
          >
            Sign Out
          </Button>
        </View>
      </XStack>
    </YStack>
  )
}
