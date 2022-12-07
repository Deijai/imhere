import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";

import { Participant } from "../../components/Participant";

const participants = ["Deijaí"];

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [name, setName] = useState<string>("");

  useEffect(() => {}, [participants]);

  const handleParticipantAdd = () => {
    if (participants.includes(name.trim())) {
      return Alert.alert(
        "Participant exist",
        `There is already a participant in the list with that name ${name}`
      );
    }

    if (name.trim() === "") {
      return Alert.alert(
        "Participant empty",
        `Participant Name cannot be empty`
      );
    }

    setParticipants((prevState) => [...prevState, name.trim()]);
    setName("");
  };

  const handleParticipantRemove = (name: string) => {
    setParticipants((prevState) =>
      prevState.filter((participant) => participant !== name)
    );

    Alert.alert("Remove", `Remove participant ${name} ?`, [
      {
        text: "Yes",
        onPress: () => Alert.alert("Deleted"),
      },
      {
        text: "No",
        style: "cancel",
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Event name</Text>
      <Text style={styles.subtitle}>Friday, December 23, 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Participant name"
          placeholderTextColor="#6B6B6B"
          value={name}
          onChangeText={(value) => setName(value)}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Empty participant</Text>
        )}
      />
    </View>
  );
}
