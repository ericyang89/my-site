import originBlogInfo from "./../blogInfo.json";

const pureInfo = originBlogInfo.map(item => ({
  id: item.filename,
  title: item.meta.title,
  date: item.meta.date,
  tags: item.meta.tags,
  abstract: item.meta.abstract
}));

export default pureInfo;
