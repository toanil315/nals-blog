export interface BaseBlog {
  createdAt: string;
  title: string;
  image: string;
  content: string;
}

export interface Blog extends BaseBlog {
  id: string;
}
