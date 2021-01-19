import React, { Component } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default class ActionButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: this.props.name,
      displayStyle: this.props.style,
    };
  }

  render() {
    return (
      <View>
        {this.state.displayStyle === "number" && (
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#393939" }]}
            onPress={this.props.onPress}
          >
            <Text style={[styles.buttonText, { color: "white" }]}>
              {this.state.displayText}
            </Text>
          </TouchableOpacity>
        )}

        {this.state.displayStyle === "operation" && (
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: "#ffc64d", borderColor: "#d99400" },
            ]}
            onPress={this.props.onPress}
          >
            <Text style={[styles.buttonText, { color: "black" }]}>
              {this.state.displayText}
            </Text>
          </TouchableOpacity>
        )}

        {this.state.displayStyle === "other" && (
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: "#e0e0e0", borderColor: "#d1d1d1" },
            ]}
            onPress={this.props.onPress}
          >
            <Text style={[styles.buttonText, { color: "black" }]}>
              {this.state.displayText}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    width: 90,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    borderRadius: 90,
    margin: 3,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
