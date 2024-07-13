import {apiSlice} from '../apiSlice'

const USER_URL = '/user'

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
     updateUser: builder.mutation({
         query: (data) => ({
             url: `${USER_URL}/profile`,
             method: "PUT",
             body: data,
             credentials: "same-origin",
         }),
     }),
 
     register: builder.mutation({
         query: (data) => ({
             url: `${USER_URL}/register`,
             method: "POST",
             body: data,
             credentials: "same-origin",
         }),
     }),

     getTeamList: builder.query({
        query: () => ({
            url: `${USER_URL}/get-team`,
            method: "GET",
            credentials: "same-origin",
        }),
    }),

    deleteUser: builder.mutation({
        query: (id) => ({
            url: `${USER_URL}/${id}`,
            method: "DELETE",
            credentials: "same-origin",
        }),
    }),

    userAction: builder.mutation({
        query: (data) => ({
            url: `${USER_URL}/${data.id}`,
            method: "PUT",
            body:data,
            credentials: "same-origin",
        }),
    }),
   
    getNotifications: builder.query({
        query: () => ({
            url: `${USER_URL}/notifications`,
            method: "GET",
            credentials: "same-origin",
        }),
    }),

    markNotiAsRead: builder.mutation({
        query: (data) => ({
            url: `${USER_URL}/read-noti?isReadType = ${data.type}&id=${data?.id}`,
            method: "PUT",
            body:data,
            credentials: "same-origin",
        }),
    }),

    changePassword: builder.mutation({
        query: (data) => ({
            url: `${USER_URL}/change-password`,
            method: "PUT",
            body: data,
            credentials: "same-origin",
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