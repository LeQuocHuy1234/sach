/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import HomeScreen from './component/HomeScreen';
import ListCategoryScreen from './component/Category/ListCategoryScreen';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator } from "react-navigation";
import BookScreen from './component/Book/BookScreen';
import DetailBookScreen from './component/Book/DetailBookScreen';
import ListBookScreen from './component/Book/ListBookScreen';
import FavoriteStoryScreen from './component/FavoriteStoryScreen';

const StackHomeNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Book: {
    screen: BookScreen
  },
  DetailBook: {
    screen: DetailBookScreen
  }
});

const StackCategoryNavigator = createStackNavigator({
  ListCategory: {
    screen: ListCategoryScreen
  },
  Book: {
    screen: BookScreen
  },
  ListBook: {
    screen: ListBookScreen
  },
  DetailBook: {
    screen: DetailBookScreen
  },
});

const TabBarNavigator = createBottomTabNavigator({
  HomeTab: {
    screen: StackHomeNavigator
  },
  ListCategory: {
    screen:StackCategoryNavigator
  },
  FavoriteStory: {
    screen: FavoriteStoryScreen
  }
})

const DrawerNavigator = createDrawerNavigator({
  TabNavagator: TabBarNavigator,
  ListCategory: {
    screen:ListCategoryScreen
  },
  FavoriteStory: {
    screen: FavoriteStoryScreen
  }
})

export default createAppContainer(DrawerNavigator);

