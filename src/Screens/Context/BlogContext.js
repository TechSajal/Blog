import createDataContext from "./createDataContext";
import JsonServer from "../../Api/JsonServer";
const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogposts":
      return action.payload;
    case "add_blogPost":
      const idd = Math.floor(Math.random() * 9999999);
      return [
        ...state,
        {
          id: idd,
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "delete_blogPost":
      return state.filter((blogpost) => blogpost.id !== action.payload);
    case "edit_blogpost":
      return state.map((blogpost) => {
        if (blogpost.id === action.payload.id) {
          return action.payload;
        } else {
          return blogpost;
        }
      });
    default:
      return state;
  }
};
const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await JsonServer.get("/blogposts");

    dispatch({ type: "get_blogposts", payload: response.data });
  };
};
const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await JsonServer.post("/blogposts", { title, content });
    // dispatch({ type: "add_blogPost", payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await JsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: "delete_blogPost", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await JsonServer.put(`/blogposts/${id}`,{title,content})
    dispatch({
      type: "edit_blogpost",
      payload: { id, title, content },
    });

    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
