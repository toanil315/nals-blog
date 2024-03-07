import { ACTION_ENUM } from '@/constants';
import {
  useCreateBlogMutation,
  useLazyGetBlogByIdQuery,
  useUpdateBlogMutation,
} from '@/services/blog.service';
import React, { useEffect } from 'react';
import BlogForm from './components/BlogForm';
import { useTranslation } from 'react-i18next';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { BaseBlog, Blog } from '@/interfaces';

interface Props {
  type: ACTION_ENUM;
  blogId?: string;
}

const AddOrEditBlogContainer = ({ type, blogId }: Props) => {
  const { t } = useTranslation();
  const [getBlogById, { data }] = useLazyGetBlogByIdQuery();
  const [createBlogMutation, { isLoading: createBlogLoading }] = useCreateBlogMutation();
  const [updateBlogMutation, { isLoading: updateBlogLoading }] = useUpdateBlogMutation();

  const form = useForm<BaseBlog>({
    defaultValues: {
      title: '',
      content: '',
      image: '',
      body: '',
    },
    resolver: yupResolver(
      yup.object().shape({
        title: yup.string().required(t('form.validation.required')),
        content: yup.string().required(t('form.validation.required')),
        image: yup.string().required(t('form.validation.required')),
        body: yup.string().required(t('form.validation.required')),
      }),
    ),
  });

  useEffect(() => {
    if (type === ACTION_ENUM.UPDATE && blogId) {
      getBlogById(blogId);
    }
  }, [type, blogId]);

  useEffect(() => {
    if (type === ACTION_ENUM.UPDATE && data) {
      form.reset({
        ...data,
        body: typeof data.body === 'string' ? data.body : data.content,
      });
    }
  }, [data, type]);

  const createBlog = (data: BaseBlog) => {
    createBlogMutation(data)
      .unwrap()
      .then((res) => console.log(res));
  };

  const updateBlog = (data: Blog) => {
    updateBlogMutation(data)
      .unwrap()
      .then((res) => console.log(res));
  };

  const handleSubmitForm = (data: BaseBlog | Blog) => {
    if (type === ACTION_ENUM.CREATE) {
      createBlog(data);
    } else {
      updateBlog(data as Blog);
    }
  };

  return (
    <div>
      <FormProvider {...form}>
        <BlogForm
          form={form}
          type={type}
          onSubmit={handleSubmitForm}
          isSubmitting={type === ACTION_ENUM.CREATE ? createBlogLoading : updateBlogLoading}
        />
      </FormProvider>
    </div>
  );
};

export default AddOrEditBlogContainer;
