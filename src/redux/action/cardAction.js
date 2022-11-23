export const totalData = (payload) => {
  return {
    type: "TOTAL_DATA",
    payload,
  };
};
export const deletePost = (payload) => {
  return {
    type: "DELETE_POST",
    payload,
  };
};
