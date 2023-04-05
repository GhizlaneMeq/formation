<?php

namespace App\Http\Controllers;

use App\Models\Cour;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCourRequest;
use App\Http\Requests\UpdateCourRequest;
use Illuminate\Support\Str;
use Inertia\Inertia;


class CourController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //

        $cours = Cour::all();
        return Inertia::render(
            'Cours/Cours',
            ['cours' => $cours]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCourRequest $request)
    {
        //


        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'lien' => 'required',
            'video' => 'required',

        ]);



        Cour::create([
            'title' => $request->title,
            'description' => $request->description,
            'lien' => $request->lien,
            'video' => $request->video,

        ]);
        return redirect('/');
    }


    /**
     * Display the specified resource.
     */
    public function show(Cour $cour)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cour $cour)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCourRequest $request, Cour $cour)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cour $cour)
    {
        //
    }
}
