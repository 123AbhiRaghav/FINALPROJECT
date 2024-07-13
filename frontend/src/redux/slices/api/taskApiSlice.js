import {apiSlice} from '../apiSlice'

const TASKS_URL = '/task';

export const taskApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getDashboardStats: builder.query({
            query: () => ({
                url: `${TASKS_URL}/dashboard`,
                method:"GET",
                credentials: "same-origin",
            }),
        }),

    getAllTasks: builder.query({
        query: ({strQuery, isTrashed, search}) => ({
            url: `${TASKS_URL}?stage=${strQuery}&isTrashed=${isTrashed}&search=${search}`,
            method:"GET",
            credentials: "same-origin",
        }),
    }),

    createTask: builder.mutation({
        query: (data) => ({
            url: `${TASKS_URL}/create`,
            method:"POST",
            body: data,
            credentials: "same-origin",
        }),
    }),

    duplicateTask: builder.mutation({
        query: (id) => ({
            url: `${TASKS_URL}/duplicate/${id}`,
            method: "POST",
            body: {},
            credentials:"same-origin",
        }),
    }),

     updateTask: builder.mutation({
        query: (data) => ({
            url: `${TASKS_URL}/update/${data._id}`,
            method: "PUT",
            body: data,
            credentials: "same-origin",
        }),
     }),

     trashTask: builder.mutation({
        query: ({id}) => ({
            url: `${TASKS_URL}/${id}`,
            method: "PUT",
            credentials: "same-origin",
        }),
     }),

     createSubTask: builder.mutation({
        query: ({data, id}) => ({
            url: `${TASKS_URL}/create-subtask/${id}`,
            method: "PUT",
            body: data,
            credentials: "same-origin",
        }),
     }),

     deleteRestoreTask: builder.mutation({
        query: ({id, actionType}) => ({
            url: `${TASKS_URL}/delete-restore/${id}?actionType=${actionType}`,
            method: "DELETE",
            credentials: "same-origin",
        }),
     }),

     getSingleTask: builder.query({
        query: (id) => ({
            url: `${TASKS_URL}/${id}`,
            method: "GET",
            credentials: "same-origin",
        }),
     }),

     postTaskActivity: builder.mutation({
        query: ({id, data}) => ({
            url: `${TASKS_URL}/activity/${id}`,
            method: "POST",
            body: data,
            credentials: "same-origin",
        }),
     }),
    }),
});

export const {
    useGetDashboardStatsQuery, 
    useGetAllTasksQuery, 
    useCreateTaskMutation,
   useDuplicateTaskMutation,
   useUpdateTaskMutation,
   useTrashTaskMutation,
   useCreateSubTaskMutation,
   useDeleteRestoreTaskMutation,
   useGetSingleTaskQuery,
   usePostTaskActivityMutation,
} = taskApiSlice;