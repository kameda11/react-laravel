<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\TaskController;
use App\Http\Controllers\API\MovieController;

// ユーザー情報取得のルート
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// タスク一覧取得のルート
Route::get('/tasks', [TaskController::class, 'index']);

// 映画関連のルート
Route::get('/movies/popular', [MovieController::class, 'getPopularMovies']);
Route::get('/movies/{id}', [MovieController::class, 'getMovieDetails']);
Route::get('/movies/search', [MovieController::class, 'searchMovies']);
