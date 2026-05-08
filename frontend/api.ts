const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

export interface EventDto {
  id: number;
  title: string;
  description: string;
  eventLink: string;
}

export interface CreateEventDto {
  title: string;
  description: string;
  eventLink: string;
}

export interface RunclubDto {
  id: number;
  name: string;
  description: string;
  socialMediaLink: string;
  city: string;
  time: string;
  level: string;
  image: string;
}

export interface CreateRunclubDto {
  name: string;
  description: string;
  socialMediaLink: string;
  city: string;
  time: string;
  level: string;
  image: string;
}

type RequestConfig = RequestInit & { headers?: Record<string, string> };

const buildUrl = (path: string) => `${BASE_URL}${path}`;

const request = async <T>(path: string, config: RequestConfig = {}): Promise<T> => {
  const response = await fetch(buildUrl(path), {
    ...config,
    headers: {
      "Content-Type": "application/json",
      ...(config.headers ?? {}),
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `Request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
};

export const api = {
  event: {
    list: () => request<EventDto[]>("/event"),
    create: (payload: CreateEventDto) =>
      request<EventDto>("/event", {
        method: "POST",
        body: JSON.stringify(payload),
      }),
  },
  runclub: {
    list: () => request<RunclubDto[]>("/runclub"),
    create: (payload: CreateRunclubDto) =>
      request<RunclubDto>("/runclub", {
        method: "POST",
        body: JSON.stringify(payload),
      }),
  },
};
