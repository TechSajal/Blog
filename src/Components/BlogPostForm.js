import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";

const BlogPostForm = ({ onSubmit,initialValues}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [Content, setContent] = useState(initialValues.content);
  return (
    <View>
      <Text style={styles.label}>Enter Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={Content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        style={styles.button}
        title=" Save Blog Post"
        onPress={() => onSubmit(title, Content)}
      />
    </View>
  );
};

BlogPostForm.defaultProps = {
    initialValues :{
        title :"",
        content:""
    }
}

const styles = StyleSheet.create({
  button: {
    padding: 20,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default BlogPostForm;
