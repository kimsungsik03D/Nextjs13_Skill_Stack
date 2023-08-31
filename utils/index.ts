// import axios from "axios";

export async function fetchGetBoader(no: number, page: string) {
  const response = await fetch(
    `http://localhost:8080/crud/select?no=&page=${page}`
  );

  const result = await response.json();

  return result;
}

export async function fetchPostBoader(content: string, regtId: string) {
  const data = { content, regtId };
  const response = await fetch(`http://localhost:8080/crud/insert`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();

  return result;
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
