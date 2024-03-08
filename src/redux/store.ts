import { BlogService } from '@/services/blog.service';
import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  [BlogService.reducerPath]: BlogService.reducer,
});

export function makeStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(BlogService.middleware),
  });
}

const store = makeStore();

export type RootState = ReturnType<typeof rootReducer>;

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
