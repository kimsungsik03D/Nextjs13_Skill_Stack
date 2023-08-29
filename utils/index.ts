import axios from "axios";

export async function fetchGetBoader(no: number, page: string) {
  const response = await axios.get(
    `http://localhost:8080/crud/select?page=${page}`
  );

  return response.data;
}

export const updateSearchParams = (type: string, value: string): string => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathname;
};
