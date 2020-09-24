export const BASE_URL = "http://192.168.1.90";
export const APP_URL = BASE_URL+":8899/CI4BP"
export const API = APP_URL + "/api/";
export const AUTH = API+"login/";
export const PROFILE = API+"profile";
export const PROFILES = API+"profiles";
export const GET_PROJECTS = API+"projects";
export const GET_PROJECT = API+"project/";
export const DELETE_PROJECT = API+"deleteProject/";
export const CREATE_PROJECTS = API+"createproject";
export const CREATE_PROJECT_ADD_TEAM = API+"projectaddteams/";

export const CREATE_BACKLOG = API+"createbacklog";
export const DELETE_BACKLOG = API+"deletebacklog/";

export const CREATE_TASK = API+"createtask";
export const GET_TASKS = API+"tasks/";
export const GET_TASK = API+"task/";
export const GET_MYTASK = API+"mytasks/";
export const DELETE_BATCH_TASK = API+"deletebatchtask";
export const MOVE_TASK = API+"movetask/";
export const GET_TASKS_CHECK = API+"taskscheck/";

export const CREATE_SPRINT = API+"createsprint";
export const GET_SPRINTS = API+"sprints/";

export const CREATE_COMMENT = API+"createcomment";