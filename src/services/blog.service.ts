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
      providesTags: [{ type: 'BLOG' }],
      transformResponse: (response: any) => {
        if (Array.isArray(response)) return response;
        return response.json();
      },
    }),
    // Because provided API get list blogs does not return pagination info like total elements, total pages, etc...
    // so we need to call api list without any params except search to get total blogs
    // and then return total blogs by count the length of the array.
    getTotalBlogs: builder.query<number, string /* search value */>({
      query: (search) => ({
        url: BASE_END_POINT,
        params: { search },
      }),
      providesTags: [{ type: 'BLOG' }],
      transformResponse: async (response: any) => {
        if (Array.isArray(response)) return response.length;
        const result = await response.json();
        return result.length;
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
      transformResponse: (response: any) => {
        return response.json();
      },
    }),
    createBlog: builder.mutation<Blog, BaseBlog>({
      query: (body) => ({
        url: BASE_END_POINT,
        method: 'POST',
        body,
      }),
      invalidatesTags: (_, error) => {
        if (error) return [];
        return [{ type: 'BLOG' }];
      },
      transformResponse: (response: any) => {
        return response.json();
      },
    }),
    updateBlog: builder.mutation<Blog, Blog>({
      query: ({ id, ...body }) => ({
        url: `${BASE_END_POINT}/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: (_, error, arg) => {
        if (error) return [];
        return [{ type: 'BLOG' }, { type: 'BLOG', id: arg.id }];
      },
      transformResponse: (response: any) => {
        return response.json();
      },
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useGetListBlogsQuery,
  useGetBlogByIdQuery,
  useLazyGetBlogByIdQuery,
  useGetTotalBlogsQuery,
} = BlogService;
