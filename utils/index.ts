export async function fetchGetBoader(no?: number, page?: number) {
  const response = await fetch(`http://localhost:8080/crud/select?no=&page=`);

  const result = await response.json();

  return result;
}
