<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class MovieController extends Controller
{
    private $tmdbApiKey;
    private $tmdbBaseUrl = 'https://api.themoviedb.org/3';

    public function __construct()
    {
        $this->tmdbApiKey = env('TMDB_API_KEY');
    }

    /**
     * 人気映画一覧を取得
     */
    public function getPopularMovies(Request $request)
    {
        try {
            $page = $request->get('page', 1);

            $response = Http::get("{$this->tmdbBaseUrl}/movie/popular", [
                'api_key' => $this->tmdbApiKey,
                'page' => $page,
                'language' => 'ja-JP'
            ]);

            if ($response->successful()) {
                return response()->json($response->json());
            } else {
                return response()->json(['error' => 'TMDB API request failed'], 500);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * 映画の詳細情報を取得
     */
    public function getMovieDetails($id)
    {
        try {
            $response = Http::get("{$this->tmdbBaseUrl}/movie/{$id}", [
                'api_key' => $this->tmdbApiKey,
                'language' => 'ja-JP'
            ]);

            if ($response->successful()) {
                return response()->json($response->json());
            } else {
                return response()->json(['error' => 'Movie not found'], 404);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * 映画を検索
     */
    public function searchMovies(Request $request)
    {
        try {
            $query = $request->get('query');
            $page = $request->get('page', 1);

            if (!$query) {
                return response()->json(['error' => 'Query parameter is required'], 400);
            }

            $response = Http::get("{$this->tmdbBaseUrl}/search/movie", [
                'api_key' => $this->tmdbApiKey,
                'query' => $query,
                'page' => $page,
                'language' => 'ja-JP'
            ]);

            if ($response->successful()) {
                return response()->json($response->json());
            } else {
                return response()->json(['error' => 'TMDB API request failed'], 500);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
