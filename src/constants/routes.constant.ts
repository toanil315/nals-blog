export const prefixPath = '';
export const prefixPathAdmin = '/admin';

export const ROUTES = {
  // public routes
  ERROR: `${prefixPath}/404`,

  // admin routes
  ADMIN: `${prefixPathAdmin}/some-admin-page`,

  // user routes
  HOME: `${prefixPath}`,

  BLOG_DETAIL: `${prefixPath}/blogs/:blogId`,

  CREATE_BLOG: `${prefixPath}/blogs/create`,

  get EDIT_BLOG() {
    return `${this.BLOG_DETAIL}/edit`;
  },
};
