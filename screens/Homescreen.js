import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/header';
import Card from '../components/card';
import Actions from '../components/actions';
import Transaction from '../components/transaction.';
import { useTheme } from '../ThemeContext';

const transaction = [
  {
    id: "1",
    title: 'Apple Store',
    category: 'Entertainment',
    amount: '-$5.99',
    icon: require('../assets/apple.png'),
  },
  {
    id: "2",
    title: 'Spotify',
    category: 'Music',
    amount: '-$12.99',
    icon: require('../assets/spotify.png'),
  },
  {
    id: "3",
    title: 'Money Transfer',
    category: 'Transaction',
    amount: '$300',
    icon: require('../assets/moneyTransfer.png'),
  },
  {
    id: "4",
    title: 'Apple Store',
    category: 'Entertainment',
    amount: '-$5.99',
    icon: require('../assets/apple.png'),
  },
  {
    id: "5",
    title: 'Apple Store',
    category: 'Entertainment',
    amount: '-$5.99',
    icon: require('../assets/apple.png'),
  },
  {
    id: "6",
    title: 'Apple Store',
    category: 'Entertainment',
    amount: '-$5.99',
    icon: require('../assets/apple.png'),
  },
  {
    id: "7",
    title: 'Apple Store',
    category: 'Entertainment',
    amount: '-$5.99',
    icon: require('../assets/apple.png'),
  },
  {
    id: "8",
    title: 'Apple Store',
    category: 'Entertainment',
    amount: '-$5.99',
    icon: require('../assets/apple.png'),
  },
];

function Homescreen() {
  const { colorScheme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colorScheme === 'dark' ? '#161622' : '#fff' }]}>
      <View style={{ flex: 1 }}>
        <Header />
        <Card />
        <View style={styles.action}>
          <Actions icon={require('../assets/send.png')} text={"Sent"} />
          <Actions icon={require('../assets/recieve.png')} text={"Receive"} />
          <Actions icon={require('../assets/loan.png')} text={"Loan"} />
          <Actions icon={require('../assets/topUp.png')} text={"Topup"} />
        </View>
        <View style={styles.transactioncont}>
          <Text style={[styles.transtext ,{color: colorScheme === 'dark' ? '#fff':'#000'}]}>Transaction</Text>
          <Text style={{ color: '#037bfc', fontSize: 14, fontWeight: '700' }}>See All</Text>
        </View>
        <FlatList
          data={transaction}
          showVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Transaction
              id={item.id}
              title={item.title}
              category={item.category}
              amount={item.amount}
              icon={item.icon}
              
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  transtext: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000', // Default text color
  },
  transactioncont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 30,
  },
});

export default Homescreen;
