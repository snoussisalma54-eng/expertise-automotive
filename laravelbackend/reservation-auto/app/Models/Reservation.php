<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    protected $fillable = [
        'nom',
        'telephone',
        'marque',
        'modele',
        'type',
        'service',
        'date',
        'heure'
    ];
}