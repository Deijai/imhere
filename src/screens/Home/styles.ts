import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      backgroundColor: "#131016",
      flex: 1,
      padding: 24,
    },
    title: {
      color: "#FFF",
      fontSize: 24,
      fontWeight: "bold",
      marginTop: 48,
    },
    subtitle: {
      color: "#6B6B6B",
      fontSize: 16,
    },
    input: {
      flex: 1,
      height: 56,
      backgroundColor: '#1F1E25',
      borderRadius: 5,
      color: '#FFF',
      padding: 16,
      fontSize: 16,
      marginRight: 12,

    },
    buttonText: {
      color: '#FFF',
      fontSize: 24
    },
    button: {
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: '#31CF67',
      alignItems: 'center',
      justifyContent: 'center'
    },
    form: {
      marginTop: 36,
      marginBottom: 42,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    listEmptyText: {
      color: '#FFF',
      fontSize: 14,
      textAlign: 'center'
    }
  });
  