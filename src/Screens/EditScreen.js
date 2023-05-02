import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Context } from "./Context/BlogContext";
import BlogPostForm from "../Components/BlogPostForm";
const EditScreen = ({ navigation }) => {
   const id = navigation.getParam("id")
  const { state,editBlogPost } = useContext(Context);
  const BlogPost = state.find(
    (blogpost) => blogpost.id === id
  );
  return (
    <BlogPostForm
      initialValues={{ title: BlogPost.title, content: BlogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id,title,content,()=> navigation.pop())
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
