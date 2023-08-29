import axios from "axios";

export async function fetchGetBoader(no: number, page: string) {
  const response = await axios.get(
    `http://localhost:8080/crud/select?page=${page}`
  );

  return response.data;
}

export async function fetchPostBoader(content: string, regtId: string) {
  const response = await axios.post(`http://localhost:8080/crud/insert`, {
    content,
    regtId,
  });

  return response.data;
}

export const updateSearchParams = (type: string, value: string): string => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathname;
};

export const removeSearchParams = (type: string): string => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.delete(type);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathname;
};
