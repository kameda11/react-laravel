const API_BASE_URL = 'http://localhost/api';

export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
    adult: boolean;
    genre_ids: number[];
    original_language: string;
    original_title: string;
    popularity: number;
    video: boolean;
}

export interface MovieDetails extends Movie {
    budget: number;
    genres: Array<{ id: number; name: string }>;
    homepage: string;
    imdb_id: string;
    production_companies: Array<{
        id: number;
        logo_path: string;
        name: string;
        origin_country: string;
    }>;
    production_countries: Array<{
        iso_3166_1: string;
        name: string;
    }>;
    revenue: number;
    runtime: number;
    spoken_languages: Array<{
        english_name: string;
        iso_639_1: string;
        name: string;
    }>;
    status: string;
    tagline: string;
}

export interface MovieResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

class MovieService {
    private async fetchFromAPI<T>(endpoint: string): Promise<T> {
        try {
            const response = await fetch(`${API_BASE_URL}${endpoint}`);

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(`API request failed: ${response.status} ${response.statusText} - ${errorData.message || 'Unknown error'}`);
            }

            return await response.json();
        } catch (error) {
            console.error('API request failed:', error);
            throw error;
        }
    }

    /**
     * 人気映画一覧を取得
     */
    async getPopularMovies(page: number = 1): Promise<MovieResponse> {
        return this.fetchFromAPI<MovieResponse>(`/movies/popular?page=${page}`);
    }

    /**
     * 映画の詳細情報を取得
     */
    async getMovieDetails(id: number): Promise<MovieDetails> {
        return this.fetchFromAPI<MovieDetails>(`/movies/${id}`);
    }

    /**
     * 映画を検索
     */
    async searchMovies(query: string, page: number = 1): Promise<MovieResponse> {
        const encodedQuery = encodeURIComponent(query);
        return this.fetchFromAPI<MovieResponse>(`/movies/search?query=${encodedQuery}&page=${page}`);
    }

    /**
     * ポスター画像のURLを生成
     */
    getPosterUrl(posterPath: string | null, size: 'w92' | 'w154' | 'w185' | 'w342' | 'w500' | 'w780' | 'original' = 'w500'): string {
        if (!posterPath) {
            return 'https://via.placeholder.com/500x750?text=No+Image';
        }
        return `https://image.tmdb.org/t/p/${size}${posterPath}`;
    }

    /**
     * バックドロップ画像のURLを生成
     */
    getBackdropUrl(backdropPath: string | null, size: 'w300' | 'w780' | 'w1280' | 'original' = 'w1280'): string {
        if (!backdropPath) {
            return 'https://via.placeholder.com/1280x720?text=No+Image';
        }
        return `https://image.tmdb.org/t/p/${size}${backdropPath}`;
    }
}

export default new MovieService();

