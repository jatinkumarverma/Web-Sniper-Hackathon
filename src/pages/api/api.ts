import axios from "axios";

const API_KEY = "N7uR7NdufxlAmrbGidiTLbgOF3PoEaplwGNLlwDeJZTHtl2Er9MGrlx2"; // replace with your Pexels API key

export interface PexelsPhoto {
  id: number;
  url: string;
  photographer: string;
  photographerUrl: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  alt: string;
  link: string;
}

interface SearchResponse {
  photos: PexelsPhoto[];
}

export async function searchPhotos(
  query: string,
  page: number,
  perPage: number
): Promise<PexelsPhoto[]> {
  const response = await axios.get<SearchResponse>(
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(
      query
    )}&page=${page}&per_page=${perPage}`,
    {
      headers: {
        Authorization: API_KEY,
      },
    }
  );

  return response.data.photos;
}

export async function fetchPhotoData(id: number) {
  const response = await axios.get(`https://api.pexels.com/v1/photos/${id}`, {
    headers: {
      Authorization: API_KEY,
    },
  });

  return response.data;
}

interface Place {
  name: string;
  type: string;
  // Add other necessary properties based on the actual structure of your places
}

interface ApiResponse {
  data: {
    data: Place[];
  };
}

export const getPlaceData = async (lat: number, long: number, type: string): Promise<Place[]> => {
  try {
    const response = await axios.get<ApiResponse>('https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng', {
      params: {
        latitude: lat,
        longitude: long,
      },
      headers: {
        'X-RapidAPI-Key': '1d12c71cffmshed656ab315c199ap156e8cjsn5d438ae12387',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
      },
    });

    return response.data.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};