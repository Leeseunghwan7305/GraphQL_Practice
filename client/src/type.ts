export interface IMovie {
  id: number;
  url: string;
  imdb_code: string;
  title: string;
  title_english: string;
  title_long: string;
  slug: string;
  year: number;
  rating: number;
  runtime: number;
  genres: string[];
  summary?: string;
  description_full: string;
  synopsis: string;
  yt_trailer_code: string;
  language: string;
  background_image: string;
  background_image_original: string;
  small_cover_image: string;
  medium_cover_image: string;
  large_cover_image: string;
}

export interface ITweet {
  id: number;
  text: string;
  authore: User;
}

export interface User {
  id: number;
  firstName: string;
  lastNmae: string;
  fullName: string;
}
