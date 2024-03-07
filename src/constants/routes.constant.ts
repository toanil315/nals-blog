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

  EDIT_BLOG(id?: string) {
    return id ? `${this.BLOG_DETAIL.replace(':blogId', id)}/edit` : `${this.BLOG_DETAIL}/edit`;
  },
};
