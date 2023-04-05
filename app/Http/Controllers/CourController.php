<?php

namespace App\Http\Controllers;

use App\Models\Cour;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCourRequest;
use App\Http\Requests\UpdateCourRequest;

class CourController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
            'image' => 'required',
        ]);


        // $title=$request->title;
        // $description=$request->description;
        // $image=$request->image;



        $cour = new Cour;


        $cour->title=$request->title;

        $cour->description=$request->description;


        $image=$request->image;
        $imagename = time().'.'.$image->getClientOriginalExtension();
        $image->move('courimage',$imagename);

        // $imageName = time().'.'.$request->image->extension();

        // $request->image->move(public_path('images'), $imageName);

        $cour->image=$imagename;

        $cour->save();

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
