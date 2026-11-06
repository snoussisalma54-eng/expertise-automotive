<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reservation;
use App\Mail\ReservationMail;
use Illuminate\Support\Facades\Mail;

class ReservationController extends Controller
{
    // GET ALL
    public function index()
    {
        return response()->json(Reservation::all());
    }

    // CREATE
    public function store(Request $request)
    {
        // إنشاء réservation في قاعدة البيانات
        $reservation = Reservation::create($request->all());

        // إرسال المعلومات للإيميل
        Mail::to(env('MAIL_USERNAME'))->send(
            new ReservationMail($reservation)
        );

        return response()->json([
            "message" => "Reservation created successfully",
            "data" => $reservation
        ]);
    }

    // DELETE
    public function destroy($id)
    {
        Reservation::destroy($id);

        return response()->json([
            "message" => "Deleted successfully"
        ]);
    }
}