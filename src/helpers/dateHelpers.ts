export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleString();
}

export function getDateFromString(dateString: string): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

export function getTimeFromString(dateString: string): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}
