import {apiSlice} from "../apiSlice"

const AUTH_URL = "/user"

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
     login: builder.mutation({
         query: (data) => ({
             url: `${AUTH_URL}/login`,
             method: "POST",
             body: data,
             credentials: "same-origin",
         }),
     }),
 
     register: builder.mutation({
         query: (data) => ({
             url: `${AUTH_URL}/register`,
             method: "POST",
             body: data,
             credentials: "same-origin",
         }),
     }),
 
     logout: builder.mutation({
         query: () => ({
             url: `${AUTH_URL}/logout`,
             method: "POST",
             credentials: "same-origin",
         }),
     }),
    }),
 });
 
 export const {useLoginMutation, useRegisterMutation, useLogoutMutation } = authApiSlice;