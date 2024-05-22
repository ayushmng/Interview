import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { IData } from "../Types/data";

const MyComponent = ({ data }: { data: IData[] }) => {
  const [selectedItems, setSelectedItems] = useState<Array<IData>>([]);
  const [dataSource, setDataSource] = useState<Array<IData>>([]);
  const [searchTerm, setSearchTerm] = useState("");
  // const inputRef = useRef(null);

  useEffect(() => {
    setDataSource(data);
  }, [data]);

  useEffect(() => {
    setDataSource(data.filter((item) => item.name.includes(searchTerm)));
  }, [searchTerm]);

  const handleSelect = (item: any) => {
    setSelectedItems((currentSelectedItems) => {
      if (currentSelectedItems.includes(item)) {
        return currentSelectedItems.filter(
          (selectedItem) => selectedItem !== item
        );
      } else {
        return [...currentSelectedItems, item];
      }
    });
  };

  const handleClear = () => {
    // inputRef.current.clear();
    setSearchTerm("");
  };

  return (
    <SafeAreaView style={{ padding: 8 }}>
      <TextInput
        // ref={inputRef}
        numberOfLines={1}
        maxLength={10}
        placeholder="Search by ABCD"
        onChangeText={setSearchTerm}
        value={searchTerm}
        placeholderTextColor={"grey"}
        style={styles.textInputStyles}
      />
      <TouchableOpacity style={styles.clearTextStyles} onPress={handleClear}>
        <Text style={{ color: "red" }}>Clear</Text>
      </TouchableOpacity>
      <FlatList
        data={dataSource}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ flexDirection: "row", padding: 4 }}
            onPress={() => handleSelect(item)}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {item.name}
            </Text>
            <Text style={{ alignSelf: "center", marginLeft: "5%" }}>
              {selectedItems.includes(item) ? "Selected" : "Not selected"}
            </Text>
          </TouchableOpacity>
        )}
        style={{ padding: 8, marginTop: "5%" }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInputStyles: {
    width: "62%",
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    alignSelf: "center",
    borderColor: "black",
  },
  clearTextStyles: {
    position: "absolute",
    alignSelf: "center",
    marginTop: "2%",
    right: "20%",
  },
});

export default MyComponent;
