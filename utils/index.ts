// import axios from "axios";

export async function fetchGetBoader(page: string | number | null) {
  const response = await fetch(
    `http://localhost:8080/crud/select?page=${page}`
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
export async function fetchPutBoader(
  no?: string | number,
  content?: string,
  regtId?: string
) {
  const data = { content, regtId, no };
  const response = await fetch(`http://localhost:8080/crud/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();

  return result;
}

export async function fetchDeleteBoader(no?: string | number) {
  const data = { no };
  console.log("no", no);
  const response = await fetch(`http://localhost:8080/crud/delete`, {
    method: "DELETE",
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
