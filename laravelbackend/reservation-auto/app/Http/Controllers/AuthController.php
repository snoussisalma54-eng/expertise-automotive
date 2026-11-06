<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        if ($request->password === "123456") {
            return response()->json([
                "success" => true,
                "token" => "admin-token"
            ]);
        }

        return response()->json([
            "success" => false,
            "message" => "Wrong password"
        ]);
    }
}