export const TransFormData = (news, arrayIndex, start, end) => {
  return news[arrayIndex]?.data?.slice(start, end);
};
