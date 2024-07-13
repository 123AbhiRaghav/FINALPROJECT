import {apiSlice} from '../apiSlice'

const USER_URL = '/user'

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
     updateUser: builder.mutation({
         query: (data) => ({
             url: `${USER_URL}/profile`,
             method: "PUT",
             body: data,
             credentials: "omit",
         }),
     }),
 
     register: builder.mutation({
         query: (data) => ({
             url: `${USER_URL}/register`,
             method: "POST",
             body: data,
             credentials: "omit",
         }),
     }),

     getTeamList: builder.query({
        query: () => ({
            url: `${USER_URL}/get-team`,
            method: "GET",
            credentials: "omit",
        }),
    }),

    deleteUser: builder.mutation({
        query: (id) => ({
            url: `${USER_URL}/${id}`,
            method: "DELETE",
            credentials: "omit",
        }),
    }),

    userAction: builder.mutation({
        query: (data) => ({
            url: `${USER_URL}/${data.id}`,
            method: "PUT",
            body:data,
            credentials: "omit",
        }),
    }),
   
    getNotifications: builder.query({
        query: () => ({
            url: `${USER_URL}/notifications`,
            method: "GET",
            credentials: "omit",
        }),
    }),

    markNotiAsRead: builder.mutation({
        query: (data) => ({
            url: `${USER_URL}/read-noti?isReadType = ${data.type}&id=${data?.id}`,
            method: "PUT",
            body:data,
            credentials: "omit",
        }),
    }),

    changePassword: builder.mutation({
        query: (data) => ({
            url: `${USER_URL}/change-password`,
            method: "PUT",
            body: data,
            credentials: "omit",
        }),
    }),
    }),
 });

 export const {
    useUpdateUserMutation, 
    useGetTeamListQuery, 
    useDeleteUserMutation, 
    useUserActionMutation,
    useGetNotificationsQuery,
    useMarkNotiAsReadMutation,
    useChangePasswordMutation,
    useRegisterMutation, 
} = userApiSlice;