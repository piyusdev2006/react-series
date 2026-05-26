export async function fetchJson(url, { signal, retries = 1 } = {}) {
  let attempt = 0;

  while (true) {
    try {
      const response = await fetch(url, { signal });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      if (error?.name === "AbortError" || attempt >= retries) {
        throw error;
      }

      attempt += 1;
    }
  }
}
