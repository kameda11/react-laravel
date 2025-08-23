<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\TaskController;

// ユーザー情報取得のルート
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// タスク一覧取得のルート
Route::get('/tasks', [TaskController::class, 'index']);
