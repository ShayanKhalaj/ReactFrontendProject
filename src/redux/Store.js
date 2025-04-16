import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import localStorage from "redux-persist/lib/storage";

// ایمپورت اسلایس‌ها
import actorReducer from "@/redux/features/pannel/ActorSlice";
import boxReducer from "@/redux/features/pannel/BoxSlice";
import categoryReducer from "@/redux/features/pannel/CategorySlice";
import directorReducer from "@/redux/features/pannel/DirectorSlice";
import genreReducer from "@/redux/features/pannel/GenreSlice";
import movieReducer from "@/redux/features/pannel/MovieSlice";
import sliderReducer from "@/redux/features/pannel/SliderSlice";
import userReducer from '@/redux/auth/UserSlice';

export const Store = configureStore({
  reducer:{
    actors: actorReducer,
    boxes: boxReducer,
    categories: categoryReducer,
    directors: directorReducer,
    genres: genreReducer,
    movies: movieReducer,
    sliders: sliderReducer,
    user:userReducer
  }
})

// تنظیمات Persist برای ذخیره در localStorage
const localStorageConfiguration = {
  key: "global-storage",
  storage: localStorage,
};

// ترکیب همه Reducer‌ها
const rootReducer = combineReducers({
  // actors: actorReducer,
  // boxes: boxReducer,
  // categories: categoryReducer,
  // directors: directorReducer,
  // genres: genreReducer,
  // movies: movieReducer,
  // sliders: sliderReducer,
  user:userReducer
});

// اضافه کردن Persist به Root Reducer
const persistedReducer = persistReducer(localStorageConfiguration, rootReducer);

// پیکربندی Store
export const Store2 = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // غیرفعال کردن چک‌های سریالی
    }),
});

// ایجاد Persistor برای کنترل Persist Store
export const persistor = persistStore(Store2);
