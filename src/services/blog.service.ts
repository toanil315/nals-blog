import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from './baseQuery';
import { BaseBlog, GetListParams, Blog } from '@/interfaces';

const BASE_END_POINT = `/blogs`;

export const BlogService = createApi({
  baseQuery: baseQueryWithReAuth,
  reducerPath: 'BlogService',
  tagTypes: ['BLOG'],
  endpoints: (builder) => ({
    getListBlogs: builder.query<Blog[], GetListParams>({
      query: (params) => ({
        url: BASE_END_POINT,
        params,
      }),
      providesTags: (_, error) => {
        if (error) return [];
        return ['BLOG'];
      },
    }),
    getBlogById: builder.query<Blog, string /* blog id */>({
      query: (blogId) => ({
        url: `${BASE_END_POINT}/${blogId}`,
      }),
      providesTags: (_, error, arg) => {
        if (error) return [];
        return [{ type: 'BLOG', id: arg }];
      },
    }),
    createBlog: builder.mutation<any, BaseBlog>({
      query: (body) => ({
        url: BASE_END_POINT,
        method: 'Blog',
        body,
      }),
      invalidatesTags: (_, error) => {
        if (error) return [];
        return [{ type: 'BLOG' }];
      },
    }),
    updateBlog: builder.mutation<any, Blog>({
      query: ({ id, ...body }) => ({
        url: `${BASE_END_POINT}/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: (_, error, arg) => {
        if (error) return [];
        return [{ type: 'BLOG' }, { type: 'BLOG', id: arg.id }];
      },
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useGetListBlogsQuery,
  useGetBlogByIdQuery,
} = BlogService;