// Copyright (c) 2022 Marcus Wehbi All rights reserved
// Created by: Marcus Wehbi
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays a response based on the age they chose
 */
function displayAge(){
	// get user input (an age)
	let age = parseInt(document.getElementById('userAge').value)
  let response = ""

  	// if age is greater than or equal to 0 and less than or equal to 10, display that they can watch a G or PG rated movie but cannot go to the movies alone 
	if (age >= 0 && age <= 10) {
		response = "You can watch a G or PG rated movie but cannot go to the movies alone."
	} 
	// if age is less than or equal to 12 but greater than 10, display that they can watch a G or PG rated movie
	else if (age > 10 && age <= 12) {
		response = "You can watch a G or PG rated movie."
	}
    	// if age is less than or equal to 17 but greater than 12, display that they can watch a G, PG, or PG-13 rated movie
    else if (age > 12 && age <= 17) {
		response = "You can watch a G, PG, or PG-13 rated movie."
	}
      // otherwise, display that they can watch any movie, including rated R
    else {
		response = "You can watch all movies, including rated R movies."
	}

  // display the results
  document.getElementById('disp').innerHTML = response
}


