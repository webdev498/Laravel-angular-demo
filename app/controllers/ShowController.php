<?php

class ShowController extends \BaseController
{

    /**
     * Display a listing of the shows.
     *
     * @return Response::json
     */
    public function index()
    {
        $shows = array('Doctor Who', 'Stargate SG1', 'Once upon a time',
                       'The Blacklist', 'Prison Break', 'White Collar');


        return Response::json($shows);
  }
}
