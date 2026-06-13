export const BASE_URL = "http://localhost:5020";

const supportedImageExtensions = /\.(png|jpe?g|webp|gif)$/i;

export function isSupportedImageReference(image: string): boolean {
  const trimmedImage = image.trim();

  if (!trimmedImage) {
    return false;
  }

  if (trimmedImage.startsWith("http://") || trimmedImage.startsWith("https://")) {
    try {
      const url = new URL(trimmedImage);
      return supportedImageExtensions.test(url.pathname);
    } catch {
      return false;
    }
  }

  return supportedImageExtensions.test(trimmedImage);
}

export function resolveRunclubImageUrl(image: string): string {
  const trimmedImage = image.trim();

  if (!trimmedImage || !isSupportedImageReference(trimmedImage)) {
    return "";
  }

  if (trimmedImage.startsWith("http://") || trimmedImage.startsWith("https://")) {
    return trimmedImage;
  }

  if (trimmedImage.startsWith("/")) {
    return `${BASE_URL}${trimmedImage}`;
  }

  return `${BASE_URL}/Images/${trimmedImage}`;
}

//POST
async function postJson<T>(path: string, body: unknown): Promise<T> {

  const res = await fetch(`${BASE_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", 
    Accept: "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(await res.text());
  } 

  return res.json() as Promise<T>;
}

//GET
async function getJson<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`);

  if (!res.ok) {
    throw new Error(await res.text());
  } 

  return res.json() as Promise<T>;
}


//TYPES
export type EventCreate = { 
  title: string; description: string; distance: string; eventLink: string };

export type EventDto = {
  id: number; title: string; description: string; distance: string; eventLink: string };

export type RunclubCreate = {
  name: string; description: string; city: string; level: string; time: string; socialMediaLink: string; image?: string;
};

export type RunclubDto = {
  id: number; name: string; description: string; city: string; time: string; level: string; socialMediaLink: string; image: string };


export const api = {

  createEvent: (payload: EventCreate) => 
    postJson("/api/event", payload),
  createRunclub: (payload: RunclubCreate) => 
    postJson("/api/runclub", payload),

  getEvents: () => 
    getJson<EventDto[]> ("/api/event"),
  getRunclubs: () => 
    getJson<RunclubDto[]> ("/api/runclub"),
};
