declare module 'mangakakalot-api' {
  import { Application } from 'express';

  export interface Manga {
    id: string;
    title: string;
    image: string;
    author?: string;
    status?: string;
    updated?: string;
    view?: string;
    genres?: string[];
  }

  export interface Chapter {
    id: string;
    title: string;
    views?: string;
    upload_date?: string;
  }

  export interface MangaDetails extends Manga {
    alternative?: string;
    description?: string;
    chapters: Chapter[];
  }

  export interface ChapterImage {
    page: number;
    src: string;
  }

  export interface SearchResult {
    mangas: Manga[];
    currentPage: number;
    hasNextPage: boolean;
    totalPages?: number;
  }

  export interface MangaListResult {
    mangas: Manga[];
    currentPage: number;
    hasNextPage: boolean;
    totalPages?: number;
    totalMangas?: number;
  }

  export interface PopularNowResult {
    mangas: Manga[];
    count: number;
  }

  export interface ChapterImagesResult {
    images: ChapterImage[];
    currentChapter: string;
    nextChapter?: string;
    previousChapter?: string;
  }

  // Main scraping functions
  export function scrapeMangaSearch(query: string, page?: number): Promise<SearchResult>;
  export function scrapeMangaDetails(id: string): Promise<MangaDetails>;
  export function scrapeChapterImages(mangaId: string, chapterId: string): Promise<ChapterImagesResult>;
  export function scrapePopularMangas(page?: number): Promise<MangaListResult>;
  export function scrapeLatestMangas(page?: number): Promise<MangaListResult>;
  export function scrapeNewestMangas(page?: number): Promise<MangaListResult>;
  export function scrapeCompletedMangas(page?: number): Promise<MangaListResult>;
  export function scrapePopularNowMangas(): Promise<PopularNowResult>;
  export function scrapeHomePage(): Promise<any>;

  // Convenience methods with better names
  export function search(query: string, page?: number): Promise<SearchResult>;
  export function getDetails(id: string): Promise<MangaDetails>;
  export function getChapterImages(mangaId: string, chapterId: string): Promise<ChapterImagesResult>;
  export function getPopular(page?: number): Promise<MangaListResult>;
  export function getLatest(page?: number): Promise<MangaListResult>;
  export function getNewest(page?: number): Promise<MangaListResult>;
  export function getCompleted(page?: number): Promise<MangaListResult>;
  export function getPopularNow(): Promise<PopularNowResult>;
  export function getHomePage(): Promise<any>;

  // Version info
  export const version: string;

  // Create Express server (optional)
  export function createServer(): Application;
}

// Removed the following line as it was not present in the original code edit
// export default app;
