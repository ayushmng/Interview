import React from "react";
import { SafeAreaView } from "react-native";
import MyComponent from "./App/Components/MyComponent";
import { IData } from "./App/Types/data";

function App(): React.JSX.Element {
  const data: Array<IData> = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Ball" },
    { id: 3, name: "Cat" },
    { id: 4, name: "Dog" },
    { id: 5, name: "Egg" },
    { id: 6, name: "Fish" },
    { id: 7, name: "Gun" },
    { id: 8, name: "Hut" },
    { id: 9, name: "Ink" },
    { id: 10, name: "Jar" },
  ];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <MyComponent data={data} />
    </SafeAreaView>
  );
}

export default App;
