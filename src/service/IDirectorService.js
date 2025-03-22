import {
  CreateDirectorRepository,
  DeleteDirectorRepository,
  GetAllDirectorRepository,
  GetDirectorRepository,
  SearchDirectorRepository,
  UpdateDirectorRepository,
} from "@/repository/DirectorRepository";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const CreateDirectorService = createAsyncThunk(
  "create/Director",
  async (model, header) => {
    try {
      if (!header) {
        const response = await CreateDirectorRepository(model);
        return response.data;
      } else {
        const response = await CreateDirectorRepository(model, header);
        return response.data;
      }
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const UpdateDirectorService = createAsyncThunk(
  "update/Director",
  async (model, header) => {
    try {
      if (!header) {
        const response = await UpdateDirectorRepository(model);
        return response.data;
      } else {
        const response = await UpdateDirectorRepository(model, header);
        return response.data;
      }
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const DeleteDirectorService = createAsyncThunk(
  "delete/Director",
  async (id) => {
    const response = await DeleteDirectorRepository(id);
    return response.data;
  }
);

export const GetDirectorService = createAsyncThunk(
  "get/Director",
  async (id, header) => {
    try {
      if (!header) {
        const response = await GetDirectorRepository(id);
        return response.data;
      } else {
        const response = await GetDirectorRepository(id, header);
        return response.data;
      }
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const GetAllDirectorService = createAsyncThunk(
  "getall/Director",
  async (header) => {
    try {
      if (!header) {
        const response = await GetAllDirectorRepository();
        return response.data;
      } else {
        const response = await GetAllDirectorRepository(header);
        return response.data;
      }
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const SearchDirectorService = createAsyncThunk("search/Director",async (model, header) => {
    try {
      if (!header) {
        const response = await SearchDirectorRepository(model);
        return response.data;
      } else {
        const response = await SearchDirectorRepository(model, header);
        return response.data;
      }
    } catch (error) {
      throw new Error(error);
    }
  }
);
