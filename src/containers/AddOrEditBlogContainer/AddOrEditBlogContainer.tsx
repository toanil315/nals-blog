import { ACTION_ENUM } from '@/constants';
import { useCreateBlogMutation, useLazyGetBlogByIdQuery } from '@/services/blog.service';
import React, { useEffect } from 'react';
import BlogForm from './components/BlogForm';
import { useTranslation } from 'react-i18next';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { BaseBlog } from '@/interfaces';

interface Props {
  type: ACTION_ENUM;
  blogId?: string;
}

const AddOrEditBlogContainer = ({ type, blogId }: Props) => {
  const { t } = useTranslation();
  const [getBlogById, { data, isLoading, isError }] = useLazyGetBlogByIdQuery();
  const [createBlogMutation, { isLoading: createBlogLoading }] = useCreateBlogMutation();

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

  const createBlog = (data: BaseBlog) => {
    console.log(form.formState.errors);
    createBlogMutation(data)
      .unwrap()
      .then((res) => console.log(res));
  };

  const updateBlog = (data: BaseBlog) => {
    console.log(form.formState.errors);
    console.log('update: ', data);
  };

  const handleSubmitForm = (data: BaseBlog) => {
    if (type === ACTION_ENUM.CREATE) {
      createBlog(data);
    } else {
      updateBlog(data);
    }
  };

  return (
    <div>
      <FormProvider {...form}>
        <BlogForm
          form={form}
          type={type}
          onSubmit={handleSubmitForm}
        />
      </FormProvider>
    </div>
  );
};

export default AddOrEditBlogContainer;
