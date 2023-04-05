<?php

namespace App\Http\Middleware;

use Closure;
use Auth;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class isadmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle (Request $request, Closure $next): Response
    {


        if (Auth::check()) {
            if (Auth::user()->isAdmin == 1) {
                return $next($request);
        } else {
           return redirect('/login');
        }

    }
    return redirect('/login');
}
}
