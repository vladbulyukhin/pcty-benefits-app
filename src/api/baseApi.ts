const BaseUrl = "http://localhost:5000";

const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Error: ${error}, Status: ${response.status}`);
  }
  return response.json();
};

export const fetchApi = async <T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> => {
  const response = await fetch(`${BaseUrl}${endpoint}`, options);
  return handleResponse(response);
};
