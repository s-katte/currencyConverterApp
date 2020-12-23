/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004 
}

const App = () => {

  const [inputValue, setInputValue] = useState(0);
  const [resultValue, setResultValue] = useState(0);

  return (
    <>
      <ScrollView>
        <SafeAreaView>
          
        </SafeAreaView>
      </ScrollView>
    </>
  )
}

export default App;
