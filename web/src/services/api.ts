import axios, { AxiosResponse } from "axios";
import { IUserResponse } from "../interfaces/IUserResponse";
import { IProjectResponse } from "../interfaces/IProjectsResponse";
import { IProject } from "../interfaces/IProjects";

type CreateUserResponse = {
  zip_code: string;
  deadline: string;
  cost: string;
  username: string;
  token: string;
  message?: string;
};

export async function fetchLogin(name: string, username: string) {
  const { data } = await axios.post<unknown, AxiosResponse<IUserResponse>>(
    "http://localhost:3001/login",
    { name, username },
  );
  return data;
}

export async function fetchRegister(name: string, username: string) {
  const { data } = await axios.post<unknown, AxiosResponse<IUserResponse>>(
    "http://localhost:3001/register",
    { name, username },
  );
  return data;
}

export async function fetchProjects(username: string, token: string) {
  const { data } = await axios.get("http://localhost:3001/project/showAll", {
    headers: {
      Authorization: token,
      username,
    },
  });
  return data;
}

export async function fetchCreate(
  title: string,
  zip_code: string,
  deadline: string,
  cost: string,
  username: string,
  token: string,
) {
  const { data } = await axios.post<CreateUserResponse>(
    `http://localhost:3001/project/create`,
    { title, zip_code, deadline, cost },
    {
      headers: {
        Authorization: token,
        username,
      },
    },
  );
  return data;
}

export async function fetchPatch(
  username: string | null,
  token: string | null,
  id: string | null,
) {
  await axios(`http://localhost:3001/project/${id}/done`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
      username,
    },
  });
}

export async function fetchDelete(
  username: string | null,
  token: string | null,
  id: string | null,
) {
  await axios.delete(`http://localhost:3001/project/${id}`, {
    headers: {
      authorization: token,
      username,
    },
  });
}

export async function fetchCpf(token: string | null, id: string | null) {
  const { data } = await axios.get(`http://localhost:3001/project/${id}`, {
    headers: {
      Authorization: token,
    },
  });
  return data;
}

export async function fetchUpdate(
  title: string,
  zip_code: string,
  deadline: string,
  cost: string,
  username: string,
  token: string,
  id: string,
) {
  const { data } = await axios.put<CreateUserResponse>(
    `http://localhost:3001/project/${id}`,
    { title, zip_code, deadline, cost },
    {
      headers: {
        Authorization: token,
        username,
      },
    },
  );
  return data;
}
