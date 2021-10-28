(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/moinadnan/Downloads/angular11-testapp/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Cy5W":
/*!*************************************!*\
  !*** ./src/app/jsontreegriddata.ts ***!
  \*************************************/
/*! exports provided: sampleData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sampleData", function() { return sampleData; });
/**
 *Sample data
 */
let sampleData = [{ "taskID": 1, "taskName": "Roshelle", "startDate": "9/28/2021", "priority": "Aquamarine", "approved": false,
        subtasks: [
            {
                taskID: 1001, taskName: 'subtask 1', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false,
                subtasks: [
                    { taskID: 1002, taskName: 'subtask 2', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false }
                ],
            }
        ]
    },
    { "taskID": 2, "taskName": "Roderic", "startDate": "3/31/2021", "priority": "Yellow", "approved": true },
    { "taskID": 3, "taskName": "Marietta", "startDate": "2/4/2021", "priority": "Red", "approved": true },
    { "taskID": 4, "taskName": "Robbi", "startDate": "2/3/2021", "priority": "Puce", "approved": false },
    { "taskID": 5, "taskName": "Nevin", "startDate": "10/26/2020", "priority": "Violet", "approved": false },
    { "taskID": 6, "taskName": "Leonhard", "startDate": "5/31/2021", "priority": "Red", "approved": true },
    { "taskID": 7, "taskName": "Norbert", "startDate": "8/27/2021", "priority": "Violet", "approved": false },
    { "taskID": 8, "taskName": "Moishe", "startDate": "4/2/2021", "priority": "Violet", "approved": false },
    { "taskID": 9, "taskName": "Cybil", "startDate": "7/6/2021", "priority": "Pink", "approved": true },
    { "taskID": 10, "taskName": "Zonda", "startDate": "11/22/2020", "priority": "Teal", "approved": false },
    { "taskID": 11, "taskName": "Nikkie", "startDate": "3/31/2021", "priority": "Green", "approved": true },
    { "taskID": 12, "taskName": "Dennie", "startDate": "3/17/2021", "priority": "Violet", "approved": true },
    { "taskID": 13, "taskName": "Noe", "startDate": "1/1/2021", "priority": "Blue", "approved": true },
    { "taskID": 14, "taskName": "Konstance", "startDate": "3/17/2021", "priority": "Goldenrod", "approved": false },
    { "taskID": 15, "taskName": "Ally", "startDate": "6/5/2021", "priority": "Goldenrod", "approved": false },
    { "taskID": 16, "taskName": "Gerry", "startDate": "10/1/2021", "priority": "Khaki", "approved": false },
    { "taskID": 17, "taskName": "Gabriello", "startDate": "3/4/2021", "priority": "Blue", "approved": true },
    { "taskID": 18, "taskName": "Tristan", "startDate": "3/4/2021", "priority": "Puce", "approved": false },
    { "taskID": 19, "taskName": "Skippy", "startDate": "6/20/2021", "priority": "Violet", "approved": true },
    { "taskID": 20, "taskName": "Domingo", "startDate": "9/13/2021", "priority": "Fuscia", "approved": false },
    { "taskID": 21, "taskName": "Reilly", "startDate": "11/1/2020", "priority": "Pink", "approved": true },
    { "taskID": 22, "taskName": "Chrystel", "startDate": "5/15/2021", "priority": "Purple", "approved": true },
    { "taskID": 23, "taskName": "Herby", "startDate": "6/20/2021", "priority": "Teal", "approved": false },
    { "taskID": 24, "taskName": "Dewie", "startDate": "6/16/2021", "priority": "Mauv", "approved": true },
    { "taskID": 25, "taskName": "Sax", "startDate": "12/25/2020", "priority": "Mauv", "approved": true },
    { "taskID": 26, "taskName": "Dierdre", "startDate": "12/29/2020", "priority": "Aquamarine", "approved": true },
    { "taskID": 27, "taskName": "Mischa", "startDate": "10/9/2021", "priority": "Mauv", "approved": true },
    { "taskID": 28, "taskName": "Moss", "startDate": "12/20/2020", "priority": "Teal", "approved": true },
    { "taskID": 29, "taskName": "Aubree", "startDate": "6/1/2021", "priority": "Goldenrod", "approved": false },
    { "taskID": 30, "taskName": "Munmro", "startDate": "10/2/2021", "priority": "Green", "approved": false },
    { "taskID": 31, "taskName": "Lorrin", "startDate": "8/6/2021", "priority": "Aquamarine", "approved": false },
    { "taskID": 32, "taskName": "Temple", "startDate": "5/20/2021", "priority": "Khaki", "approved": false },
    { "taskID": 33, "taskName": "Alayne", "startDate": "5/26/2021", "priority": "Teal", "approved": true },
    { "taskID": 34, "taskName": "Joye", "startDate": "1/19/2021", "priority": "Blue", "approved": true },
    { "taskID": 35, "taskName": "Glennie", "startDate": "5/29/2021", "priority": "Teal", "approved": false },
    { "taskID": 36, "taskName": "Giraldo", "startDate": "6/15/2021", "priority": "Mauv", "approved": true },
    { "taskID": 37, "taskName": "Clim", "startDate": "4/8/2021", "priority": "Orange", "approved": false },
    { "taskID": 38, "taskName": "Krystle", "startDate": "1/21/2021", "priority": "Red", "approved": true },
    { "taskID": 39, "taskName": "Fletch", "startDate": "4/4/2021", "priority": "Purple", "approved": false },
    { "taskID": 40, "taskName": "Adela", "startDate": "1/29/2021", "priority": "Indigo", "approved": false },
    { "taskID": 41, "taskName": "Marthe", "startDate": "1/12/2021", "priority": "Turquoise", "approved": false },
    { "taskID": 42, "taskName": "Brod", "startDate": "8/16/2021", "priority": "Khaki", "approved": true },
    { "taskID": 43, "taskName": "Elmo", "startDate": "3/29/2021", "priority": "Orange", "approved": true },
    { "taskID": 44, "taskName": "Oliver", "startDate": "5/28/2021", "priority": "Khaki", "approved": true },
    { "taskID": 45, "taskName": "Stuart", "startDate": "8/8/2021", "priority": "Blue", "approved": true },
    { "taskID": 46, "taskName": "Tandy", "startDate": "7/27/2021", "priority": "Puce", "approved": false },
    { "taskID": 47, "taskName": "Alphonse", "startDate": "9/23/2021", "priority": "Fuscia", "approved": true },
    { "taskID": 48, "taskName": "Jessamine", "startDate": "6/5/2021", "priority": "Turquoise", "approved": false },
    { "taskID": 49, "taskName": "Shandra", "startDate": "11/10/2020", "priority": "Puce", "approved": false },
    { "taskID": 50, "taskName": "Lisetta", "startDate": "3/29/2021", "priority": "Turquoise", "approved": true },
    { "taskID": 51, "taskName": "Rozelle", "startDate": "7/11/2021", "priority": "Crimson", "approved": true },
    { "taskID": 52, "taskName": "Joe", "startDate": "9/29/2021", "priority": "Puce", "approved": false },
    { "taskID": 53, "taskName": "Jemima", "startDate": "9/8/2021", "priority": "Aquamarine", "approved": false },
    { "taskID": 54, "taskName": "Nat", "startDate": "6/5/2021", "priority": "Khaki", "approved": true },
    { "taskID": 55, "taskName": "Nolan", "startDate": "5/29/2021", "priority": "Khaki", "approved": true },
    { "taskID": 56, "taskName": "Jackson", "startDate": "9/2/2021", "priority": "Fuscia", "approved": true },
    { "taskID": 57, "taskName": "Neill", "startDate": "2/6/2021", "priority": "Green", "approved": false },
    { "taskID": 58, "taskName": "Shaylah", "startDate": "6/14/2021", "priority": "Blue", "approved": false },
    { "taskID": 59, "taskName": "Cymbre", "startDate": "2/20/2021", "priority": "Red", "approved": true },
    { "taskID": 60, "taskName": "Bartholomew", "startDate": "12/29/2020", "priority": "Turquoise", "approved": false },
    { "taskID": 61, "taskName": "Arlyn", "startDate": "5/24/2021", "priority": "Red", "approved": true },
    { "taskID": 62, "taskName": "Meggi", "startDate": "2/23/2021", "priority": "Goldenrod", "approved": false },
    { "taskID": 63, "taskName": "Ferd", "startDate": "12/14/2020", "priority": "Yellow", "approved": false },
    { "taskID": 64, "taskName": "Fifine", "startDate": "7/2/2021", "priority": "Blue", "approved": false },
    { "taskID": 65, "taskName": "Romonda", "startDate": "5/15/2021", "priority": "Green", "approved": true },
    { "taskID": 66, "taskName": "Irita", "startDate": "2/22/2021", "priority": "Crimson", "approved": true },
    { "taskID": 67, "taskName": "Vicky", "startDate": "1/23/2021", "priority": "Blue", "approved": false },
    { "taskID": 68, "taskName": "Hanni", "startDate": "1/1/2021", "priority": "Orange", "approved": false },
    { "taskID": 69, "taskName": "Ailbert", "startDate": "3/13/2021", "priority": "Indigo", "approved": true },
    { "taskID": 70, "taskName": "Derwin", "startDate": "9/21/2021", "priority": "Pink", "approved": true },
    { "taskID": 71, "taskName": "Gottfried", "startDate": "2/13/2021", "priority": "Teal", "approved": false },
    { "taskID": 72, "taskName": "Durand", "startDate": "10/24/2020", "priority": "Purple", "approved": true },
    { "taskID": 73, "taskName": "Beniamino", "startDate": "2/7/2021", "priority": "Mauv", "approved": true },
    { "taskID": 74, "taskName": "Lianne", "startDate": "4/4/2021", "priority": "Yellow", "approved": true },
    { "taskID": 75, "taskName": "Ericka", "startDate": "8/25/2021", "priority": "Maroon", "approved": false },
    { "taskID": 76, "taskName": "Agnola", "startDate": "3/20/2021", "priority": "Aquamarine", "approved": false },
    { "taskID": 77, "taskName": "Jorgan", "startDate": "12/16/2020", "priority": "Aquamarine", "approved": true },
    { "taskID": 78, "taskName": "Delmore", "startDate": "3/7/2021", "priority": "Turquoise", "approved": false },
    { "taskID": 79, "taskName": "Stepha", "startDate": "3/13/2021", "priority": "Fuscia", "approved": true },
    { "taskID": 80, "taskName": "Berkie", "startDate": "7/8/2021", "priority": "Teal", "approved": false },
    { "taskID": 81, "taskName": "Dotti", "startDate": "12/14/2020", "priority": "Turquoise", "approved": true },
    { "taskID": 82, "taskName": "Burg", "startDate": "8/22/2021", "priority": "Puce", "approved": false },
    { "taskID": 83, "taskName": "Sibley", "startDate": "8/19/2021", "priority": "Blue", "approved": false },
    { "taskID": 84, "taskName": "Roma", "startDate": "5/13/2021", "priority": "Orange", "approved": true },
    { "taskID": 85, "taskName": "Arie", "startDate": "10/14/2021", "priority": "Turquoise", "approved": true },
    { "taskID": 86, "taskName": "Chad", "startDate": "10/14/2021", "priority": "Orange", "approved": true },
    { "taskID": 87, "taskName": "Sinclare", "startDate": "11/10/2020", "priority": "Mauv", "approved": true },
    { "taskID": 88, "taskName": "Flory", "startDate": "4/22/2021", "priority": "Green", "approved": false },
    { "taskID": 89, "taskName": "Rebekah", "startDate": "8/18/2021", "priority": "Yellow", "approved": false },
    { "taskID": 90, "taskName": "Hatti", "startDate": "11/20/2020", "priority": "Indigo", "approved": false },
    { "taskID": 91, "taskName": "Sergeant", "startDate": "5/23/2021", "priority": "Mauv", "approved": true },
    { "taskID": 92, "taskName": "Robinette", "startDate": "2/15/2021", "priority": "Turquoise", "approved": false },
    { "taskID": 93, "taskName": "Karina", "startDate": "12/18/2020", "priority": "Khaki", "approved": true },
    { "taskID": 94, "taskName": "Mandy", "startDate": "11/2/2020", "priority": "Aquamarine", "approved": false },
    { "taskID": 95, "taskName": "Ranique", "startDate": "3/7/2021", "priority": "Green", "approved": true },
    { "taskID": 96, "taskName": "Verile", "startDate": "9/2/2021", "priority": "Orange", "approved": false },
    { "taskID": 97, "taskName": "Ebony", "startDate": "10/9/2021", "priority": "Violet", "approved": false },
    { "taskID": 98, "taskName": "Jordain", "startDate": "1/20/2021", "priority": "Green", "approved": true },
    { "taskID": 99, "taskName": "Minnie", "startDate": "4/1/2021", "priority": "Yellow", "approved": true },
    { "taskID": 100, "taskName": "Edythe", "startDate": "2/22/2021", "priority": "Indigo", "approved": false },
    { "taskID": 101, "taskName": "Rich", "startDate": "7/17/2021", "priority": "Blue", "approved": true },
    { "taskID": 102, "taskName": "Marabel", "startDate": "3/8/2021", "priority": "Green", "approved": false },
    { "taskID": 103, "taskName": "Essy", "startDate": "4/25/2021", "priority": "Violet", "approved": true },
    { "taskID": 104, "taskName": "Billie", "startDate": "2/17/2021", "priority": "Violet", "approved": false },
    { "taskID": 105, "taskName": "Lazarus", "startDate": "5/29/2021", "priority": "Purple", "approved": true },
    { "taskID": 106, "taskName": "Janot", "startDate": "2/10/2021", "priority": "Pink", "approved": true },
    { "taskID": 107, "taskName": "Josias", "startDate": "3/31/2021", "priority": "Orange", "approved": false },
    { "taskID": 108, "taskName": "Vernice", "startDate": "12/8/2020", "priority": "Teal", "approved": true },
    { "taskID": 109, "taskName": "Joey", "startDate": "12/6/2020", "priority": "Yellow", "approved": false },
    { "taskID": 110, "taskName": "Hashim", "startDate": "7/17/2021", "priority": "Turquoise", "approved": false },
    { "taskID": 111, "taskName": "Margalo", "startDate": "3/20/2021", "priority": "Crimson", "approved": false },
    { "taskID": 112, "taskName": "Zollie", "startDate": "2/24/2021", "priority": "Pink", "approved": false },
    { "taskID": 113, "taskName": "Marilin", "startDate": "8/27/2021", "priority": "Puce", "approved": false },
    { "taskID": 114, "taskName": "Sonya", "startDate": "2/6/2021", "priority": "Orange", "approved": false },
    { "taskID": 115, "taskName": "Yancey", "startDate": "6/14/2021", "priority": "Purple", "approved": true },
    { "taskID": 116, "taskName": "Juan", "startDate": "12/9/2020", "priority": "Green", "approved": true },
    { "taskID": 117, "taskName": "Katy", "startDate": "7/6/2021", "priority": "Crimson", "approved": false },
    { "taskID": 118, "taskName": "Aileen", "startDate": "6/23/2021", "priority": "Blue", "approved": true },
    { "taskID": 119, "taskName": "Garvin", "startDate": "4/18/2021", "priority": "Purple", "approved": false },
    { "taskID": 120, "taskName": "Wanda", "startDate": "3/3/2021", "priority": "Orange", "approved": true },
    { "taskID": 121, "taskName": "Alecia", "startDate": "1/6/2021", "priority": "Teal", "approved": true },
    { "taskID": 122, "taskName": "Faber", "startDate": "7/17/2021", "priority": "Red", "approved": false },
    { "taskID": 123, "taskName": "Aloysius", "startDate": "1/9/2021", "priority": "Purple", "approved": true },
    { "taskID": 124, "taskName": "Caressa", "startDate": "10/27/2020", "priority": "Fuscia", "approved": false },
    { "taskID": 125, "taskName": "Brice", "startDate": "5/30/2021", "priority": "Green", "approved": true },
    { "taskID": 126, "taskName": "Ab", "startDate": "10/12/2021", "priority": "Green", "approved": false },
    { "taskID": 127, "taskName": "Aloin", "startDate": "3/25/2021", "priority": "Pink", "approved": false },
    { "taskID": 128, "taskName": "Alicea", "startDate": "12/17/2020", "priority": "Maroon", "approved": false },
    { "taskID": 129, "taskName": "Maybelle", "startDate": "7/31/2021", "priority": "Mauv", "approved": false },
    { "taskID": 130, "taskName": "Bailey", "startDate": "2/23/2021", "priority": "Maroon", "approved": false },
    { "taskID": 131, "taskName": "Lilah", "startDate": "6/25/2021", "priority": "Pink", "approved": true },
    { "taskID": 132, "taskName": "Gweneth", "startDate": "5/28/2021", "priority": "Fuscia", "approved": false },
    { "taskID": 133, "taskName": "Danny", "startDate": "1/9/2021", "priority": "Mauv", "approved": false },
    { "taskID": 134, "taskName": "Remus", "startDate": "4/23/2021", "priority": "Fuscia", "approved": true },
    { "taskID": 135, "taskName": "Thorstein", "startDate": "9/25/2021", "priority": "Maroon", "approved": true },
    { "taskID": 136, "taskName": "Binny", "startDate": "5/1/2021", "priority": "Indigo", "approved": true },
    { "taskID": 137, "taskName": "Arv", "startDate": "12/25/2020", "priority": "Pink", "approved": false },
    { "taskID": 138, "taskName": "Marcela", "startDate": "8/9/2021", "priority": "Yellow", "approved": true },
    { "taskID": 139, "taskName": "Sebastian", "startDate": "5/18/2021", "priority": "Blue", "approved": true },
    { "taskID": 140, "taskName": "Dorree", "startDate": "6/22/2021", "priority": "Indigo", "approved": true },
    { "taskID": 141, "taskName": "Allene", "startDate": "2/4/2021", "priority": "Fuscia", "approved": true },
    { "taskID": 142, "taskName": "Traver", "startDate": "1/18/2021", "priority": "Orange", "approved": false },
    { "taskID": 143, "taskName": "Irina", "startDate": "4/21/2021", "priority": "Goldenrod", "approved": false },
    { "taskID": 144, "taskName": "Haywood", "startDate": "8/24/2021", "priority": "Maroon", "approved": true },
    { "taskID": 145, "taskName": "Brnaby", "startDate": "2/3/2021", "priority": "Orange", "approved": false },
    { "taskID": 146, "taskName": "Emelyne", "startDate": "12/10/2020", "priority": "Green", "approved": true },
    { "taskID": 147, "taskName": "Kittie", "startDate": "6/17/2021", "priority": "Aquamarine", "approved": true },
    { "taskID": 148, "taskName": "Lefty", "startDate": "1/14/2021", "priority": "Yellow", "approved": false },
    { "taskID": 149, "taskName": "Erina", "startDate": "5/24/2021", "priority": "Fuscia", "approved": true },
    { "taskID": 150, "taskName": "Vilma", "startDate": "2/3/2021", "priority": "Orange", "approved": true },
    { "taskID": 151, "taskName": "Vinny", "startDate": "9/6/2021", "priority": "Fuscia", "approved": true },
    { "taskID": 152, "taskName": "Blakeley", "startDate": "4/2/2021", "priority": "Indigo", "approved": false },
    { "taskID": 153, "taskName": "Toby", "startDate": "11/13/2020", "priority": "Fuscia", "approved": false },
    { "taskID": 154, "taskName": "Shelby", "startDate": "8/18/2021", "priority": "Aquamarine", "approved": true },
    { "taskID": 155, "taskName": "Thalia", "startDate": "5/24/2021", "priority": "Violet", "approved": false },
    { "taskID": 156, "taskName": "Theressa", "startDate": "10/7/2021", "priority": "Goldenrod", "approved": false },
    { "taskID": 157, "taskName": "Hector", "startDate": "9/15/2021", "priority": "Blue", "approved": false },
    { "taskID": 158, "taskName": "Kitty", "startDate": "6/16/2021", "priority": "Puce", "approved": false },
    { "taskID": 159, "taskName": "Weider", "startDate": "1/24/2021", "priority": "Aquamarine", "approved": false },
    { "taskID": 160, "taskName": "Myrilla", "startDate": "3/16/2021", "priority": "Red", "approved": false },
    { "taskID": 161, "taskName": "Fran", "startDate": "12/4/2020", "priority": "Pink", "approved": false },
    { "taskID": 162, "taskName": "Konstance", "startDate": "7/11/2021", "priority": "Khaki", "approved": true },
    { "taskID": 163, "taskName": "Kordula", "startDate": "7/20/2021", "priority": "Crimson", "approved": false },
    { "taskID": 164, "taskName": "Marcia", "startDate": "3/12/2021", "priority": "Puce", "approved": false },
    { "taskID": 165, "taskName": "Evered", "startDate": "6/12/2021", "priority": "Purple", "approved": true },
    { "taskID": 166, "taskName": "Myrtice", "startDate": "12/10/2020", "priority": "Indigo", "approved": false },
    { "taskID": 167, "taskName": "Bartholomeus", "startDate": "11/23/2020", "priority": "Aquamarine", "approved": true },
    { "taskID": 168, "taskName": "Vin", "startDate": "10/12/2021", "priority": "Yellow", "approved": false },
    { "taskID": 169, "taskName": "Alli", "startDate": "1/30/2021", "priority": "Green", "approved": true },
    { "taskID": 170, "taskName": "Ennis", "startDate": "6/7/2021", "priority": "Mauv", "approved": true },
    { "taskID": 171, "taskName": "Hamel", "startDate": "9/14/2021", "priority": "Violet", "approved": false },
    { "taskID": 172, "taskName": "Goldina", "startDate": "12/5/2020", "priority": "Khaki", "approved": true },
    { "taskID": 173, "taskName": "Layla", "startDate": "3/9/2021", "priority": "Mauv", "approved": true },
    { "taskID": 174, "taskName": "Gabriello", "startDate": "2/13/2021", "priority": "Aquamarine", "approved": false },
    { "taskID": 175, "taskName": "Flynn", "startDate": "5/11/2021", "priority": "Indigo", "approved": true },
    { "taskID": 176, "taskName": "Roseann", "startDate": "6/8/2021", "priority": "Crimson", "approved": false },
    { "taskID": 177, "taskName": "Gerrard", "startDate": "11/4/2020", "priority": "Purple", "approved": true },
    { "taskID": 178, "taskName": "Marcille", "startDate": "9/14/2021", "priority": "Purple", "approved": false },
    { "taskID": 179, "taskName": "Morie", "startDate": "7/14/2021", "priority": "Khaki", "approved": false },
    { "taskID": 180, "taskName": "Lotty", "startDate": "1/30/2021", "priority": "Aquamarine", "approved": true },
    { "taskID": 181, "taskName": "Mohandas", "startDate": "12/18/2020", "priority": "Goldenrod", "approved": true },
    { "taskID": 182, "taskName": "Niki", "startDate": "6/14/2021", "priority": "Aquamarine", "approved": true },
    { "taskID": 183, "taskName": "Jorge", "startDate": "11/24/2020", "priority": "Violet", "approved": true },
    { "taskID": 184, "taskName": "Lacie", "startDate": "8/23/2021", "priority": "Yellow", "approved": false },
    { "taskID": 185, "taskName": "Mano", "startDate": "2/27/2021", "priority": "Red", "approved": true },
    { "taskID": 186, "taskName": "Port", "startDate": "1/22/2021", "priority": "Violet", "approved": true },
    { "taskID": 187, "taskName": "Christie", "startDate": "6/7/2021", "priority": "Teal", "approved": false },
    { "taskID": 188, "taskName": "Bevin", "startDate": "4/8/2021", "priority": "Blue", "approved": true },
    { "taskID": 189, "taskName": "Emyle", "startDate": "8/8/2021", "priority": "Orange", "approved": false },
    { "taskID": 190, "taskName": "Estrellita", "startDate": "7/3/2021", "priority": "Indigo", "approved": true },
    { "taskID": 191, "taskName": "Bryon", "startDate": "9/15/2021", "priority": "Blue", "approved": false },
    { "taskID": 192, "taskName": "Natalie", "startDate": "6/19/2021", "priority": "Puce", "approved": false },
    { "taskID": 193, "taskName": "Gus", "startDate": "4/9/2021", "priority": "Khaki", "approved": false },
    { "taskID": 194, "taskName": "Rube", "startDate": "9/23/2021", "priority": "Turquoise", "approved": true },
    { "taskID": 195, "taskName": "Louisa", "startDate": "9/16/2021", "priority": "Khaki", "approved": false },
    { "taskID": 196, "taskName": "Nadean", "startDate": "4/13/2021", "priority": "Mauv", "approved": false },
    { "taskID": 197, "taskName": "Deane", "startDate": "1/30/2021", "priority": "Pink", "approved": true },
    { "taskID": 198, "taskName": "Garrett", "startDate": "8/14/2021", "priority": "Red", "approved": true },
    { "taskID": 199, "taskName": "Evvy", "startDate": "7/28/2021", "priority": "Green", "approved": false },
    { "taskID": 200, "taskName": "Odelinda", "startDate": "1/28/2021", "priority": "Crimson", "approved": false },
    { "taskID": 201, "taskName": "Cristionna", "startDate": "12/31/2020", "priority": "Turquoise", "approved": false },
    { "taskID": 202, "taskName": "Had", "startDate": "5/17/2021", "priority": "Turquoise", "approved": false },
    { "taskID": 203, "taskName": "Orelia", "startDate": "10/2/2021", "priority": "Puce", "approved": true },
    { "taskID": 204, "taskName": "Arvin", "startDate": "5/14/2021", "priority": "Teal", "approved": true },
    { "taskID": 205, "taskName": "Sterne", "startDate": "7/28/2021", "priority": "Maroon", "approved": false },
    { "taskID": 206, "taskName": "Paddy", "startDate": "2/22/2021", "priority": "Puce", "approved": false },
    { "taskID": 207, "taskName": "Suzi", "startDate": "12/13/2020", "priority": "Khaki", "approved": false },
    { "taskID": 208, "taskName": "Grayce", "startDate": "11/26/2020", "priority": "Pink", "approved": true },
    { "taskID": 209, "taskName": "Verile", "startDate": "1/16/2021", "priority": "Orange", "approved": false },
    { "taskID": 210, "taskName": "Trey", "startDate": "2/16/2021", "priority": "Crimson", "approved": true },
    { "taskID": 211, "taskName": "Arne", "startDate": "1/13/2021", "priority": "Teal", "approved": true },
    { "taskID": 212, "taskName": "Stevie", "startDate": "9/25/2021", "priority": "Teal", "approved": false },
    { "taskID": 213, "taskName": "Muffin", "startDate": "6/27/2021", "priority": "Maroon", "approved": true },
    { "taskID": 214, "taskName": "Sinclare", "startDate": "9/30/2021", "priority": "Purple", "approved": false },
    { "taskID": 215, "taskName": "Bengt", "startDate": "8/11/2021", "priority": "Crimson", "approved": true },
    { "taskID": 216, "taskName": "Page", "startDate": "4/27/2021", "priority": "Green", "approved": true },
    { "taskID": 217, "taskName": "Ariel", "startDate": "8/16/2021", "priority": "Violet", "approved": true },
    { "taskID": 218, "taskName": "Rhys", "startDate": "12/13/2020", "priority": "Turquoise", "approved": true },
    { "taskID": 219, "taskName": "Pier", "startDate": "2/19/2021", "priority": "Khaki", "approved": true },
    { "taskID": 220, "taskName": "Ilysa", "startDate": "3/6/2021", "priority": "Yellow", "approved": true },
    { "taskID": 221, "taskName": "Lesley", "startDate": "6/12/2021", "priority": "Goldenrod", "approved": false },
    { "taskID": 222, "taskName": "Francesco", "startDate": "1/11/2021", "priority": "Purple", "approved": false },
    { "taskID": 223, "taskName": "Alphard", "startDate": "7/24/2021", "priority": "Indigo", "approved": false },
    { "taskID": 224, "taskName": "Lettie", "startDate": "4/25/2021", "priority": "Purple", "approved": true },
    { "taskID": 225, "taskName": "Osmund", "startDate": "3/19/2021", "priority": "Crimson", "approved": true },
    { "taskID": 226, "taskName": "Ring", "startDate": "12/14/2020", "priority": "Puce", "approved": false },
    { "taskID": 227, "taskName": "Bell", "startDate": "8/13/2021", "priority": "Purple", "approved": false },
    { "taskID": 228, "taskName": "Dru", "startDate": "10/12/2021", "priority": "Purple", "approved": true },
    { "taskID": 229, "taskName": "Hyacinthia", "startDate": "3/27/2021", "priority": "Purple", "approved": true },
    { "taskID": 230, "taskName": "Dotti", "startDate": "4/28/2021", "priority": "Fuscia", "approved": false },
    { "taskID": 231, "taskName": "Gradey", "startDate": "2/15/2021", "priority": "Mauv", "approved": true },
    { "taskID": 232, "taskName": "Laurene", "startDate": "7/8/2021", "priority": "Blue", "approved": true },
    { "taskID": 233, "taskName": "Xerxes", "startDate": "12/14/2020", "priority": "Teal", "approved": true },
    { "taskID": 234, "taskName": "Kissee", "startDate": "7/19/2021", "priority": "Blue", "approved": false },
    { "taskID": 235, "taskName": "Clovis", "startDate": "3/1/2021", "priority": "Crimson", "approved": false },
    { "taskID": 236, "taskName": "Hyacinthe", "startDate": "3/7/2021", "priority": "Aquamarine", "approved": true },
    { "taskID": 237, "taskName": "Dukey", "startDate": "11/15/2020", "priority": "Goldenrod", "approved": false },
    { "taskID": 238, "taskName": "Luce", "startDate": "5/6/2021", "priority": "Yellow", "approved": false },
    { "taskID": 239, "taskName": "Anneliese", "startDate": "7/14/2021", "priority": "Orange", "approved": false },
    { "taskID": 240, "taskName": "Clerc", "startDate": "4/4/2021", "priority": "Khaki", "approved": false },
    { "taskID": 241, "taskName": "Ario", "startDate": "7/14/2021", "priority": "Khaki", "approved": true },
    { "taskID": 242, "taskName": "Brianne", "startDate": "2/28/2021", "priority": "Maroon", "approved": false },
    { "taskID": 243, "taskName": "Ruprecht", "startDate": "6/10/2021", "priority": "Crimson", "approved": true },
    { "taskID": 244, "taskName": "Aviva", "startDate": "7/7/2021", "priority": "Khaki", "approved": false },
    { "taskID": 245, "taskName": "Louella", "startDate": "12/10/2020", "priority": "Khaki", "approved": false },
    { "taskID": 246, "taskName": "Rubina", "startDate": "1/26/2021", "priority": "Violet", "approved": true },
    { "taskID": 247, "taskName": "Dre", "startDate": "10/12/2021", "priority": "Yellow", "approved": false },
    { "taskID": 248, "taskName": "Francis", "startDate": "2/5/2021", "priority": "Maroon", "approved": true },
    { "taskID": 249, "taskName": "Jamima", "startDate": "9/19/2021", "priority": "Orange", "approved": true },
    { "taskID": 250, "taskName": "Papagena", "startDate": "3/2/2021", "priority": "Teal", "approved": false },
    { "taskID": 251, "taskName": "Vivia", "startDate": "11/4/2020", "priority": "Aquamarine", "approved": false },
    { "taskID": 252, "taskName": "Audre", "startDate": "11/29/2020", "priority": "Blue", "approved": true },
    { "taskID": 253, "taskName": "Junie", "startDate": "9/2/2021", "priority": "Blue", "approved": true },
    { "taskID": 254, "taskName": "Corbin", "startDate": "4/8/2021", "priority": "Goldenrod", "approved": true },
    { "taskID": 255, "taskName": "Ned", "startDate": "1/30/2021", "priority": "Teal", "approved": true },
    { "taskID": 256, "taskName": "Maurene", "startDate": "4/17/2021", "priority": "Red", "approved": true },
    { "taskID": 257, "taskName": "Dorry", "startDate": "6/24/2021", "priority": "Khaki", "approved": true },
    { "taskID": 258, "taskName": "Thibaut", "startDate": "6/6/2021", "priority": "Teal", "approved": true },
    { "taskID": 259, "taskName": "Roscoe", "startDate": "1/27/2021", "priority": "Yellow", "approved": true },
    { "taskID": 260, "taskName": "Ede", "startDate": "11/13/2020", "priority": "Goldenrod", "approved": false },
    { "taskID": 261, "taskName": "Isis", "startDate": "12/27/2020", "priority": "Yellow", "approved": true },
    { "taskID": 262, "taskName": "Howey", "startDate": "9/10/2021", "priority": "Red", "approved": false },
    { "taskID": 263, "taskName": "Conny", "startDate": "4/16/2021", "priority": "Indigo", "approved": false },
    { "taskID": 264, "taskName": "Luther", "startDate": "1/13/2021", "priority": "Turquoise", "approved": true },
    { "taskID": 265, "taskName": "Mathilda", "startDate": "11/12/2020", "priority": "Mauv", "approved": true },
    { "taskID": 266, "taskName": "Odette", "startDate": "3/17/2021", "priority": "Goldenrod", "approved": true },
    { "taskID": 267, "taskName": "Alis", "startDate": "10/23/2020", "priority": "Pink", "approved": false },
    { "taskID": 268, "taskName": "Job", "startDate": "9/10/2021", "priority": "Purple", "approved": false },
    { "taskID": 269, "taskName": "Daniele", "startDate": "4/7/2021", "priority": "Purple", "approved": true },
    { "taskID": 270, "taskName": "Ruthie", "startDate": "10/10/2021", "priority": "Khaki", "approved": true },
    { "taskID": 271, "taskName": "Barbi", "startDate": "10/18/2021", "priority": "Teal", "approved": true },
    { "taskID": 272, "taskName": "Alexio", "startDate": "1/14/2021", "priority": "Puce", "approved": true },
    { "taskID": 273, "taskName": "Thomasine", "startDate": "1/29/2021", "priority": "Goldenrod", "approved": false },
    { "taskID": 274, "taskName": "Andriana", "startDate": "7/3/2021", "priority": "Crimson", "approved": true },
    { "taskID": 275, "taskName": "Yancy", "startDate": "5/23/2021", "priority": "Mauv", "approved": true },
    { "taskID": 276, "taskName": "Heall", "startDate": "7/18/2021", "priority": "Aquamarine", "approved": true },
    { "taskID": 277, "taskName": "Laurette", "startDate": "8/2/2021", "priority": "Green", "approved": false },
    { "taskID": 278, "taskName": "Kathy", "startDate": "7/29/2021", "priority": "Aquamarine", "approved": false },
    { "taskID": 279, "taskName": "Quinta", "startDate": "8/7/2021", "priority": "Green", "approved": false },
    { "taskID": 280, "taskName": "Arluene", "startDate": "11/29/2020", "priority": "Red", "approved": true },
    { "taskID": 281, "taskName": "Jesus", "startDate": "3/15/2021", "priority": "Violet", "approved": true },
    { "taskID": 282, "taskName": "Shelden", "startDate": "2/2/2021", "priority": "Puce", "approved": false },
    { "taskID": 283, "taskName": "Maje", "startDate": "1/2/2021", "priority": "Fuscia", "approved": true },
    { "taskID": 284, "taskName": "Philip", "startDate": "2/27/2021", "priority": "Maroon", "approved": true },
    { "taskID": 285, "taskName": "Grier", "startDate": "6/13/2021", "priority": "Blue", "approved": false },
    { "taskID": 286, "taskName": "Gothart", "startDate": "10/2/2021", "priority": "Purple", "approved": false },
    { "taskID": 287, "taskName": "Evin", "startDate": "12/2/2020", "priority": "Green", "approved": false },
    { "taskID": 288, "taskName": "Carrissa", "startDate": "11/22/2020", "priority": "Purple", "approved": true },
    { "taskID": 289, "taskName": "Justen", "startDate": "6/28/2021", "priority": "Purple", "approved": true },
    { "taskID": 290, "taskName": "Tammara", "startDate": "4/4/2021", "priority": "Turquoise", "approved": true },
    { "taskID": 291, "taskName": "Adora", "startDate": "5/13/2021", "priority": "Goldenrod", "approved": true },
    { "taskID": 292, "taskName": "Kenton", "startDate": "10/22/2020", "priority": "Red", "approved": true },
    { "taskID": 293, "taskName": "Alina", "startDate": "7/25/2021", "priority": "Red", "approved": true },
    { "taskID": 294, "taskName": "Myer", "startDate": "5/27/2021", "priority": "Indigo", "approved": true },
    { "taskID": 295, "taskName": "Carlota", "startDate": "2/15/2021", "priority": "Red", "approved": false },
    { "taskID": 296, "taskName": "Melodee", "startDate": "4/25/2021", "priority": "Pink", "approved": false },
    { "taskID": 297, "taskName": "Leonidas", "startDate": "9/29/2021", "priority": "Blue", "approved": true },
    { "taskID": 298, "taskName": "Demetria", "startDate": "12/16/2020", "priority": "Green", "approved": true },
    { "taskID": 299, "taskName": "Hatty", "startDate": "1/14/2021", "priority": "Blue", "approved": false },
    { "taskID": 300, "taskName": "Chick", "startDate": "3/16/2021", "priority": "Pink", "approved": false },
    { "taskID": 301, "taskName": "Chaunce", "startDate": "8/10/2021", "priority": "Purple", "approved": true },
    { "taskID": 302, "taskName": "Ruthanne", "startDate": "6/9/2021", "priority": "Blue", "approved": false },
    { "taskID": 303, "taskName": "Fulvia", "startDate": "9/12/2021", "priority": "Puce", "approved": false },
    { "taskID": 304, "taskName": "Haley", "startDate": "2/16/2021", "priority": "Pink", "approved": true },
    { "taskID": 305, "taskName": "Garnet", "startDate": "9/3/2021", "priority": "Goldenrod", "approved": true },
    { "taskID": 306, "taskName": "Eben", "startDate": "8/18/2021", "priority": "Puce", "approved": true },
    { "taskID": 307, "taskName": "Deerdre", "startDate": "12/30/2020", "priority": "Yellow", "approved": false },
    { "taskID": 308, "taskName": "Bram", "startDate": "12/14/2020", "priority": "Red", "approved": false },
    { "taskID": 309, "taskName": "Mabelle", "startDate": "6/6/2021", "priority": "Khaki", "approved": false },
    { "taskID": 310, "taskName": "Kellen", "startDate": "4/1/2021", "priority": "Yellow", "approved": false },
    { "taskID": 311, "taskName": "Rozanna", "startDate": "1/9/2021", "priority": "Indigo", "approved": false },
    { "taskID": 312, "taskName": "Tonye", "startDate": "10/13/2021", "priority": "Purple", "approved": false },
    { "taskID": 313, "taskName": "Riva", "startDate": "3/17/2021", "priority": "Blue", "approved": true },
    { "taskID": 314, "taskName": "Vinnie", "startDate": "6/1/2021", "priority": "Turquoise", "approved": true },
    { "taskID": 315, "taskName": "Elmore", "startDate": "11/5/2020", "priority": "Violet", "approved": false },
    { "taskID": 316, "taskName": "Carmelle", "startDate": "7/6/2021", "priority": "Blue", "approved": true },
    { "taskID": 317, "taskName": "Wyatan", "startDate": "7/22/2021", "priority": "Turquoise", "approved": true },
    { "taskID": 318, "taskName": "Quintus", "startDate": "7/24/2021", "priority": "Indigo", "approved": false },
    { "taskID": 319, "taskName": "Misti", "startDate": "8/23/2021", "priority": "Turquoise", "approved": true },
    { "taskID": 320, "taskName": "Tildie", "startDate": "1/18/2021", "priority": "Blue", "approved": true },
    { "taskID": 321, "taskName": "Stormi", "startDate": "6/7/2021", "priority": "Pink", "approved": true },
    { "taskID": 322, "taskName": "Talbert", "startDate": "1/9/2021", "priority": "Yellow", "approved": false },
    { "taskID": 323, "taskName": "Bertina", "startDate": "2/16/2021", "priority": "Aquamarine", "approved": false },
    { "taskID": 324, "taskName": "Codi", "startDate": "9/12/2021", "priority": "Pink", "approved": false },
    { "taskID": 325, "taskName": "Marrissa", "startDate": "9/13/2021", "priority": "Indigo", "approved": false },
    { "taskID": 326, "taskName": "Melony", "startDate": "10/23/2020", "priority": "Purple", "approved": true },
    { "taskID": 327, "taskName": "Gray", "startDate": "6/7/2021", "priority": "Pink", "approved": false },
    { "taskID": 328, "taskName": "Garvy", "startDate": "7/14/2021", "priority": "Khaki", "approved": true },
    { "taskID": 329, "taskName": "Seumas", "startDate": "12/22/2020", "priority": "Fuscia", "approved": false },
    { "taskID": 330, "taskName": "Roxine", "startDate": "6/20/2021", "priority": "Yellow", "approved": true },
    { "taskID": 331, "taskName": "Danie", "startDate": "12/23/2020", "priority": "Turquoise", "approved": true },
    { "taskID": 332, "taskName": "Claudell", "startDate": "8/13/2021", "priority": "Pink", "approved": false },
    { "taskID": 333, "taskName": "Gilberte", "startDate": "12/9/2020", "priority": "Pink", "approved": false },
    { "taskID": 334, "taskName": "Clarie", "startDate": "1/14/2021", "priority": "Pink", "approved": false },
    { "taskID": 335, "taskName": "Abbe", "startDate": "11/24/2020", "priority": "Puce", "approved": false },
    { "taskID": 336, "taskName": "Evangeline", "startDate": "6/8/2021", "priority": "Pink", "approved": false },
    { "taskID": 337, "taskName": "Bill", "startDate": "8/31/2021", "priority": "Green", "approved": false },
    { "taskID": 338, "taskName": "Renee", "startDate": "9/4/2021", "priority": "Puce", "approved": false },
    { "taskID": 339, "taskName": "Peadar", "startDate": "11/5/2020", "priority": "Violet", "approved": true },
    { "taskID": 340, "taskName": "Kathryn", "startDate": "12/11/2020", "priority": "Puce", "approved": true },
    { "taskID": 341, "taskName": "Francisca", "startDate": "3/6/2021", "priority": "Green", "approved": false },
    { "taskID": 342, "taskName": "Danit", "startDate": "3/27/2021", "priority": "Red", "approved": false },
    { "taskID": 343, "taskName": "Veronique", "startDate": "4/10/2021", "priority": "Crimson", "approved": true },
    { "taskID": 344, "taskName": "Edwin", "startDate": "11/30/2020", "priority": "Maroon", "approved": true },
    { "taskID": 345, "taskName": "Shana", "startDate": "7/7/2021", "priority": "Red", "approved": false },
    { "taskID": 346, "taskName": "Malena", "startDate": "7/25/2021", "priority": "Yellow", "approved": true },
    { "taskID": 347, "taskName": "Magdalene", "startDate": "8/23/2021", "priority": "Pink", "approved": false },
    { "taskID": 348, "taskName": "Chere", "startDate": "7/8/2021", "priority": "Red", "approved": true },
    { "taskID": 349, "taskName": "Agatha", "startDate": "11/6/2020", "priority": "Crimson", "approved": true },
    { "taskID": 350, "taskName": "Jakob", "startDate": "8/26/2021", "priority": "Blue", "approved": true },
    { "taskID": 351, "taskName": "Franny", "startDate": "10/4/2021", "priority": "Blue", "approved": true },
    { "taskID": 352, "taskName": "Vasili", "startDate": "2/24/2021", "priority": "Maroon", "approved": true },
    { "taskID": 353, "taskName": "Roseann", "startDate": "12/27/2020", "priority": "Puce", "approved": true },
    { "taskID": 354, "taskName": "Kelcey", "startDate": "8/3/2021", "priority": "Blue", "approved": false },
    { "taskID": 355, "taskName": "Karalynn", "startDate": "4/5/2021", "priority": "Violet", "approved": true },
    { "taskID": 356, "taskName": "Clayton", "startDate": "11/15/2020", "priority": "Indigo", "approved": true },
    { "taskID": 357, "taskName": "Una", "startDate": "9/9/2021", "priority": "Yellow", "approved": true },
    { "taskID": 358, "taskName": "Joshia", "startDate": "7/19/2021", "priority": "Aquamarine", "approved": true },
    { "taskID": 359, "taskName": "Vern", "startDate": "1/4/2021", "priority": "Teal", "approved": false },
    { "taskID": 360, "taskName": "Smith", "startDate": "10/22/2020", "priority": "Red", "approved": false },
    { "taskID": 361, "taskName": "Phaedra", "startDate": "7/7/2021", "priority": "Turquoise", "approved": true },
    { "taskID": 362, "taskName": "Krissy", "startDate": "3/19/2021", "priority": "Puce", "approved": false },
    { "taskID": 363, "taskName": "Briggs", "startDate": "12/22/2020", "priority": "Goldenrod", "approved": false },
    { "taskID": 364, "taskName": "Wrennie", "startDate": "2/11/2021", "priority": "Mauv", "approved": false },
    { "taskID": 365, "taskName": "Zola", "startDate": "11/12/2020", "priority": "Violet", "approved": false },
    { "taskID": 366, "taskName": "Rosene", "startDate": "10/19/2021", "priority": "Blue", "approved": true },
    { "taskID": 367, "taskName": "Gennifer", "startDate": "3/14/2021", "priority": "Crimson", "approved": true },
    { "taskID": 368, "taskName": "Enriqueta", "startDate": "2/13/2021", "priority": "Violet", "approved": false },
    { "taskID": 369, "taskName": "Crichton", "startDate": "2/25/2021", "priority": "Yellow", "approved": false },
    { "taskID": 370, "taskName": "Chariot", "startDate": "11/15/2020", "priority": "Red", "approved": false },
    { "taskID": 371, "taskName": "Loreen", "startDate": "10/12/2021", "priority": "Mauv", "approved": false },
    { "taskID": 372, "taskName": "Janean", "startDate": "12/13/2020", "priority": "Green", "approved": true },
    { "taskID": 373, "taskName": "Bink", "startDate": "1/5/2021", "priority": "Puce", "approved": true },
    { "taskID": 374, "taskName": "Crystal", "startDate": "9/9/2021", "priority": "Blue", "approved": false },
    { "taskID": 375, "taskName": "Layney", "startDate": "4/10/2021", "priority": "Red", "approved": true },
    { "taskID": 376, "taskName": "Ebony", "startDate": "3/16/2021", "priority": "Aquamarine", "approved": false },
    { "taskID": 377, "taskName": "Norton", "startDate": "3/31/2021", "priority": "Khaki", "approved": false },
    { "taskID": 378, "taskName": "Sianna", "startDate": "1/8/2021", "priority": "Aquamarine", "approved": false },
    { "taskID": 379, "taskName": "Lorilyn", "startDate": "1/31/2021", "priority": "Green", "approved": true },
    { "taskID": 380, "taskName": "Trisha", "startDate": "2/23/2021", "priority": "Violet", "approved": true },
    { "taskID": 381, "taskName": "Leann", "startDate": "5/2/2021", "priority": "Green", "approved": true },
    { "taskID": 382, "taskName": "Rosemaria", "startDate": "5/24/2021", "priority": "Blue", "approved": false },
    { "taskID": 383, "taskName": "Tomaso", "startDate": "10/9/2021", "priority": "Fuscia", "approved": true },
    { "taskID": 384, "taskName": "Torrance", "startDate": "8/16/2021", "priority": "Purple", "approved": false },
    { "taskID": 385, "taskName": "Vivianna", "startDate": "4/8/2021", "priority": "Blue", "approved": false },
    { "taskID": 386, "taskName": "Jose", "startDate": "8/19/2021", "priority": "Purple", "approved": true },
    { "taskID": 387, "taskName": "Kellina", "startDate": "1/9/2021", "priority": "Purple", "approved": false },
    { "taskID": 388, "taskName": "Nesta", "startDate": "6/14/2021", "priority": "Goldenrod", "approved": true },
    { "taskID": 389, "taskName": "Cally", "startDate": "2/20/2021", "priority": "Maroon", "approved": true },
    { "taskID": 390, "taskName": "Valenka", "startDate": "1/19/2021", "priority": "Teal", "approved": true },
    { "taskID": 391, "taskName": "Queenie", "startDate": "2/9/2021", "priority": "Fuscia", "approved": true },
    { "taskID": 392, "taskName": "Denice", "startDate": "3/12/2021", "priority": "Violet", "approved": true },
    { "taskID": 393, "taskName": "Eirena", "startDate": "12/13/2020", "priority": "Indigo", "approved": true },
    { "taskID": 394, "taskName": "Paige", "startDate": "5/22/2021", "priority": "Orange", "approved": true },
    { "taskID": 395, "taskName": "Clywd", "startDate": "1/3/2021", "priority": "Maroon", "approved": true },
    { "taskID": 396, "taskName": "Moishe", "startDate": "12/4/2020", "priority": "Crimson", "approved": true },
    { "taskID": 397, "taskName": "Logan", "startDate": "10/28/2020", "priority": "Khaki", "approved": false },
    { "taskID": 398, "taskName": "Aldridge", "startDate": "5/25/2021", "priority": "Blue", "approved": false },
    { "taskID": 399, "taskName": "Catrina", "startDate": "11/15/2020", "priority": "Maroon", "approved": false },
    { "taskID": 400, "taskName": "Filbert", "startDate": "1/14/2021", "priority": "Mauv", "approved": false },
    { "taskID": 401, "taskName": "Glynda", "startDate": "10/10/2021", "priority": "Orange", "approved": true },
    { "taskID": 402, "taskName": "Henrik", "startDate": "7/21/2021", "priority": "Fuscia", "approved": true },
    { "taskID": 403, "taskName": "Valerie", "startDate": "4/1/2021", "priority": "Indigo", "approved": false },
    { "taskID": 404, "taskName": "Langston", "startDate": "10/20/2020", "priority": "Aquamarine", "approved": true },
    { "taskID": 405, "taskName": "Nikolia", "startDate": "3/28/2021", "priority": "Pink", "approved": true },
    { "taskID": 406, "taskName": "Mireille", "startDate": "12/3/2020", "priority": "Mauv", "approved": false },
    { "taskID": 407, "taskName": "Lenee", "startDate": "6/19/2021", "priority": "Indigo", "approved": true },
    { "taskID": 408, "taskName": "Myles", "startDate": "8/5/2021", "priority": "Violet", "approved": false },
    { "taskID": 409, "taskName": "Gilly", "startDate": "6/13/2021", "priority": "Violet", "approved": true },
    { "taskID": 410, "taskName": "Mathias", "startDate": "7/25/2021", "priority": "Maroon", "approved": true },
    { "taskID": 411, "taskName": "Tarra", "startDate": "6/21/2021", "priority": "Blue", "approved": true },
    { "taskID": 412, "taskName": "Kerby", "startDate": "3/2/2021", "priority": "Pink", "approved": true },
    { "taskID": 413, "taskName": "Oralee", "startDate": "12/3/2020", "priority": "Mauv", "approved": true },
    { "taskID": 414, "taskName": "Thebault", "startDate": "10/22/2020", "priority": "Blue", "approved": false },
    { "taskID": 415, "taskName": "Franky", "startDate": "3/10/2021", "priority": "Turquoise", "approved": false },
    { "taskID": 416, "taskName": "Stepha", "startDate": "11/18/2020", "priority": "Maroon", "approved": true },
    { "taskID": 417, "taskName": "Fred", "startDate": "2/24/2021", "priority": "Indigo", "approved": true },
    { "taskID": 418, "taskName": "Smith", "startDate": "9/23/2021", "priority": "Aquamarine", "approved": true },
    { "taskID": 419, "taskName": "Connie", "startDate": "5/3/2021", "priority": "Pink", "approved": true },
    { "taskID": 420, "taskName": "Serena", "startDate": "9/27/2021", "priority": "Goldenrod", "approved": false },
    { "taskID": 421, "taskName": "Ninetta", "startDate": "12/1/2020", "priority": "Mauv", "approved": false },
    { "taskID": 422, "taskName": "Dione", "startDate": "7/17/2021", "priority": "Red", "approved": true },
    { "taskID": 423, "taskName": "Orel", "startDate": "2/15/2021", "priority": "Mauv", "approved": false },
    { "taskID": 424, "taskName": "Heywood", "startDate": "8/19/2021", "priority": "Yellow", "approved": true },
    { "taskID": 425, "taskName": "Robers", "startDate": "12/6/2020", "priority": "Goldenrod", "approved": false },
    { "taskID": 426, "taskName": "Bone", "startDate": "8/21/2021", "priority": "Crimson", "approved": false },
    { "taskID": 427, "taskName": "Obadias", "startDate": "9/11/2021", "priority": "Turquoise", "approved": true },
    { "taskID": 428, "taskName": "Carlo", "startDate": "12/20/2020", "priority": "Orange", "approved": false },
    { "taskID": 429, "taskName": "Erin", "startDate": "5/3/2021", "priority": "Mauv", "approved": false },
    { "taskID": 430, "taskName": "Marylin", "startDate": "1/27/2021", "priority": "Maroon", "approved": true },
    { "taskID": 431, "taskName": "Marshall", "startDate": "10/23/2020", "priority": "Red", "approved": true },
    { "taskID": 432, "taskName": "Quinn", "startDate": "1/5/2021", "priority": "Pink", "approved": false },
    { "taskID": 433, "taskName": "Evanne", "startDate": "6/23/2021", "priority": "Yellow", "approved": false },
    { "taskID": 434, "taskName": "Cindie", "startDate": "2/11/2021", "priority": "Red", "approved": false },
    { "taskID": 435, "taskName": "Cynthy", "startDate": "6/20/2021", "priority": "Red", "approved": false },
    { "taskID": 436, "taskName": "Clarisse", "startDate": "8/25/2021", "priority": "Purple", "approved": false },
    { "taskID": 437, "taskName": "Dall", "startDate": "10/2/2021", "priority": "Pink", "approved": true },
    { "taskID": 438, "taskName": "Lee", "startDate": "4/22/2021", "priority": "Fuscia", "approved": true },
    { "taskID": 439, "taskName": "Arliene", "startDate": "2/28/2021", "priority": "Green", "approved": true },
    { "taskID": 440, "taskName": "Sue", "startDate": "4/7/2021", "priority": "Turquoise", "approved": true },
    { "taskID": 441, "taskName": "Scott", "startDate": "5/14/2021", "priority": "Khaki", "approved": false },
    { "taskID": 442, "taskName": "Petr", "startDate": "11/15/2020", "priority": "Fuscia", "approved": true },
    { "taskID": 443, "taskName": "Daune", "startDate": "1/13/2021", "priority": "Khaki", "approved": false },
    { "taskID": 444, "taskName": "Dall", "startDate": "5/17/2021", "priority": "Maroon", "approved": true },
    { "taskID": 445, "taskName": "Noellyn", "startDate": "12/3/2020", "priority": "Maroon", "approved": true },
    { "taskID": 446, "taskName": "Lorri", "startDate": "5/23/2021", "priority": "Khaki", "approved": true },
    { "taskID": 447, "taskName": "Helena", "startDate": "10/17/2021", "priority": "Khaki", "approved": true },
    { "taskID": 448, "taskName": "Rawley", "startDate": "2/12/2021", "priority": "Blue", "approved": false },
    { "taskID": 449, "taskName": "Nan", "startDate": "3/5/2021", "priority": "Khaki", "approved": false },
    { "taskID": 450, "taskName": "Cari", "startDate": "4/24/2021", "priority": "Turquoise", "approved": false },
    { "taskID": 451, "taskName": "Zsa zsa", "startDate": "5/8/2021", "priority": "Maroon", "approved": false },
    { "taskID": 452, "taskName": "Valentina", "startDate": "1/29/2021", "priority": "Goldenrod", "approved": false },
    { "taskID": 453, "taskName": "Humfrey", "startDate": "12/13/2020", "priority": "Crimson", "approved": true },
    { "taskID": 454, "taskName": "Faina", "startDate": "3/21/2021", "priority": "Puce", "approved": true },
    { "taskID": 455, "taskName": "Des", "startDate": "5/5/2021", "priority": "Teal", "approved": true },
    { "taskID": 456, "taskName": "Barri", "startDate": "10/15/2021", "priority": "Turquoise", "approved": false },
    { "taskID": 457, "taskName": "Dory", "startDate": "1/7/2021", "priority": "Indigo", "approved": false },
    { "taskID": 458, "taskName": "Jennie", "startDate": "8/6/2021", "priority": "Goldenrod", "approved": false },
    { "taskID": 459, "taskName": "Blanch", "startDate": "11/2/2020", "priority": "Purple", "approved": true },
    { "taskID": 460, "taskName": "Pooh", "startDate": "6/22/2021", "priority": "Crimson", "approved": true },
    { "taskID": 461, "taskName": "Amelia", "startDate": "3/3/2021", "priority": "Pink", "approved": false },
    { "taskID": 462, "taskName": "Ginnie", "startDate": "8/10/2021", "priority": "Yellow", "approved": false },
    { "taskID": 463, "taskName": "Henrik", "startDate": "1/22/2021", "priority": "Aquamarine", "approved": true },
    { "taskID": 464, "taskName": "Royal", "startDate": "4/10/2021", "priority": "Green", "approved": true },
    { "taskID": 465, "taskName": "Valentin", "startDate": "4/21/2021", "priority": "Goldenrod", "approved": true },
    { "taskID": 466, "taskName": "Morten", "startDate": "6/27/2021", "priority": "Goldenrod", "approved": false },
    { "taskID": 467, "taskName": "Wake", "startDate": "10/22/2020", "priority": "Puce", "approved": false },
    { "taskID": 468, "taskName": "Sada", "startDate": "1/18/2021", "priority": "Green", "approved": false },
    { "taskID": 469, "taskName": "Stanton", "startDate": "2/18/2021", "priority": "Pink", "approved": true },
    { "taskID": 470, "taskName": "Glynn", "startDate": "1/2/2021", "priority": "Violet", "approved": true },
    { "taskID": 471, "taskName": "Aleda", "startDate": "2/5/2021", "priority": "Fuscia", "approved": true },
    { "taskID": 472, "taskName": "Lillis", "startDate": "8/4/2021", "priority": "Crimson", "approved": true },
    { "taskID": 473, "taskName": "Huntley", "startDate": "12/12/2020", "priority": "Puce", "approved": false },
    { "taskID": 474, "taskName": "Gothart", "startDate": "5/12/2021", "priority": "Blue", "approved": false },
    { "taskID": 475, "taskName": "Conrade", "startDate": "9/28/2021", "priority": "Turquoise", "approved": true },
    { "taskID": 476, "taskName": "Marna", "startDate": "2/24/2021", "priority": "Violet", "approved": false },
    { "taskID": 477, "taskName": "Annissa", "startDate": "5/18/2021", "priority": "Maroon", "approved": true },
    { "taskID": 478, "taskName": "Riva", "startDate": "12/4/2020", "priority": "Orange", "approved": true },
    { "taskID": 479, "taskName": "Benita", "startDate": "12/4/2020", "priority": "Teal", "approved": false },
    { "taskID": 480, "taskName": "Sella", "startDate": "3/2/2021", "priority": "Crimson", "approved": true },
    { "taskID": 481, "taskName": "Venus", "startDate": "5/4/2021", "priority": "Crimson", "approved": false },
    { "taskID": 482, "taskName": "Marjy", "startDate": "3/14/2021", "priority": "Fuscia", "approved": false },
    { "taskID": 483, "taskName": "Monroe", "startDate": "8/26/2021", "priority": "Khaki", "approved": false },
    { "taskID": 484, "taskName": "Gregoire", "startDate": "7/30/2021", "priority": "Aquamarine", "approved": true },
    { "taskID": 485, "taskName": "Tulley", "startDate": "7/27/2021", "priority": "Green", "approved": false },
    { "taskID": 486, "taskName": "Sheela", "startDate": "9/25/2021", "priority": "Orange", "approved": false },
    { "taskID": 487, "taskName": "Dacia", "startDate": "3/13/2021", "priority": "Blue", "approved": false },
    { "taskID": 488, "taskName": "Casie", "startDate": "6/30/2021", "priority": "Turquoise", "approved": false },
    { "taskID": 489, "taskName": "Flory", "startDate": "11/25/2020", "priority": "Orange", "approved": true },
    { "taskID": 490, "taskName": "Delinda", "startDate": "10/13/2021", "priority": "Mauv", "approved": true },
    { "taskID": 491, "taskName": "Laney", "startDate": "7/18/2021", "priority": "Red", "approved": true },
    { "taskID": 492, "taskName": "Eben", "startDate": "12/10/2020", "priority": "Teal", "approved": false },
    { "taskID": 493, "taskName": "Nevsa", "startDate": "3/15/2021", "priority": "Pink", "approved": true },
    { "taskID": 494, "taskName": "Glad", "startDate": "4/17/2021", "priority": "Goldenrod", "approved": true },
    { "taskID": 495, "taskName": "Morganica", "startDate": "4/11/2021", "priority": "Fuscia", "approved": true },
    { "taskID": 496, "taskName": "Maurizia", "startDate": "3/5/2021", "priority": "Turquoise", "approved": false },
    { "taskID": 497, "taskName": "Vale", "startDate": "8/14/2021", "priority": "Maroon", "approved": false },
    { "taskID": 498, "taskName": "Ericka", "startDate": "5/22/2021", "priority": "Aquamarine", "approved": false },
    { "taskID": 499, "taskName": "Reese", "startDate": "7/2/2021", "priority": "Fuscia", "approved": true },
    { "taskID": 500, "taskName": "Calhoun", "startDate": "8/1/2021", "priority": "Teal", "approved": false },
    { "taskID": 501, "taskName": "Jacqueline", "startDate": "10/20/2020", "priority": "Crimson", "approved": true },
    { "taskID": 502, "taskName": "Tomasine", "startDate": "11/20/2020", "priority": "Turquoise", "approved": false },
    { "taskID": 503, "taskName": "Barbey", "startDate": "12/29/2020", "priority": "Indigo", "approved": true },
    { "taskID": 504, "taskName": "Betta", "startDate": "4/4/2021", "priority": "Khaki", "approved": false },
    { "taskID": 505, "taskName": "Ezri", "startDate": "11/12/2020", "priority": "Orange", "approved": false },
    { "taskID": 506, "taskName": "Dede", "startDate": "3/23/2021", "priority": "Goldenrod", "approved": true },
    { "taskID": 507, "taskName": "Jarret", "startDate": "11/20/2020", "priority": "Crimson", "approved": true },
    { "taskID": 508, "taskName": "Belia", "startDate": "11/19/2020", "priority": "Blue", "approved": false },
    { "taskID": 509, "taskName": "Sabrina", "startDate": "9/17/2021", "priority": "Fuscia", "approved": false },
    { "taskID": 510, "taskName": "Stuart", "startDate": "5/11/2021", "priority": "Khaki", "approved": true },
    { "taskID": 511, "taskName": "Lemmy", "startDate": "8/15/2021", "priority": "Puce", "approved": true },
    { "taskID": 512, "taskName": "Denny", "startDate": "6/30/2021", "priority": "Puce", "approved": false },
    { "taskID": 513, "taskName": "Lillian", "startDate": "1/14/2021", "priority": "Blue", "approved": false },
    { "taskID": 514, "taskName": "Aridatha", "startDate": "11/10/2020", "priority": "Purple", "approved": false },
    { "taskID": 515, "taskName": "Padraic", "startDate": "3/2/2021", "priority": "Goldenrod", "approved": false },
    { "taskID": 516, "taskName": "Wilona", "startDate": "9/30/2021", "priority": "Teal", "approved": true },
    { "taskID": 517, "taskName": "Rici", "startDate": "6/25/2021", "priority": "Violet", "approved": false },
    { "taskID": 518, "taskName": "Meriel", "startDate": "1/3/2021", "priority": "Yellow", "approved": true },
    { "taskID": 519, "taskName": "Shea", "startDate": "12/15/2020", "priority": "Blue", "approved": false },
    { "taskID": 520, "taskName": "Sonnnie", "startDate": "5/19/2021", "priority": "Indigo", "approved": true },
    { "taskID": 521, "taskName": "Gale", "startDate": "5/22/2021", "priority": "Aquamarine", "approved": true },
    { "taskID": 522, "taskName": "Cletus", "startDate": "2/20/2021", "priority": "Pink", "approved": false },
    { "taskID": 523, "taskName": "Benedetta", "startDate": "1/22/2021", "priority": "Crimson", "approved": true },
    { "taskID": 524, "taskName": "Julee", "startDate": "7/20/2021", "priority": "Red", "approved": true },
    { "taskID": 525, "taskName": "Torr", "startDate": "2/4/2021", "priority": "Goldenrod", "approved": true },
    { "taskID": 526, "taskName": "Ulysses", "startDate": "6/23/2021", "priority": "Yellow", "approved": false },
    { "taskID": 527, "taskName": "Hinze", "startDate": "8/19/2021", "priority": "Teal", "approved": false },
    { "taskID": 528, "taskName": "Sari", "startDate": "6/25/2021", "priority": "Teal", "approved": false },
    { "taskID": 529, "taskName": "Hewet", "startDate": "3/2/2021", "priority": "Turquoise", "approved": false },
    { "taskID": 530, "taskName": "Amby", "startDate": "2/24/2021", "priority": "Orange", "approved": true },
    { "taskID": 531, "taskName": "Timothy", "startDate": "12/13/2020", "priority": "Yellow", "approved": true },
    { "taskID": 532, "taskName": "Hildagarde", "startDate": "10/25/2020", "priority": "Khaki", "approved": false },
    { "taskID": 533, "taskName": "Kennett", "startDate": "5/18/2021", "priority": "Goldenrod", "approved": false },
    { "taskID": 534, "taskName": "Graeme", "startDate": "8/12/2021", "priority": "Violet", "approved": true },
    { "taskID": 535, "taskName": "Sherrie", "startDate": "12/30/2020", "priority": "Blue", "approved": false },
    { "taskID": 536, "taskName": "Cheslie", "startDate": "6/1/2021", "priority": "Green", "approved": true },
    { "taskID": 537, "taskName": "Malvin", "startDate": "3/11/2021", "priority": "Teal", "approved": true },
    { "taskID": 538, "taskName": "Tan", "startDate": "3/23/2021", "priority": "Indigo", "approved": true },
    { "taskID": 539, "taskName": "Collie", "startDate": "11/22/2020", "priority": "Mauv", "approved": true },
    { "taskID": 540, "taskName": "Bil", "startDate": "10/18/2021", "priority": "Maroon", "approved": true },
    { "taskID": 541, "taskName": "Riva", "startDate": "6/9/2021", "priority": "Yellow", "approved": false },
    { "taskID": 542, "taskName": "Taffy", "startDate": "2/20/2021", "priority": "Violet", "approved": false },
    { "taskID": 543, "taskName": "Eadmund", "startDate": "2/6/2021", "priority": "Maroon", "approved": false },
    { "taskID": 544, "taskName": "Fairfax", "startDate": "6/6/2021", "priority": "Mauv", "approved": false },
    { "taskID": 545, "taskName": "Viviene", "startDate": "8/1/2021", "priority": "Pink", "approved": false },
    { "taskID": 546, "taskName": "Tremain", "startDate": "1/2/2021", "priority": "Blue", "approved": true },
    { "taskID": 547, "taskName": "Judah", "startDate": "12/7/2020", "priority": "Crimson", "approved": false },
    { "taskID": 548, "taskName": "Pansy", "startDate": "2/27/2021", "priority": "Blue", "approved": true },
    { "taskID": 549, "taskName": "Jemmie", "startDate": "11/15/2020", "priority": "Indigo", "approved": false },
    { "taskID": 550, "taskName": "Yves", "startDate": "9/16/2021", "priority": "Red", "approved": true },
    { "taskID": 551, "taskName": "Liesa", "startDate": "6/9/2021", "priority": "Goldenrod", "approved": true },
    { "taskID": 552, "taskName": "Eric", "startDate": "12/13/2020", "priority": "Teal", "approved": true },
    { "taskID": 553, "taskName": "Shawnee", "startDate": "5/10/2021", "priority": "Indigo", "approved": false },
    { "taskID": 554, "taskName": "Milli", "startDate": "7/7/2021", "priority": "Khaki", "approved": true },
    { "taskID": 555, "taskName": "Jacklyn", "startDate": "12/14/2020", "priority": "Fuscia", "approved": true },
    { "taskID": 556, "taskName": "Araldo", "startDate": "3/2/2021", "priority": "Teal", "approved": true },
    { "taskID": 557, "taskName": "Malissa", "startDate": "3/13/2021", "priority": "Mauv", "approved": true },
    { "taskID": 558, "taskName": "Silvan", "startDate": "3/14/2021", "priority": "Turquoise", "approved": true },
    { "taskID": 559, "taskName": "Genna", "startDate": "4/14/2021", "priority": "Indigo", "approved": true },
    { "taskID": 560, "taskName": "Claudie", "startDate": "3/1/2021", "priority": "Maroon", "approved": false },
    { "taskID": 561, "taskName": "Lesly", "startDate": "11/29/2020", "priority": "Aquamarine", "approved": false },
    { "taskID": 562, "taskName": "Verge", "startDate": "8/5/2021", "priority": "Goldenrod", "approved": false },
    { "taskID": 563, "taskName": "Dev", "startDate": "4/14/2021", "priority": "Khaki", "approved": false },
    { "taskID": 564, "taskName": "Tonie", "startDate": "5/21/2021", "priority": "Crimson", "approved": false },
    { "taskID": 565, "taskName": "Dani", "startDate": "10/19/2021", "priority": "Goldenrod", "approved": true },
    { "taskID": 566, "taskName": "Norina", "startDate": "11/24/2020", "priority": "Pink", "approved": true },
    { "taskID": 567, "taskName": "Derrik", "startDate": "10/5/2021", "priority": "Yellow", "approved": true },
    { "taskID": 568, "taskName": "Brett", "startDate": "5/6/2021", "priority": "Goldenrod", "approved": true },
    { "taskID": 569, "taskName": "Padriac", "startDate": "7/28/2021", "priority": "Red", "approved": true },
    { "taskID": 570, "taskName": "Darell", "startDate": "9/15/2021", "priority": "Blue", "approved": true },
    { "taskID": 571, "taskName": "Antonetta", "startDate": "3/3/2021", "priority": "Mauv", "approved": false },
    { "taskID": 572, "taskName": "Jada", "startDate": "8/14/2021", "priority": "Violet", "approved": true },
    { "taskID": 573, "taskName": "Kalinda", "startDate": "11/9/2020", "priority": "Khaki", "approved": false },
    { "taskID": 574, "taskName": "Zaria", "startDate": "1/14/2021", "priority": "Violet", "approved": true },
    { "taskID": 575, "taskName": "Eveleen", "startDate": "12/12/2020", "priority": "Green", "approved": true },
    { "taskID": 576, "taskName": "Charmine", "startDate": "8/26/2021", "priority": "Mauv", "approved": true },
    { "taskID": 577, "taskName": "Kienan", "startDate": "11/3/2020", "priority": "Pink", "approved": true },
    { "taskID": 578, "taskName": "Vanessa", "startDate": "11/11/2020", "priority": "Violet", "approved": true },
    { "taskID": 579, "taskName": "Serena", "startDate": "4/21/2021", "priority": "Indigo", "approved": false },
    { "taskID": 580, "taskName": "Carroll", "startDate": "11/6/2020", "priority": "Purple", "approved": true },
    { "taskID": 581, "taskName": "Bendicty", "startDate": "9/24/2021", "priority": "Fuscia", "approved": false },
    { "taskID": 582, "taskName": "Idell", "startDate": "11/13/2020", "priority": "Fuscia", "approved": true },
    { "taskID": 583, "taskName": "Mahalia", "startDate": "7/4/2021", "priority": "Blue", "approved": false },
    { "taskID": 584, "taskName": "Johny", "startDate": "2/10/2021", "priority": "Crimson", "approved": false },
    { "taskID": 585, "taskName": "Myles", "startDate": "11/11/2020", "priority": "Indigo", "approved": false },
    { "taskID": 586, "taskName": "Robbie", "startDate": "5/29/2021", "priority": "Indigo", "approved": false },
    { "taskID": 587, "taskName": "Pier", "startDate": "4/26/2021", "priority": "Violet", "approved": false },
    { "taskID": 588, "taskName": "Bernita", "startDate": "12/22/2020", "priority": "Fuscia", "approved": true },
    { "taskID": 589, "taskName": "Maximilianus", "startDate": "7/1/2021", "priority": "Indigo", "approved": false },
    { "taskID": 590, "taskName": "Dolly", "startDate": "2/2/2021", "priority": "Blue", "approved": false },
    { "taskID": 591, "taskName": "Pia", "startDate": "1/28/2021", "priority": "Violet", "approved": false },
    { "taskID": 592, "taskName": "Annamaria", "startDate": "4/5/2021", "priority": "Pink", "approved": true },
    { "taskID": 593, "taskName": "Thebault", "startDate": "2/11/2021", "priority": "Violet", "approved": true },
    { "taskID": 594, "taskName": "Pavia", "startDate": "4/28/2021", "priority": "Purple", "approved": true },
    { "taskID": 595, "taskName": "Fin", "startDate": "10/13/2021", "priority": "Orange", "approved": true },
    { "taskID": 596, "taskName": "Cammie", "startDate": "7/16/2021", "priority": "Yellow", "approved": true },
    { "taskID": 597, "taskName": "Deeyn", "startDate": "3/17/2021", "priority": "Crimson", "approved": false },
    { "taskID": 598, "taskName": "Nickolaus", "startDate": "10/15/2021", "priority": "Khaki", "approved": false },
    { "taskID": 599, "taskName": "Sayers", "startDate": "6/30/2021", "priority": "Violet", "approved": false },
    { "taskID": 600, "taskName": "Gal", "startDate": "5/12/2021", "priority": "Fuscia", "approved": false },
    { "taskID": 601, "taskName": "Geri", "startDate": "3/26/2021", "priority": "Fuscia", "approved": true },
    { "taskID": 602, "taskName": "Abbey", "startDate": "1/14/2021", "priority": "Fuscia", "approved": true },
    { "taskID": 603, "taskName": "Ker", "startDate": "10/24/2020", "priority": "Puce", "approved": false },
    { "taskID": 604, "taskName": "Myriam", "startDate": "8/17/2021", "priority": "Aquamarine", "approved": true },
    { "taskID": 605, "taskName": "Nani", "startDate": "7/29/2021", "priority": "Indigo", "approved": true },
    { "taskID": 606, "taskName": "Moe", "startDate": "5/4/2021", "priority": "Teal", "approved": false },
    { "taskID": 607, "taskName": "Lorri", "startDate": "11/11/2020", "priority": "Khaki", "approved": false },
    { "taskID": 608, "taskName": "Lyndy", "startDate": "2/26/2021", "priority": "Turquoise", "approved": true },
    { "taskID": 609, "taskName": "Elysha", "startDate": "4/21/2021", "priority": "Crimson", "approved": false },
    { "taskID": 610, "taskName": "Vance", "startDate": "12/30/2020", "priority": "Puce", "approved": true },
    { "taskID": 611, "taskName": "Lucie", "startDate": "12/29/2020", "priority": "Maroon", "approved": true },
    { "taskID": 612, "taskName": "Talyah", "startDate": "7/24/2021", "priority": "Mauv", "approved": false },
    { "taskID": 613, "taskName": "Averill", "startDate": "2/21/2021", "priority": "Mauv", "approved": false },
    { "taskID": 614, "taskName": "Catha", "startDate": "10/8/2021", "priority": "Puce", "approved": false },
    { "taskID": 615, "taskName": "Freddie", "startDate": "11/12/2020", "priority": "Purple", "approved": true },
    { "taskID": 616, "taskName": "Gretal", "startDate": "3/11/2021", "priority": "Turquoise", "approved": true },
    { "taskID": 617, "taskName": "Chan", "startDate": "7/18/2021", "priority": "Blue", "approved": true },
    { "taskID": 618, "taskName": "Curcio", "startDate": "2/9/2021", "priority": "Puce", "approved": false },
    { "taskID": 619, "taskName": "Nathalia", "startDate": "1/30/2021", "priority": "Indigo", "approved": false },
    { "taskID": 620, "taskName": "Nero", "startDate": "4/27/2021", "priority": "Aquamarine", "approved": false },
    { "taskID": 621, "taskName": "Trula", "startDate": "2/11/2021", "priority": "Pink", "approved": true },
    { "taskID": 622, "taskName": "Shanda", "startDate": "9/19/2021", "priority": "Purple", "approved": false },
    { "taskID": 623, "taskName": "Shani", "startDate": "7/9/2021", "priority": "Mauv", "approved": false },
    { "taskID": 624, "taskName": "Esmeralda", "startDate": "7/21/2021", "priority": "Orange", "approved": true },
    { "taskID": 625, "taskName": "Faina", "startDate": "1/25/2021", "priority": "Yellow", "approved": false },
    { "taskID": 626, "taskName": "Christean", "startDate": "10/9/2021", "priority": "Turquoise", "approved": false },
    { "taskID": 627, "taskName": "Tobiah", "startDate": "9/13/2021", "priority": "Violet", "approved": false },
    { "taskID": 628, "taskName": "Vyky", "startDate": "11/7/2020", "priority": "Purple", "approved": false },
    { "taskID": 629, "taskName": "Garfield", "startDate": "12/3/2020", "priority": "Blue", "approved": false },
    { "taskID": 630, "taskName": "Nedda", "startDate": "11/28/2020", "priority": "Green", "approved": true },
    { "taskID": 631, "taskName": "Prentice", "startDate": "9/20/2021", "priority": "Purple", "approved": true },
    { "taskID": 632, "taskName": "Margarete", "startDate": "11/21/2020", "priority": "Yellow", "approved": true },
    { "taskID": 633, "taskName": "Tyler", "startDate": "12/30/2020", "priority": "Mauv", "approved": true },
    { "taskID": 634, "taskName": "Claire", "startDate": "10/8/2021", "priority": "Blue", "approved": true },
    { "taskID": 635, "taskName": "Bink", "startDate": "3/4/2021", "priority": "Puce", "approved": false },
    { "taskID": 636, "taskName": "Hew", "startDate": "8/28/2021", "priority": "Blue", "approved": false },
    { "taskID": 637, "taskName": "Alfy", "startDate": "1/19/2021", "priority": "Blue", "approved": false },
    { "taskID": 638, "taskName": "Harmonia", "startDate": "10/4/2021", "priority": "Orange", "approved": false },
    { "taskID": 639, "taskName": "Allys", "startDate": "1/15/2021", "priority": "Teal", "approved": false },
    { "taskID": 640, "taskName": "Marlin", "startDate": "4/3/2021", "priority": "Puce", "approved": false },
    { "taskID": 641, "taskName": "Alain", "startDate": "5/25/2021", "priority": "Red", "approved": true },
    { "taskID": 642, "taskName": "Bat", "startDate": "9/22/2021", "priority": "Yellow", "approved": true },
    { "taskID": 643, "taskName": "Jaynell", "startDate": "12/18/2020", "priority": "Purple", "approved": true },
    { "taskID": 644, "taskName": "Shepard", "startDate": "6/29/2021", "priority": "Maroon", "approved": false },
    { "taskID": 645, "taskName": "Kari", "startDate": "4/19/2021", "priority": "Purple", "approved": false },
    { "taskID": 646, "taskName": "Pippa", "startDate": "3/26/2021", "priority": "Purple", "approved": false },
    { "taskID": 647, "taskName": "Frances", "startDate": "11/10/2020", "priority": "Fuscia", "approved": true },
    { "taskID": 648, "taskName": "Aeriell", "startDate": "6/7/2021", "priority": "Puce", "approved": true },
    { "taskID": 649, "taskName": "Eleni", "startDate": "7/9/2021", "priority": "Red", "approved": true },
    { "taskID": 650, "taskName": "Mylo", "startDate": "3/15/2021", "priority": "Fuscia", "approved": true },
    { "taskID": 651, "taskName": "Genny", "startDate": "9/15/2021", "priority": "Violet", "approved": false },
    { "taskID": 652, "taskName": "Avery", "startDate": "8/1/2021", "priority": "Crimson", "approved": true },
    { "taskID": 653, "taskName": "Felicio", "startDate": "10/9/2021", "priority": "Teal", "approved": true },
    { "taskID": 654, "taskName": "Elspeth", "startDate": "2/27/2021", "priority": "Purple", "approved": true },
    { "taskID": 655, "taskName": "Sande", "startDate": "7/10/2021", "priority": "Khaki", "approved": true },
    { "taskID": 656, "taskName": "Kendre", "startDate": "7/11/2021", "priority": "Teal", "approved": true },
    { "taskID": 657, "taskName": "Clint", "startDate": "7/19/2021", "priority": "Puce", "approved": true },
    { "taskID": 658, "taskName": "Zonda", "startDate": "5/15/2021", "priority": "Puce", "approved": true },
    { "taskID": 659, "taskName": "Alexandro", "startDate": "6/16/2021", "priority": "Goldenrod", "approved": false },
    { "taskID": 660, "taskName": "Niki", "startDate": "4/6/2021", "priority": "Blue", "approved": true },
    { "taskID": 661, "taskName": "Charlene", "startDate": "7/26/2021", "priority": "Khaki", "approved": false },
    { "taskID": 662, "taskName": "Morey", "startDate": "7/26/2021", "priority": "Red", "approved": true },
    { "taskID": 663, "taskName": "Talbert", "startDate": "5/26/2021", "priority": "Purple", "approved": false },
    { "taskID": 664, "taskName": "Skye", "startDate": "4/26/2021", "priority": "Yellow", "approved": false },
    { "taskID": 665, "taskName": "Anabal", "startDate": "8/1/2021", "priority": "Turquoise", "approved": true },
    { "taskID": 666, "taskName": "Nanny", "startDate": "3/17/2021", "priority": "Turquoise", "approved": false },
    { "taskID": 667, "taskName": "Gabie", "startDate": "9/15/2021", "priority": "Puce", "approved": true },
    { "taskID": 668, "taskName": "Ruthe", "startDate": "8/11/2021", "priority": "Orange", "approved": true },
    { "taskID": 669, "taskName": "Raynard", "startDate": "4/25/2021", "priority": "Aquamarine", "approved": false },
    { "taskID": 670, "taskName": "Sydney", "startDate": "6/7/2021", "priority": "Goldenrod", "approved": true },
    { "taskID": 671, "taskName": "Haley", "startDate": "6/23/2021", "priority": "Turquoise", "approved": true },
    { "taskID": 672, "taskName": "Tremayne", "startDate": "3/8/2021", "priority": "Pink", "approved": true },
    { "taskID": 673, "taskName": "Natasha", "startDate": "12/13/2020", "priority": "Violet", "approved": false },
    { "taskID": 674, "taskName": "Fawn", "startDate": "11/10/2020", "priority": "Crimson", "approved": false },
    { "taskID": 675, "taskName": "Brenna", "startDate": "2/2/2021", "priority": "Indigo", "approved": true },
    { "taskID": 676, "taskName": "Roana", "startDate": "2/5/2021", "priority": "Red", "approved": false },
    { "taskID": 677, "taskName": "Janene", "startDate": "8/16/2021", "priority": "Purple", "approved": true },
    { "taskID": 678, "taskName": "Cassey", "startDate": "9/9/2021", "priority": "Turquoise", "approved": false },
    { "taskID": 679, "taskName": "Jennie", "startDate": "8/17/2021", "priority": "Aquamarine", "approved": false },
    { "taskID": 680, "taskName": "Isadore", "startDate": "12/11/2020", "priority": "Indigo", "approved": false },
    { "taskID": 681, "taskName": "Noemi", "startDate": "3/20/2021", "priority": "Green", "approved": true },
    { "taskID": 682, "taskName": "Ban", "startDate": "9/4/2021", "priority": "Fuscia", "approved": false },
    { "taskID": 683, "taskName": "Etti", "startDate": "10/17/2021", "priority": "Orange", "approved": false },
    { "taskID": 684, "taskName": "Edmon", "startDate": "3/10/2021", "priority": "Teal", "approved": false },
    { "taskID": 685, "taskName": "Ingamar", "startDate": "10/18/2021", "priority": "Mauv", "approved": true },
    { "taskID": 686, "taskName": "Jasun", "startDate": "4/29/2021", "priority": "Maroon", "approved": true },
    { "taskID": 687, "taskName": "Lorri", "startDate": "12/6/2020", "priority": "Mauv", "approved": false },
    { "taskID": 688, "taskName": "Fae", "startDate": "5/3/2021", "priority": "Khaki", "approved": true },
    { "taskID": 689, "taskName": "Donaugh", "startDate": "5/25/2021", "priority": "Blue", "approved": true },
    { "taskID": 690, "taskName": "Kati", "startDate": "12/29/2020", "priority": "Green", "approved": true },
    { "taskID": 691, "taskName": "Melly", "startDate": "12/10/2020", "priority": "Blue", "approved": true },
    { "taskID": 692, "taskName": "Rosetta", "startDate": "11/10/2020", "priority": "Aquamarine", "approved": false },
    { "taskID": 693, "taskName": "Lock", "startDate": "2/6/2021", "priority": "Fuscia", "approved": false },
    { "taskID": 694, "taskName": "Gaynor", "startDate": "7/2/2021", "priority": "Yellow", "approved": false },
    { "taskID": 695, "taskName": "Elsie", "startDate": "10/27/2020", "priority": "Yellow", "approved": true },
    { "taskID": 696, "taskName": "Worthy", "startDate": "5/6/2021", "priority": "Turquoise", "approved": true },
    { "taskID": 697, "taskName": "Dallas", "startDate": "11/21/2020", "priority": "Fuscia", "approved": false },
    { "taskID": 698, "taskName": "Margot", "startDate": "6/9/2021", "priority": "Orange", "approved": false },
    { "taskID": 699, "taskName": "Florri", "startDate": "6/27/2021", "priority": "Aquamarine", "approved": false },
    { "taskID": 700, "taskName": "Hamnet", "startDate": "9/1/2021", "priority": "Purple", "approved": true },
    { "taskID": 701, "taskName": "Avril", "startDate": "11/17/2020", "priority": "Crimson", "approved": true },
    { "taskID": 702, "taskName": "Den", "startDate": "2/6/2021", "priority": "Fuscia", "approved": false },
    { "taskID": 703, "taskName": "Vonny", "startDate": "9/29/2021", "priority": "Maroon", "approved": true },
    { "taskID": 704, "taskName": "Vernen", "startDate": "5/16/2021", "priority": "Maroon", "approved": true },
    { "taskID": 705, "taskName": "Page", "startDate": "9/20/2021", "priority": "Purple", "approved": false },
    { "taskID": 706, "taskName": "Shelly", "startDate": "10/24/2020", "priority": "Purple", "approved": true },
    { "taskID": 707, "taskName": "Baryram", "startDate": "5/17/2021", "priority": "Blue", "approved": false },
    { "taskID": 708, "taskName": "Tom", "startDate": "2/14/2021", "priority": "Khaki", "approved": true },
    { "taskID": 709, "taskName": "Marius", "startDate": "12/13/2020", "priority": "Mauv", "approved": false },
    { "taskID": 710, "taskName": "Millicent", "startDate": "3/24/2021", "priority": "Puce", "approved": true },
    { "taskID": 711, "taskName": "Leoine", "startDate": "9/6/2021", "priority": "Goldenrod", "approved": true },
    { "taskID": 712, "taskName": "Timothee", "startDate": "1/7/2021", "priority": "Khaki", "approved": true },
    { "taskID": 713, "taskName": "Baily", "startDate": "10/23/2020", "priority": "Purple", "approved": false },
    { "taskID": 714, "taskName": "Kyle", "startDate": "12/7/2020", "priority": "Green", "approved": true },
    { "taskID": 715, "taskName": "Jolynn", "startDate": "7/29/2021", "priority": "Aquamarine", "approved": true },
    { "taskID": 716, "taskName": "Corrine", "startDate": "2/6/2021", "priority": "Violet", "approved": false },
    { "taskID": 717, "taskName": "Kristin", "startDate": "9/16/2021", "priority": "Crimson", "approved": true },
    { "taskID": 718, "taskName": "Rozamond", "startDate": "4/28/2021", "priority": "Green", "approved": true },
    { "taskID": 719, "taskName": "Clea", "startDate": "10/14/2021", "priority": "Yellow", "approved": true },
    { "taskID": 720, "taskName": "Sylvan", "startDate": "2/24/2021", "priority": "Teal", "approved": false },
    { "taskID": 721, "taskName": "Anton", "startDate": "4/23/2021", "priority": "Crimson", "approved": false },
    { "taskID": 722, "taskName": "Lydie", "startDate": "7/11/2021", "priority": "Aquamarine", "approved": false },
    { "taskID": 723, "taskName": "Luis", "startDate": "11/26/2020", "priority": "Yellow", "approved": false },
    { "taskID": 724, "taskName": "Garrett", "startDate": "1/30/2021", "priority": "Turquoise", "approved": false },
    { "taskID": 725, "taskName": "Emogene", "startDate": "9/14/2021", "priority": "Purple", "approved": false },
    { "taskID": 726, "taskName": "Selena", "startDate": "4/23/2021", "priority": "Goldenrod", "approved": false },
    { "taskID": 727, "taskName": "Micki", "startDate": "8/18/2021", "priority": "Purple", "approved": false },
    { "taskID": 728, "taskName": "Martino", "startDate": "2/21/2021", "priority": "Violet", "approved": false },
    { "taskID": 729, "taskName": "Clementia", "startDate": "3/17/2021", "priority": "Green", "approved": false },
    { "taskID": 730, "taskName": "Olia", "startDate": "4/27/2021", "priority": "Turquoise", "approved": false },
    { "taskID": 731, "taskName": "Regen", "startDate": "3/10/2021", "priority": "Orange", "approved": false },
    { "taskID": 732, "taskName": "Ricky", "startDate": "5/5/2021", "priority": "Pink", "approved": false },
    { "taskID": 733, "taskName": "Jada", "startDate": "4/15/2021", "priority": "Violet", "approved": true },
    { "taskID": 734, "taskName": "Ofilia", "startDate": "5/22/2021", "priority": "Puce", "approved": false },
    { "taskID": 735, "taskName": "Burtie", "startDate": "4/27/2021", "priority": "Teal", "approved": false },
    { "taskID": 736, "taskName": "Web", "startDate": "8/14/2021", "priority": "Blue", "approved": false },
    { "taskID": 737, "taskName": "Philis", "startDate": "2/21/2021", "priority": "Purple", "approved": true },
    { "taskID": 738, "taskName": "Micheal", "startDate": "10/26/2020", "priority": "Red", "approved": false },
    { "taskID": 739, "taskName": "Adah", "startDate": "3/23/2021", "priority": "Orange", "approved": true },
    { "taskID": 740, "taskName": "Gillian", "startDate": "6/30/2021", "priority": "Green", "approved": false },
    { "taskID": 741, "taskName": "Kai", "startDate": "11/2/2020", "priority": "Turquoise", "approved": false },
    { "taskID": 742, "taskName": "Allene", "startDate": "7/17/2021", "priority": "Turquoise", "approved": true },
    { "taskID": 743, "taskName": "Wildon", "startDate": "5/23/2021", "priority": "Green", "approved": true },
    { "taskID": 744, "taskName": "Juliet", "startDate": "7/12/2021", "priority": "Red", "approved": false },
    { "taskID": 745, "taskName": "Gideon", "startDate": "3/14/2021", "priority": "Puce", "approved": true },
    { "taskID": 746, "taskName": "Othella", "startDate": "11/13/2020", "priority": "Aquamarine", "approved": false },
    { "taskID": 747, "taskName": "Cynthia", "startDate": "5/7/2021", "priority": "Indigo", "approved": true },
    { "taskID": 748, "taskName": "Corly", "startDate": "9/12/2021", "priority": "Aquamarine", "approved": true },
    { "taskID": 749, "taskName": "Sarge", "startDate": "8/19/2021", "priority": "Purple", "approved": false },
    { "taskID": 750, "taskName": "Judy", "startDate": "2/22/2021", "priority": "Mauv", "approved": true },
    { "taskID": 751, "taskName": "Georgetta", "startDate": "5/17/2021", "priority": "Orange", "approved": false },
    { "taskID": 752, "taskName": "Gustaf", "startDate": "12/19/2020", "priority": "Orange", "approved": true },
    { "taskID": 753, "taskName": "Danyette", "startDate": "11/25/2020", "priority": "Khaki", "approved": true },
    { "taskID": 754, "taskName": "Niko", "startDate": "2/28/2021", "priority": "Teal", "approved": true },
    { "taskID": 755, "taskName": "Cyndy", "startDate": "8/16/2021", "priority": "Orange", "approved": true },
    { "taskID": 756, "taskName": "Gertrude", "startDate": "12/22/2020", "priority": "Purple", "approved": true },
    { "taskID": 757, "taskName": "Elbert", "startDate": "3/10/2021", "priority": "Turquoise", "approved": false },
    { "taskID": 758, "taskName": "Salomo", "startDate": "5/11/2021", "priority": "Mauv", "approved": false },
    { "taskID": 759, "taskName": "Joeann", "startDate": "9/20/2021", "priority": "Green", "approved": true },
    { "taskID": 760, "taskName": "Doyle", "startDate": "10/11/2021", "priority": "Indigo", "approved": true },
    { "taskID": 761, "taskName": "Zonnya", "startDate": "4/11/2021", "priority": "Green", "approved": false },
    { "taskID": 762, "taskName": "Joey", "startDate": "12/2/2020", "priority": "Fuscia", "approved": false },
    { "taskID": 763, "taskName": "Malia", "startDate": "10/29/2020", "priority": "Indigo", "approved": false },
    { "taskID": 764, "taskName": "Florri", "startDate": "1/5/2021", "priority": "Pink", "approved": false },
    { "taskID": 765, "taskName": "Gray", "startDate": "1/13/2021", "priority": "Green", "approved": true },
    { "taskID": 766, "taskName": "Kanya", "startDate": "10/30/2020", "priority": "Aquamarine", "approved": false },
    { "taskID": 767, "taskName": "Cirilo", "startDate": "7/23/2021", "priority": "Puce", "approved": false },
    { "taskID": 768, "taskName": "Sanderson", "startDate": "7/8/2021", "priority": "Purple", "approved": false },
    { "taskID": 769, "taskName": "Rosalynd", "startDate": "4/26/2021", "priority": "Indigo", "approved": true },
    { "taskID": 770, "taskName": "Iolanthe", "startDate": "1/2/2021", "priority": "Crimson", "approved": true },
    { "taskID": 771, "taskName": "Candis", "startDate": "6/14/2021", "priority": "Indigo", "approved": true },
    { "taskID": 772, "taskName": "Brinn", "startDate": "6/29/2021", "priority": "Teal", "approved": true },
    { "taskID": 773, "taskName": "Ellissa", "startDate": "4/7/2021", "priority": "Maroon", "approved": false },
    { "taskID": 774, "taskName": "Hewett", "startDate": "8/6/2021", "priority": "Mauv", "approved": false },
    { "taskID": 775, "taskName": "Dewain", "startDate": "8/11/2021", "priority": "Green", "approved": false },
    { "taskID": 776, "taskName": "Evvie", "startDate": "11/24/2020", "priority": "Purple", "approved": true },
    { "taskID": 777, "taskName": "Fidelio", "startDate": "8/14/2021", "priority": "Fuscia", "approved": true },
    { "taskID": 778, "taskName": "Mavis", "startDate": "2/1/2021", "priority": "Mauv", "approved": false },
    { "taskID": 779, "taskName": "Roberta", "startDate": "8/27/2021", "priority": "Orange", "approved": true },
    { "taskID": 780, "taskName": "Annie", "startDate": "9/28/2021", "priority": "Orange", "approved": true },
    { "taskID": 781, "taskName": "Esmeralda", "startDate": "6/20/2021", "priority": "Yellow", "approved": false },
    { "taskID": 782, "taskName": "Evvy", "startDate": "4/1/2021", "priority": "Aquamarine", "approved": true },
    { "taskID": 783, "taskName": "Horten", "startDate": "4/13/2021", "priority": "Purple", "approved": true },
    { "taskID": 784, "taskName": "Isaak", "startDate": "7/31/2021", "priority": "Crimson", "approved": true },
    { "taskID": 785, "taskName": "Ivie", "startDate": "10/29/2020", "priority": "Red", "approved": true },
    { "taskID": 786, "taskName": "Hillard", "startDate": "6/6/2021", "priority": "Green", "approved": true },
    { "taskID": 787, "taskName": "Larina", "startDate": "10/1/2021", "priority": "Fuscia", "approved": false },
    { "taskID": 788, "taskName": "Fredric", "startDate": "4/5/2021", "priority": "Red", "approved": true },
    { "taskID": 789, "taskName": "Bren", "startDate": "1/28/2021", "priority": "Goldenrod", "approved": true },
    { "taskID": 790, "taskName": "Scarlet", "startDate": "10/2/2021", "priority": "Mauv", "approved": true },
    { "taskID": 791, "taskName": "Koralle", "startDate": "4/3/2021", "priority": "Green", "approved": true },
    { "taskID": 792, "taskName": "Ashlie", "startDate": "11/23/2020", "priority": "Goldenrod", "approved": false },
    { "taskID": 793, "taskName": "Cozmo", "startDate": "8/2/2021", "priority": "Indigo", "approved": true },
    { "taskID": 794, "taskName": "Lyn", "startDate": "11/20/2020", "priority": "Violet", "approved": false },
    { "taskID": 795, "taskName": "Serene", "startDate": "3/27/2021", "priority": "Blue", "approved": false },
    { "taskID": 796, "taskName": "Pauletta", "startDate": "4/30/2021", "priority": "Green", "approved": false },
    { "taskID": 797, "taskName": "Damaris", "startDate": "11/21/2020", "priority": "Indigo", "approved": true },
    { "taskID": 798, "taskName": "Carlynne", "startDate": "7/2/2021", "priority": "Crimson", "approved": false },
    { "taskID": 799, "taskName": "Fairleigh", "startDate": "5/6/2021", "priority": "Mauv", "approved": false },
    { "taskID": 800, "taskName": "Cordelia", "startDate": "1/9/2021", "priority": "Aquamarine", "approved": false },
    { "taskID": 801, "taskName": "Petrina", "startDate": "1/26/2021", "priority": "Teal", "approved": false },
    { "taskID": 802, "taskName": "Patricia", "startDate": "2/24/2021", "priority": "Fuscia", "approved": true },
    { "taskID": 803, "taskName": "Vere", "startDate": "6/20/2021", "priority": "Violet", "approved": true },
    { "taskID": 804, "taskName": "Hymie", "startDate": "3/25/2021", "priority": "Teal", "approved": false },
    { "taskID": 805, "taskName": "Hester", "startDate": "4/17/2021", "priority": "Aquamarine", "approved": true },
    { "taskID": 806, "taskName": "Emily", "startDate": "11/24/2020", "priority": "Fuscia", "approved": false },
    { "taskID": 807, "taskName": "Mortie", "startDate": "8/30/2021", "priority": "Crimson", "approved": true },
    { "taskID": 808, "taskName": "Randal", "startDate": "2/4/2021", "priority": "Blue", "approved": false },
    { "taskID": 809, "taskName": "Clare", "startDate": "10/1/2021", "priority": "Maroon", "approved": false },
    { "taskID": 810, "taskName": "Roosevelt", "startDate": "4/17/2021", "priority": "Blue", "approved": true },
    { "taskID": 811, "taskName": "Alexina", "startDate": "2/6/2021", "priority": "Red", "approved": true },
    { "taskID": 812, "taskName": "Milena", "startDate": "9/2/2021", "priority": "Purple", "approved": true },
    { "taskID": 813, "taskName": "Sherrie", "startDate": "11/27/2020", "priority": "Blue", "approved": true },
    { "taskID": 814, "taskName": "Tait", "startDate": "9/13/2021", "priority": "Purple", "approved": false },
    { "taskID": 815, "taskName": "Francisca", "startDate": "9/14/2021", "priority": "Fuscia", "approved": false },
    { "taskID": 816, "taskName": "Sigfrid", "startDate": "8/13/2021", "priority": "Orange", "approved": true },
    { "taskID": 817, "taskName": "Verina", "startDate": "6/22/2021", "priority": "Blue", "approved": true },
    { "taskID": 818, "taskName": "Jaye", "startDate": "4/22/2021", "priority": "Aquamarine", "approved": false },
    { "taskID": 819, "taskName": "Jennifer", "startDate": "1/3/2021", "priority": "Crimson", "approved": true },
    { "taskID": 820, "taskName": "Hilton", "startDate": "8/18/2021", "priority": "Blue", "approved": false },
    { "taskID": 821, "taskName": "Nerte", "startDate": "11/27/2020", "priority": "Khaki", "approved": true },
    { "taskID": 822, "taskName": "Deck", "startDate": "5/17/2021", "priority": "Mauv", "approved": true },
    { "taskID": 823, "taskName": "Stephan", "startDate": "1/1/2021", "priority": "Yellow", "approved": true },
    { "taskID": 824, "taskName": "Alon", "startDate": "3/28/2021", "priority": "Yellow", "approved": false },
    { "taskID": 825, "taskName": "Allyce", "startDate": "5/6/2021", "priority": "Pink", "approved": false },
    { "taskID": 826, "taskName": "Neila", "startDate": "8/12/2021", "priority": "Blue", "approved": false },
    { "taskID": 827, "taskName": "Barnie", "startDate": "1/21/2021", "priority": "Goldenrod", "approved": false },
    { "taskID": 828, "taskName": "Mikkel", "startDate": "8/31/2021", "priority": "Violet", "approved": false },
    { "taskID": 829, "taskName": "Toiboid", "startDate": "5/16/2021", "priority": "Purple", "approved": false },
    { "taskID": 830, "taskName": "Ginnie", "startDate": "10/16/2021", "priority": "Indigo", "approved": false },
    { "taskID": 831, "taskName": "Rollo", "startDate": "7/28/2021", "priority": "Aquamarine", "approved": true },
    { "taskID": 832, "taskName": "Nathan", "startDate": "5/5/2021", "priority": "Red", "approved": true },
    { "taskID": 833, "taskName": "Giraud", "startDate": "1/28/2021", "priority": "Pink", "approved": true },
    { "taskID": 834, "taskName": "Donovan", "startDate": "5/22/2021", "priority": "Indigo", "approved": false },
    { "taskID": 835, "taskName": "Dedra", "startDate": "7/6/2021", "priority": "Fuscia", "approved": true },
    { "taskID": 836, "taskName": "Merell", "startDate": "2/24/2021", "priority": "Puce", "approved": true },
    { "taskID": 837, "taskName": "Mag", "startDate": "5/2/2021", "priority": "Mauv", "approved": false },
    { "taskID": 838, "taskName": "Janaye", "startDate": "4/12/2021", "priority": "Green", "approved": false },
    { "taskID": 839, "taskName": "Doti", "startDate": "12/27/2020", "priority": "Crimson", "approved": true },
    { "taskID": 840, "taskName": "Pam", "startDate": "5/13/2021", "priority": "Violet", "approved": true },
    { "taskID": 841, "taskName": "Anabal", "startDate": "9/3/2021", "priority": "Blue", "approved": true },
    { "taskID": 842, "taskName": "Dorotea", "startDate": "8/22/2021", "priority": "Puce", "approved": false },
    { "taskID": 843, "taskName": "Storm", "startDate": "12/5/2020", "priority": "Purple", "approved": false },
    { "taskID": 844, "taskName": "Paquito", "startDate": "3/27/2021", "priority": "Yellow", "approved": false },
    { "taskID": 845, "taskName": "Odey", "startDate": "6/4/2021", "priority": "Indigo", "approved": false },
    { "taskID": 846, "taskName": "Priscilla", "startDate": "4/4/2021", "priority": "Indigo", "approved": false },
    { "taskID": 847, "taskName": "Taddeusz", "startDate": "8/16/2021", "priority": "Pink", "approved": true },
    { "taskID": 848, "taskName": "Shelly", "startDate": "1/22/2021", "priority": "Green", "approved": true },
    { "taskID": 849, "taskName": "Jamey", "startDate": "10/20/2020", "priority": "Indigo", "approved": false },
    { "taskID": 850, "taskName": "Udell", "startDate": "2/9/2021", "priority": "Indigo", "approved": true },
    { "taskID": 851, "taskName": "Wandis", "startDate": "6/12/2021", "priority": "Aquamarine", "approved": true },
    { "taskID": 852, "taskName": "Leanora", "startDate": "6/5/2021", "priority": "Mauv", "approved": false },
    { "taskID": 853, "taskName": "Lucretia", "startDate": "6/29/2021", "priority": "Fuscia", "approved": true },
    { "taskID": 854, "taskName": "Klemens", "startDate": "4/23/2021", "priority": "Violet", "approved": false },
    { "taskID": 855, "taskName": "Bengt", "startDate": "3/12/2021", "priority": "Yellow", "approved": false },
    { "taskID": 856, "taskName": "Roscoe", "startDate": "11/23/2020", "priority": "Teal", "approved": true },
    { "taskID": 857, "taskName": "Gwyn", "startDate": "9/27/2021", "priority": "Goldenrod", "approved": true },
    { "taskID": 858, "taskName": "Addia", "startDate": "7/17/2021", "priority": "Violet", "approved": false },
    { "taskID": 859, "taskName": "Maximilian", "startDate": "4/21/2021", "priority": "Yellow", "approved": true },
    { "taskID": 860, "taskName": "Raimundo", "startDate": "8/5/2021", "priority": "Mauv", "approved": true },
    { "taskID": 861, "taskName": "Gregg", "startDate": "3/8/2021", "priority": "Blue", "approved": true },
    { "taskID": 862, "taskName": "Nicolle", "startDate": "12/26/2020", "priority": "Purple", "approved": true },
    { "taskID": 863, "taskName": "Birk", "startDate": "7/24/2021", "priority": "Turquoise", "approved": false },
    { "taskID": 864, "taskName": "Pen", "startDate": "6/5/2021", "priority": "Purple", "approved": true },
    { "taskID": 865, "taskName": "Giselbert", "startDate": "10/21/2020", "priority": "Purple", "approved": false },
    { "taskID": 866, "taskName": "Purcell", "startDate": "6/24/2021", "priority": "Yellow", "approved": false },
    { "taskID": 867, "taskName": "Chelsie", "startDate": "5/30/2021", "priority": "Aquamarine", "approved": false },
    { "taskID": 868, "taskName": "Kaila", "startDate": "5/11/2021", "priority": "Green", "approved": true },
    { "taskID": 869, "taskName": "Randene", "startDate": "7/30/2021", "priority": "Violet", "approved": true },
    { "taskID": 870, "taskName": "Nerti", "startDate": "4/19/2021", "priority": "Yellow", "approved": false },
    { "taskID": 871, "taskName": "Alyssa", "startDate": "12/13/2020", "priority": "Blue", "approved": true },
    { "taskID": 872, "taskName": "Karalee", "startDate": "2/3/2021", "priority": "Blue", "approved": true },
    { "taskID": 873, "taskName": "Agatha", "startDate": "7/17/2021", "priority": "Goldenrod", "approved": true },
    { "taskID": 874, "taskName": "Debbi", "startDate": "7/20/2021", "priority": "Teal", "approved": true },
    { "taskID": 875, "taskName": "Deina", "startDate": "9/13/2021", "priority": "Maroon", "approved": true },
    { "taskID": 876, "taskName": "Clarisse", "startDate": "1/13/2021", "priority": "Puce", "approved": true },
    { "taskID": 877, "taskName": "Manolo", "startDate": "12/8/2020", "priority": "Puce", "approved": false },
    { "taskID": 878, "taskName": "Catie", "startDate": "8/4/2021", "priority": "Mauv", "approved": false },
    { "taskID": 879, "taskName": "Starlin", "startDate": "5/26/2021", "priority": "Purple", "approved": false },
    { "taskID": 880, "taskName": "Christabel", "startDate": "9/3/2021", "priority": "Yellow", "approved": true },
    { "taskID": 881, "taskName": "Kelley", "startDate": "10/1/2021", "priority": "Teal", "approved": false },
    { "taskID": 882, "taskName": "Alene", "startDate": "10/5/2021", "priority": "Violet", "approved": false },
    { "taskID": 883, "taskName": "Franky", "startDate": "1/11/2021", "priority": "Khaki", "approved": true },
    { "taskID": 884, "taskName": "Willie", "startDate": "6/14/2021", "priority": "Mauv", "approved": true },
    { "taskID": 885, "taskName": "Bernarr", "startDate": "5/5/2021", "priority": "Red", "approved": false },
    { "taskID": 886, "taskName": "Arvie", "startDate": "11/14/2020", "priority": "Blue", "approved": true },
    { "taskID": 887, "taskName": "Nolly", "startDate": "12/29/2020", "priority": "Purple", "approved": true },
    { "taskID": 888, "taskName": "Zara", "startDate": "7/24/2021", "priority": "Yellow", "approved": true },
    { "taskID": 889, "taskName": "Salaidh", "startDate": "8/27/2021", "priority": "Orange", "approved": false },
    { "taskID": 890, "taskName": "Nestor", "startDate": "1/14/2021", "priority": "Aquamarine", "approved": true },
    { "taskID": 891, "taskName": "Garret", "startDate": "10/20/2020", "priority": "Green", "approved": true },
    { "taskID": 892, "taskName": "Blancha", "startDate": "5/8/2021", "priority": "Mauv", "approved": true },
    { "taskID": 893, "taskName": "Killian", "startDate": "3/23/2021", "priority": "Green", "approved": true },
    { "taskID": 894, "taskName": "Imogen", "startDate": "4/8/2021", "priority": "Green", "approved": true },
    { "taskID": 895, "taskName": "Veronike", "startDate": "6/8/2021", "priority": "Teal", "approved": false },
    { "taskID": 896, "taskName": "Lita", "startDate": "5/8/2021", "priority": "Indigo", "approved": false },
    { "taskID": 897, "taskName": "Ferdy", "startDate": "12/24/2020", "priority": "Purple", "approved": false },
    { "taskID": 898, "taskName": "Sharona", "startDate": "10/23/2020", "priority": "Turquoise", "approved": true },
    { "taskID": 899, "taskName": "Star", "startDate": "9/12/2021", "priority": "Turquoise", "approved": true },
    { "taskID": 900, "taskName": "Win", "startDate": "7/16/2021", "priority": "Violet", "approved": true },
    { "taskID": 901, "taskName": "Jacquenetta", "startDate": "10/21/2020", "priority": "Violet", "approved": true },
    { "taskID": 902, "taskName": "Erinn", "startDate": "12/5/2020", "priority": "Turquoise", "approved": false },
    { "taskID": 903, "taskName": "Lonee", "startDate": "5/24/2021", "priority": "Puce", "approved": true },
    { "taskID": 904, "taskName": "Jasmin", "startDate": "5/14/2021", "priority": "Mauv", "approved": false },
    { "taskID": 905, "taskName": "Dawn", "startDate": "5/14/2021", "priority": "Goldenrod", "approved": false },
    { "taskID": 906, "taskName": "Krisha", "startDate": "2/17/2021", "priority": "Fuscia", "approved": true },
    { "taskID": 907, "taskName": "Dodie", "startDate": "2/21/2021", "priority": "Violet", "approved": true },
    { "taskID": 908, "taskName": "Nicoli", "startDate": "11/12/2020", "priority": "Fuscia", "approved": true },
    { "taskID": 909, "taskName": "Tony", "startDate": "4/11/2021", "priority": "Crimson", "approved": false },
    { "taskID": 910, "taskName": "Aveline", "startDate": "6/24/2021", "priority": "Khaki", "approved": false },
    { "taskID": 911, "taskName": "Titos", "startDate": "6/19/2021", "priority": "Blue", "approved": true },
    { "taskID": 912, "taskName": "Hi", "startDate": "5/1/2021", "priority": "Red", "approved": true },
    { "taskID": 913, "taskName": "Dulcia", "startDate": "1/31/2021", "priority": "Green", "approved": false },
    { "taskID": 914, "taskName": "Bren", "startDate": "3/9/2021", "priority": "Indigo", "approved": true },
    { "taskID": 915, "taskName": "Arliene", "startDate": "8/6/2021", "priority": "Aquamarine", "approved": false },
    { "taskID": 916, "taskName": "Clemente", "startDate": "4/17/2021", "priority": "Puce", "approved": true },
    { "taskID": 917, "taskName": "Perle", "startDate": "11/19/2020", "priority": "Turquoise", "approved": true },
    { "taskID": 918, "taskName": "Enrica", "startDate": "12/5/2020", "priority": "Maroon", "approved": true },
    { "taskID": 919, "taskName": "Hildagard", "startDate": "5/10/2021", "priority": "Fuscia", "approved": true },
    { "taskID": 920, "taskName": "Hestia", "startDate": "4/26/2021", "priority": "Teal", "approved": false },
    { "taskID": 921, "taskName": "Caye", "startDate": "11/8/2020", "priority": "Pink", "approved": false },
    { "taskID": 922, "taskName": "Lorinda", "startDate": "7/9/2021", "priority": "Khaki", "approved": false },
    { "taskID": 923, "taskName": "Delmor", "startDate": "7/2/2021", "priority": "Purple", "approved": true },
    { "taskID": 924, "taskName": "Ilaire", "startDate": "8/25/2021", "priority": "Crimson", "approved": true },
    { "taskID": 925, "taskName": "Alon", "startDate": "12/16/2020", "priority": "Green", "approved": false },
    { "taskID": 926, "taskName": "Stoddard", "startDate": "11/15/2020", "priority": "Purple", "approved": false },
    { "taskID": 927, "taskName": "Urban", "startDate": "10/1/2021", "priority": "Teal", "approved": false },
    { "taskID": 928, "taskName": "Torrance", "startDate": "2/26/2021", "priority": "Purple", "approved": true },
    { "taskID": 929, "taskName": "Buckie", "startDate": "4/4/2021", "priority": "Puce", "approved": true },
    { "taskID": 930, "taskName": "Donny", "startDate": "10/1/2021", "priority": "Red", "approved": true },
    { "taskID": 931, "taskName": "Debby", "startDate": "10/21/2020", "priority": "Fuscia", "approved": false },
    { "taskID": 932, "taskName": "Margarethe", "startDate": "10/9/2021", "priority": "Aquamarine", "approved": false },
    { "taskID": 933, "taskName": "Zack", "startDate": "12/14/2020", "priority": "Aquamarine", "approved": false },
    { "taskID": 934, "taskName": "Loydie", "startDate": "3/24/2021", "priority": "Orange", "approved": true },
    { "taskID": 935, "taskName": "Chet", "startDate": "8/4/2021", "priority": "Pink", "approved": false },
    { "taskID": 936, "taskName": "Lidia", "startDate": "8/9/2021", "priority": "Yellow", "approved": true },
    { "taskID": 937, "taskName": "Dasi", "startDate": "4/13/2021", "priority": "Pink", "approved": false },
    { "taskID": 938, "taskName": "Harri", "startDate": "8/5/2021", "priority": "Maroon", "approved": true },
    { "taskID": 939, "taskName": "Sallyanne", "startDate": "7/8/2021", "priority": "Crimson", "approved": false },
    { "taskID": 940, "taskName": "Brooks", "startDate": "9/2/2021", "priority": "Orange", "approved": false },
    { "taskID": 941, "taskName": "Lilith", "startDate": "4/19/2021", "priority": "Aquamarine", "approved": false },
    { "taskID": 942, "taskName": "Henrie", "startDate": "5/30/2021", "priority": "Teal", "approved": true },
    { "taskID": 943, "taskName": "Ethelind", "startDate": "10/27/2020", "priority": "Green", "approved": false },
    { "taskID": 944, "taskName": "Penelopa", "startDate": "6/30/2021", "priority": "Violet", "approved": true },
    { "taskID": 945, "taskName": "Erroll", "startDate": "1/18/2021", "priority": "Turquoise", "approved": true },
    { "taskID": 946, "taskName": "Charissa", "startDate": "8/6/2021", "priority": "Khaki", "approved": true },
    { "taskID": 947, "taskName": "Franchot", "startDate": "6/27/2021", "priority": "Crimson", "approved": true },
    { "taskID": 948, "taskName": "Schuyler", "startDate": "10/25/2020", "priority": "Turquoise", "approved": false },
    { "taskID": 949, "taskName": "Waite", "startDate": "11/9/2020", "priority": "Turquoise", "approved": true },
    { "taskID": 950, "taskName": "Dorolice", "startDate": "9/15/2021", "priority": "Khaki", "approved": false },
    { "taskID": 951, "taskName": "Monro", "startDate": "3/11/2021", "priority": "Purple", "approved": false },
    { "taskID": 952, "taskName": "Ase", "startDate": "8/14/2021", "priority": "Purple", "approved": true },
    { "taskID": 953, "taskName": "Bruno", "startDate": "4/4/2021", "priority": "Teal", "approved": true },
    { "taskID": 954, "taskName": "Ashly", "startDate": "9/28/2021", "priority": "Turquoise", "approved": true },
    { "taskID": 955, "taskName": "Florance", "startDate": "4/14/2021", "priority": "Green", "approved": false },
    { "taskID": 956, "taskName": "Ingmar", "startDate": "11/29/2020", "priority": "Puce", "approved": true },
    { "taskID": 957, "taskName": "Prue", "startDate": "3/18/2021", "priority": "Crimson", "approved": true },
    { "taskID": 958, "taskName": "Harris", "startDate": "8/28/2021", "priority": "Goldenrod", "approved": false },
    { "taskID": 959, "taskName": "Jaimie", "startDate": "3/2/2021", "priority": "Yellow", "approved": true },
    { "taskID": 960, "taskName": "Lebbie", "startDate": "11/10/2020", "priority": "Teal", "approved": false },
    { "taskID": 961, "taskName": "Derrek", "startDate": "5/21/2021", "priority": "Pink", "approved": true },
    { "taskID": 962, "taskName": "Robbyn", "startDate": "11/21/2020", "priority": "Blue", "approved": false },
    { "taskID": 963, "taskName": "Lester", "startDate": "3/16/2021", "priority": "Pink", "approved": false },
    { "taskID": 964, "taskName": "Layney", "startDate": "1/19/2021", "priority": "Pink", "approved": true },
    { "taskID": 965, "taskName": "Wald", "startDate": "1/22/2021", "priority": "Khaki", "approved": true },
    { "taskID": 966, "taskName": "Rolland", "startDate": "6/21/2021", "priority": "Green", "approved": true },
    { "taskID": 967, "taskName": "Ros", "startDate": "9/19/2021", "priority": "Crimson", "approved": false },
    { "taskID": 968, "taskName": "Othelia", "startDate": "1/27/2021", "priority": "Green", "approved": false },
    { "taskID": 969, "taskName": "Clyde", "startDate": "1/5/2021", "priority": "Turquoise", "approved": false },
    { "taskID": 970, "taskName": "Georgeta", "startDate": "12/16/2020", "priority": "Teal", "approved": false },
    { "taskID": 971, "taskName": "Jeffy", "startDate": "9/24/2021", "priority": "Violet", "approved": true },
    { "taskID": 972, "taskName": "Seward", "startDate": "4/6/2021", "priority": "Aquamarine", "approved": true },
    { "taskID": 973, "taskName": "Letizia", "startDate": "9/13/2021", "priority": "Crimson", "approved": false },
    { "taskID": 974, "taskName": "Hadleigh", "startDate": "6/25/2021", "priority": "Red", "approved": false },
    { "taskID": 975, "taskName": "Cilka", "startDate": "12/22/2020", "priority": "Teal", "approved": false },
    { "taskID": 976, "taskName": "Sebastian", "startDate": "1/18/2021", "priority": "Maroon", "approved": true },
    { "taskID": 977, "taskName": "Wolfgang", "startDate": "2/6/2021", "priority": "Red", "approved": false },
    { "taskID": 978, "taskName": "Anny", "startDate": "6/12/2021", "priority": "Aquamarine", "approved": true },
    { "taskID": 979, "taskName": "Robby", "startDate": "1/2/2021", "priority": "Purple", "approved": true },
    { "taskID": 980, "taskName": "Glen", "startDate": "3/31/2021", "priority": "Orange", "approved": false },
    { "taskID": 981, "taskName": "Clarissa", "startDate": "8/13/2021", "priority": "Crimson", "approved": false },
    { "taskID": 982, "taskName": "Sheelagh", "startDate": "4/1/2021", "priority": "Red", "approved": true },
    { "taskID": 983, "taskName": "Blair", "startDate": "1/11/2021", "priority": "Purple", "approved": true },
    { "taskID": 984, "taskName": "Bogey", "startDate": "9/15/2021", "priority": "Khaki", "approved": false },
    { "taskID": 985, "taskName": "Willamina", "startDate": "10/11/2021", "priority": "Green", "approved": true },
    { "taskID": 986, "taskName": "Saunders", "startDate": "6/9/2021", "priority": "Indigo", "approved": false },
    { "taskID": 987, "taskName": "Ado", "startDate": "9/6/2021", "priority": "Maroon", "approved": false },
    { "taskID": 988, "taskName": "Udell", "startDate": "3/11/2021", "priority": "Teal", "approved": false },
    { "taskID": 989, "taskName": "Marianna", "startDate": "4/8/2021", "priority": "Yellow", "approved": true },
    { "taskID": 990, "taskName": "Zitella", "startDate": "11/7/2020", "priority": "Indigo", "approved": true },
    { "taskID": 991, "taskName": "Abie", "startDate": "7/9/2021", "priority": "Purple", "approved": true },
    { "taskID": 992, "taskName": "Kassie", "startDate": "6/4/2021", "priority": "Green", "approved": true },
    { "taskID": 993, "taskName": "Gaby", "startDate": "11/1/2020", "priority": "Indigo", "approved": false },
    { "taskID": 994, "taskName": "Louella", "startDate": "5/8/2021", "priority": "Mauv", "approved": true },
    { "taskID": 995, "taskName": "Kelcy", "startDate": "7/22/2021", "priority": "Yellow", "approved": true },
    { "taskID": 996, "taskName": "Reube", "startDate": "12/28/2020", "priority": "Puce", "approved": true },
    { "taskID": 997, "taskName": "Shaylyn", "startDate": "6/22/2021", "priority": "Maroon", "approved": false },
    { "taskID": 998, "taskName": "Marlane", "startDate": "8/14/2021", "priority": "Pink", "approved": true },
    { "taskID": 999, "taskName": "Clare", "startDate": "5/21/2021", "priority": "Puce", "approved": true },
    { "taskID": 1000, "taskName": "Wayland", "startDate": "9/15/2021", "priority": "Turquoise", "approved": true }
];


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _jsontreegriddata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsontreegriddata */ "Cy5W");
/* harmony import */ var _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-angular-treegrid */ "QUNt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-popups */ "Naoh");
/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-base */ "4SUy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @syncfusion/ej2-angular-navigations */ "hXFv");








const _c0 = ["treegrid"];
const _c1 = ["contextmenu"];
const _c2 = ["headercontextmenu"];
Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__["enableRipple"])(true);
class AppComponent {
    constructor(document, ren, eleRef) {
        this.ren = ren;
        this.eleRef = eleRef;
        this.data = [];
        this.isCut = false;
        this.menuItems = [
            {
                text: 'Add Next',
                iconCss: 'e-icons e-add'
            },
            {
                text: 'Add Child',
                iconCss: 'e-icons e-add'
            },
            {
                text: 'Edit Row',
                iconCss: 'e-icons e-edit'
            },
            {
                text: 'Delete Row',
                iconCss: 'e-icons e-trash'
            },
            {
                text: 'Cut',
                iconCss: 'e-icons e-cut'
            },
            {
                text: 'Copy',
                iconCss: 'e-icons e-copy'
            },
            {
                text: 'PasteNext',
                iconCss: 'e-icons e-paste',
            }
        ];
    }
    fullscreen_1() {
        document.body.requestFullscreen();
    }
    ngOnInit() {
        localStorage.setItem("lastcount", "1003");
        this.dialog = new _syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_3__["Dialog"]({
            // Set Dialog position
            // position: { X: 'center', Y: 'center' },
            position: { X: "center", Y: "center" },
            isModal: true,
            // overlayClick event handler
            overlayClick: onOverlayClick,
            // Enables the header
            header: 'Add New Child Record',
            // Enables the close icon button in header
            showCloseIcon: true,
            // Dialog content
            content: document.getElementById("dlgContent"),
            // The Dialog shows within the target element
            target: document.getElementById("control-section"),
            // Dialog width
            width: '300px',
            height: '500px',
            beforeOpen: onBeforeopen
        });
        function onOverlayClick() {
            this.dialog.hide();
        }
        function onBeforeopen() {
            document.getElementById('dlgContent').style.visibility = 'visible';
        }
        // Render initialized Dialog
        this.dialog.appendTo('#dialog');
        this.dialog.hide();
        // this.dialog.appendTo('#dialog');
        this.data = _jsontreegriddata__WEBPACK_IMPORTED_MODULE_0__["sampleData"];
        this.pageSettings = { pageSize: 1000 };
        this.editing = { allowAdding: true, allowDeleting: true, allowEditing: true, mode: 'Dialog', newRowPosition: 'Below' };
        this.selectOptions = { type: 'Multiple' };
        this.headermenuItems = [
            //Font size
            {
                text: "Font size",
            },
            {
                text: "Text Wrap",
            },
            {
                text: "Font color",
            },
            {
                text: "Background color",
            },
            {
                text: "Column Type",
            },
            {
                text: "Column Align",
            },
            {
                text: "Column Add",
            },
            {
                text: "Column Edit",
            },
            {
                text: "Column minimum Width",
            },
            {
                text: "Enable Freeze",
            },
            {
                text: "Column Delete",
            },
            {
                text: "Enable Filter",
            },
            {
                text: "Enable Sorting",
            },
            {
                text: "Enable Multi Sorting",
            },
            {
                text: "Enable Resizing",
            },
            {
                text: "Enable Drag/Drop",
            },
            {
                text: "Show/Hide Columns",
                items: [
                    {
                        text: "taskID",
                    },
                    {
                        text: "taskName",
                    },
                    {
                        text: "startDate",
                    },
                    {
                        text: "approved",
                    },
                    {
                        text: "priority",
                    },
                ]
            },
        ];
        this.filterSettings = {
            type: "FilterBar",
            hierarchyMode: "Parent",
            mode: "Immediate",
        };
    }
    contextMenuOpen(arg) {
        let elem = arg.event.target;
        this.clickedColumn = elem.textContent;
        console.log(elem.textContent);
        return;
        // let row: Element | null = elem.closest('.e-row');
        // let uid: string | null = row && row.getAttribute('data-uid');
        // let items: Array<HTMLElement> = [].slice.call(document.querySelectorAll('.e-menu-item'));
        // for (let i: number = 0; i < items.length; i++) {
        //   items[i].setAttribute('style','display: none;');
        // }
    }
    select(args) {
        // alert(args.item.text);
        let menu = document.getElementsByClassName("e-table");
        // console.log(menu)
        // this.treegrid.addRecord();
        var rowid = this.treegrid.selectedRowIndex;
        this.selectitem = args.item.text;
        //var person = prompt("Please enter your name", "Harry Potter");
        if (args.item.text === 'Column Add') {
            var newcol = "";
            newcol = prompt("Please enter column name", "test");
            var newCols = [];
            this.treegrid.columns.forEach((res) => {
                console.log(res.field);
                newCols.push({ field: res.field, headerText: res.headerText, width: 70, textAlign: 'Right' });
            });
            console.log(newCols);
            // old.push(added)
            newCols.push({ field: newcol, headerText: newcol, width: 80, textAlign: 'Right' });
            this.treegrid.columns = newCols;
            this.treegrid.refreshColumns();
        }
        if (args.item.text === 'Column Edit') {
            // alert(this.clickedColumn)
            var newcol = "";
            newcol = prompt("Please enter column name", this.clickedColumn);
            var newCols = [];
            this.treegrid.columns.forEach((res) => {
                console.log(res.field);
                if (this.clickedColumn == res.headerText) {
                    newCols.push({ field: newcol, headerText: newcol, width: 70, textAlign: 'Right' });
                }
                else {
                    newCols.push({ field: res.field, headerText: res.headerText, width: 70, textAlign: 'Right' });
                }
            });
            console.log(newCols);
            this.treegrid.columns = newCols;
        }
        if (args.item.text === 'Column Align') {
            // alert(this.clickedColumn)
            var newcol = "";
            newcol = prompt("Please enter column align", "Right/Left/Center");
            var newCols = [];
            this.treegrid.columns.forEach((res) => {
                console.log(res.field);
                if (this.clickedColumn == res.headerText) {
                    newCols.push({ field: res.field, headerText: res.headerText, width: 70, textAlign: newcol });
                }
                else {
                    newCols.push({ field: res.field, headerText: res.headerText, width: 70, textAlign: 'Right' });
                }
            });
            console.log(newCols);
            this.treegrid.columns = newCols;
        }
        if (args.item.text === 'Font size') {
            // alert(this.clickedColumn)
            var newcol = "";
            newcol = prompt("Please enter column font-size", "");
            var targeted_col_index = 0;
            var i = 0;
            this.treegrid.columns.forEach((res) => {
                console.log(res.field);
                if (this.clickedColumn == res.headerText) {
                    targeted_col_index = i;
                    // newCols.push({field: res.field, headerText:res.headerText, width: 70, textAlign: newcol});
                }
                i++;
            });
            // alert(targeted_col_index)
            console.log(newCols);
            var total_rows = this.treegrid.getRows().length;
            // alert(total_rows);
            for (var j = 0; j < total_rows; j++) {
                document.getElementsByClassName('e-rowcell')[targeted_col_index].style = "font-size: " + newcol + "px;";
                targeted_col_index = targeted_col_index + 5;
                // (document.getElementsByClassName('e-rowcell')[1] as any).style = "background-color: green";
            }
            // this.treegrid.columns = newCols;
        }
        if (args.item.text === 'Font color') {
            // alert(this.clickedColumn)
            var newcol = "";
            newcol = prompt("Please enter column font-color", "");
            var targeted_col_index = 0;
            var i = 0;
            this.treegrid.columns.forEach((res) => {
                console.log(res.field);
                if (this.clickedColumn == res.headerText) {
                    targeted_col_index = i;
                    // newCols.push({field: res.field, headerText:res.headerText, width: 70, textAlign: newcol});
                }
                i++;
            });
            // alert(targeted_col_index)
            console.log(newCols);
            var total_rows = this.treegrid.getRows().length;
            // alert(total_rows);
            for (var j = 0; j < total_rows; j++) {
                document.getElementsByClassName('e-rowcell')[targeted_col_index].style = "color: " + newcol;
                targeted_col_index = targeted_col_index + 5;
                // (document.getElementsByClassName('e-rowcell')[1] as any).style = "background-color: green";
            }
        }
        if (args.item.text === 'Background color') {
            // alert(this.clickedColumn)
            var newcol = "";
            newcol = prompt("Please enter column background-color", "");
            var targeted_col_index = 0;
            var i = 0;
            this.treegrid.columns.forEach((res) => {
                console.log(res.field);
                if (this.clickedColumn == res.headerText) {
                    targeted_col_index = i;
                    // newCols.push({field: res.field, headerText:res.headerText, width: 70, textAlign: newcol});
                }
                i++;
            });
            // alert(targeted_col_index)
            console.log(newCols);
            var total_rows = this.treegrid.getRows().length;
            // alert(total_rows);
            for (var j = 0; j < total_rows; j++) {
                document.getElementsByClassName('e-rowcell')[targeted_col_index].style = "background-color: " + newcol;
                targeted_col_index = targeted_col_index + 5;
                // (document.getElementsByClassName('e-rowcell')[1] as any).style = "background-color: green";
            }
        }
        // /normal|break-word|initial|inherit
        if (args.item.text === 'Text Wrap') {
            // alert(this.clickedColumn)
            var newcol = "";
            newcol = prompt("Please enter column text-wrap", "normal|break-word|initial|inherit");
            var targeted_col_index = 0;
            var i = 0;
            this.treegrid.columns.forEach((res) => {
                console.log(res.field);
                if (this.clickedColumn == res.headerText) {
                    targeted_col_index = i;
                    // newCols.push({field: res.field, headerText:res.headerText, width: 70, textAlign: newcol});
                }
                i++;
            });
            // alert(targeted_col_index)
            console.log(newCols);
            var total_rows = this.treegrid.getRows().length;
            // alert(total_rows);
            for (var j = 0; j < total_rows; j++) {
                document.getElementsByClassName('e-rowcell')[targeted_col_index].style = "word-wrap: " + newcol;
                targeted_col_index = targeted_col_index + 5;
                // (document.getElementsByClassName('e-rowcell')[1] as any).style = "background-color: green";
            }
        }
        //Text/Num/Date/Boolean/DropDownList
        if (args.item.text === 'Column Type') {
            // alert(this.clickedColumn)
            var newcol = "";
            newcol = prompt("Please enter column Type", "Text/Num/Date/Boolean/DropDownList");
            var newCols = [];
            this.treegrid.columns.forEach((res) => {
                console.log(res.field);
                if (this.clickedColumn == res.headerText) {
                    newCols.push({ field: res.field, headerText: res.headerText, width: 80, textAlign: 'Right', type: newcol });
                }
                else {
                    newCols.push({ field: res.field, headerText: res.headerText, width: 70, textAlign: 'Right' });
                }
            });
            console.log(newCols);
            // old.push(added)
            // newCols.push({ field: newcol, headerText: newcol, width: 80, textAlign: 'Right' });
            this.treegrid.columns = newCols;
        }
        // if(args.item.text === 'Column minimum Width') {
        //   // alert(this.clickedColumn)
        //   var newcol = "";
        //   newcol = prompt("Please enter column text-wrap", "100");
        //   var targeted_col_index = 0;
        //   var i=0;
        //   this.treegrid.columns.forEach((res)=>{
        //     console.log(res.field)
        //     if(this.clickedColumn == res.headerText){
        //       targeted_col_index = i;
        //       // newCols.push({field: res.field, headerText:res.headerText, width: 70, textAlign: newcol});
        //     }
        //     i++;
        //   });
        //   (document.getElementsByClassName('e-headercell')[targeted_col_index] as any).style = "min-width: "+newcol+"px";
        // }
        if (args.item.text === 'Column minimum Width') {
            // alert(this.clickedColumn)
            var newcol = "";
            newcol = prompt("Please enter column min width", "200");
            var newCols = [];
            this.treegrid.columns.forEach((res) => {
                console.log(res.field);
                if (this.clickedColumn == res.headerText) {
                    newCols.push({ field: res.field, headerText: res.headerText, width: newcol, textAlign: 'Right' });
                }
                else {
                    newCols.push({ field: res.field, headerText: res.headerText, width: 70, textAlign: 'Right' });
                }
            });
            console.log(newCols);
            // old.push(added)
            // newCols.push({ field: newcol, headerText: newcol, width: 80, textAlign: 'Right' });
            this.treegrid.columns = newCols;
        }
        if (args.item.text === 'Column Delete') {
            var newCols = [];
            this.treegrid.columns.forEach((res) => {
                console.log(res.field);
                if (this.clickedColumn == res.headerText) {
                    // newCols.push({field: newcol, headerText:newcol, width: 70, textAlign: 'Right' });
                }
                else {
                    newCols.push({ field: res.field, headerText: res.headerText, width: 70, textAlign: 'Right' });
                }
            });
            console.log(newCols);
            this.treegrid.columns = newCols;
        }
        if (args.item.text === 'Print Preview') {
            this.treegrid.print();
        }
        if (args.item.text === 'Add Next') {
            this.editing = { allowAdding: true, allowDeleting: true, allowEditing: true, mode: 'Dialog', newRowPosition: 'Below' };
            this.treegrid.addRecord();
            // this.treegrid.;
        }
        if (args.item.text === 'Add Child') {
            let selRow = this.treegrid.getSelectedRows();
            //  alert(selRow.length)
            if (selRow.length == 0 || selRow.length < 0 || selRow.length > 1) {
                alert("Please select a row first!");
                return;
            }
            let temp = this.treegrid.dataSource;
            let count = parseInt(localStorage.getItem("lastcount")) + 1; //Math.floor(Math.random() * (9999 - 1004) + 1004);//temp.length+1;
            document.getElementById("_gridcontroltaskIDchild").value = count + "";
            localStorage.setItem("lastcount", count + "");
            this.dialog.show();
            // this.editing = {  allowAdding: true, allowDeleting: true, allowEditing: true, mode: 'Row' , newRowPosition: 'Child' }; 
            // this.treegrid.addRecord();
            // this.treegrid.;
        }
        if (args.item.text === 'Edit Row') {
            if (rowid < 0) {
                alert("Please select row first!");
                return;
            }
            // var rowData = this.treegrid.getRowByIndex(rowid);
            var allRows = this.treegrid.getRows();
            var selRow = allRows[rowid];
            this.treegrid.startEdit(selRow);
            // this.treegrid.updateRow(rowid,rowData);
        }
        if (args.item.text === 'Delete Row') {
            if (rowid < 0) {
                alert("Please select row first!");
                return;
            }
            alert(rowid.toString());
            var allselRows = this.treegrid.getSelectedRows();
            allselRows.forEach((rec) => {
                // console.log(rec.ar)
                rec.remove();
                // this.treegrid.deleteRow(rec)
            });
            // this.treegrid.getRows(
            // this.treegrid.remove(rowid.toString());
        }
        if (args.item.text === 'taskID') {
            //alert("I am here")
            var taskID = this.treegrid.getColumnByField('taskID');
            if (taskID.visible) {
                taskID.visible = false;
            }
            else {
                taskID.visible = true;
            }
            this.treegrid.refreshColumns();
        }
        if (args.item.text === 'priority') {
            //alert("I am here")
            var priority = this.treegrid.getColumnByField('priority');
            if (priority.visible) {
                priority.visible = false;
            }
            else {
                priority.visible = true;
            }
            this.treegrid.refreshColumns();
        }
        if (args.item.text === 'approved') {
            //alert("I am here")
            var approved = this.treegrid.getColumnByField('approved');
            if (approved.visible) {
                approved.visible = false;
            }
            else {
                approved.visible = true;
            }
            this.treegrid.refreshColumns();
        }
        if (args.item.text === 'startDate') {
            //alert("I am here")
            var startDate = this.treegrid.getColumnByField('startDate');
            if (startDate.visible) {
                startDate.visible = false;
            }
            else {
                startDate.visible = true;
            }
            this.treegrid.refreshColumns();
        }
        if (args.item.text === 'taskName') {
            // this.treegrid.showColumnChooser = true;
            // this.treegrid.openColumnChooser();
            // return;
            //alert("I am here")
            var taskName = this.treegrid.getColumnByField('taskName');
            if (taskName.visible) {
                taskName.visible = false;
            }
            else {
                taskName.visible = true;
            }
            this.treegrid.refreshColumns();
        }
        if (args.item.text === 'UnHide Column') {
            this.treegrid.getColumnByField('ShipCountry').visible = true;
            this.treegrid.refreshColumns();
        }
        if (args.item.text === 'Column background color') {
            document.getElementsByClassName('e-headercell')[1].style = "background-color: green";
        }
        if (args.item.text === 'Reset color') {
            document.getElementsByClassName('e-headercell')[1].style.cssText = "";
        }
        if (args.item.text === 'Enable Resizing') {
            this.treegrid.allowResizing = true;
        }
        if (args.item.text === 'Enable Drag/Drop') {
            this.treegrid.allowRowDragAndDrop = true;
        }
        if (args.item.text === 'Enable Filter') {
            this.treegrid.allowFiltering = true;
        }
        if (args.item.text === 'Enable Sorting') {
            this.treegrid.allowSorting = true;
        }
        //Enable Multi Sorting
        if (args.item.text === 'Enable Multi Sorting') {
            this.treegrid.allowMultiSorting = true;
        }
        if (args.item.text === 'Enable Freeze') {
            let mvblColumns = this.treegrid.grid.getMovableColumns();
            if (mvblColumns.length === 1) {
                alert('Atleast one Column should be in movable');
                return;
            }
            //set freez column limit
            this.treegrid.frozenColumns = (this.treegrid.columns.length - 1);
            let targeted_col_index = 0;
            let i = 0;
            this.treegrid.columns.forEach((res) => {
                // console.log(res.field)
                if (this.clickedColumn == res.headerText) {
                    targeted_col_index = i;
                }
                i++;
            });
            let j = 0;
            this.treegrid.columns.forEach((res) => {
                // console.log(res.field)
                if (j <= targeted_col_index) {
                    this.treegrid.grid.getColumnByField(res.field).freeze = "Left";
                }
                j++;
            });
            setTimeout(() => {
                this.treegrid.refreshColumns();
                // this.treegrid.refresh();  
            }, 100);
        }
        if (args.item.text === 'TaskID' || args.item.text === 'Priority' || args.item.text === 'Approved' ||
            args.item.text === 'StartDate' || args.item.text === 'TaskName') {
            // this.clickedColumn = this.clickedColumn.replace(/\s/g, '');
            // alert(this.clickedColumn)
            this.treegrid.frozenColumns = 4;
            var task = args.item.text;
            task = task.replace(/^.{1}/g, task[0].toLowerCase());
            let mvblColumns = this.treegrid.grid.getMovableColumns();
            if (mvblColumns.length === 1) {
                alert('Atleast one Column should be in movable');
                return;
            }
            if (this.treegrid.grid.getColumnByField(task).freeze == "Left") {
                this.treegrid.grid.getColumnByField(task).freeze = "Center";
            }
            else {
                this.treegrid.grid.getColumnByField(task).freeze = "Left";
            }
            setTimeout(() => {
                this.treegrid.refreshColumns();
            }, 100);
        }
        if (args.item.text === 'Copy') {
            this.isCut = false;
            // navigator.clipboard.writeText("")
            var allselRows = this.treegrid.getSelectedRows();
            // console.log(allselRows);
            this.treegrid.copy();
            //  (document.getElementsByClassName('e-headercell')[1] as any).style.cssText = "";
        }
        if (args.item.text === 'Cut') {
            var allselRows = this.treegrid.getSelectedRows();
            this.isCut = true;
            // console.log(allselRows);
            this.treegrid.copy();
            allselRows.forEach((rec) => {
                // console.log(rec)
                rec.remove();
                // this.treegrid.deleteRow()
            });
            let temp = this.treegrid.dataSource;
            // let rowid = this.treegrid.selectedRowIndex;
            // alert(rowid)
            let actualrow = (this.treegrid.getRowInfo(this.treegrid.getRowByIndex(rowid)));
            actualrow = actualrow.rowData;
            let actualindex = temp.findIndex(item => {
                // console.log(item.taskID +"=="+ actualrow.taskID)
                return item.taskID == actualrow.taskID;
            });
            // alert(actualindex)
            actualindex = actualindex - 1;
            temp.splice(actualindex, 1);
            this.treegrid.dataSource = temp;
            // console.log(temp);
            // console.log(this.treegrid.dataSource);
            this.treegrid.refresh();
            // this.treegrid.remove
            // (document.getElementsByClassName('e-headercell')[1] as any).style.cssText = "";
        }
        if (args.item.text === 'PasteNext') {
            var temp = this.treegrid.dataSource;
            navigator.clipboard.readText()
                .then(text => {
                // console.log(text);
                let data = text.split('\n');
                // console.log(data);
                for (let i = 0; i < data.length; i++) {
                    let rec = data[i].split("\t");
                    let newRecord = {
                        taskID: parseInt(rec[0]),
                        taskName: rec[1],
                        startDate: rec[2],
                        approved: (rec[3]) ? true : false,
                        priority: rec[4]
                    };
                    // newData.push(newRecord);
                    temp.push(newRecord);
                }
                ;
                // console.log(newData)
                // temp.push(newData)
                this.treegrid.dataSource = temp;
                this.treegrid.refresh();
                // console.log(this.treegrid.dataSource)
            })
                .catch(err => {
                console.error('Failed to read clipboard contents: ', err);
            });
        }
    }
    traverse(obj, taskID, newChild) {
        if (obj.subtasks) {
            let o = obj.subtasks;
            for (var i in o) {
                if (!!o[i] && typeof (o[i]) == "object") {
                    // console.log("going in depth")
                    if (o[i].taskID == taskID) {
                        if (o[i].subtasks) {
                            o[i].subtasks.push(newChild);
                        }
                        else {
                            o[i].subtasks = [];
                            o[i].subtasks.push(newChild);
                        }
                    }
                    else {
                        this.traverse(o[i], taskID, newChild);
                    }
                    // console.log(i, o[i]);
                }
                else {
                    // // console.log("end I guess")
                    // console.log(i, o[i]);
                }
            }
        }
        else {
            obj.subtasks = [];
            obj.subtasks.push(newChild);
        }
    }
    saveChild() {
        var elements = document.getElementById("_gridcontrolChildForm").elements;
        var temp = this.treegrid.dataSource;
        var obj = {};
        for (var i = 0; i < elements.length; i++) {
            var item = elements.item(i);
            obj[item.name] = item.value;
        }
        console.log(obj);
        obj.taskID = parseInt(obj.taskID);
        var rowid = this.treegrid.selectedRowIndex;
        let actualrow = (this.treegrid.getRowInfo(this.treegrid.getRowByIndex(rowid)));
        let newRow = {};
        if (actualrow.rowData.hasChildRecords && actualrow.rowData.level == 0) {
            newRow = actualrow.rowData.taskData;
            newRow.subtasks.push(obj);
            temp[rowid] = newRow;
        }
        else if (actualrow.rowData.parentItem) {
            //complex case
            let actualindex = rowid;
            // alert('{"taskID":'+actualrow.rowData.taskID);
            temp.forEach((rec, ind) => {
                // console.log(JSON.stringify(rec))
                if (JSON.stringify(rec).includes('{"taskID":' + actualrow.rowData.taskID)) {
                    actualindex = ind;
                    return 0;
                }
                return -1;
            });
            // alert(actualindex);
            this.traverse(temp[actualindex], actualrow.rowData.taskID, obj);
            // temp[actualindex]
        }
        else {
            actualrow = actualrow.rowData;
            let actualindex = temp.findIndex(item => {
                // console.log(item.taskID +"=="+ actualrow.taskID)
                return item.taskID == actualrow.taskID;
            });
            // alert(actualindex);
            temp[actualindex] = Object.assign(Object.assign({}, temp[actualindex]), { subtasks: [obj] });
        }
        // /selRow[0].getAttribute('ariaRowIndex')
        // console.log(rowid);
        // console.log(actualrow);
        // console.log(temp);
        // return;
        // temp[rowid] = {...temp[rowid],subtasks: [obj]}
        // console.log(temp[rowid]);
        this.treegrid.dataSource = temp;
        this.treegrid.refresh();
        this.dialog.hide();
    }
    closeChild() {
        this.dialog.hide();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.treegrid = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.contextmenu = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.headercontextmenu = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([_syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_1__["ToolbarService"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_1__["FreezeService"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_1__["PageService"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_1__["SortService"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_1__["ResizeService"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_1__["EditService"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_1__["RowDDService"]])], decls: 72, vars: 9, consts: [[1, "centerdata"], [1, "control-section"], ["allowReordering", "true", "childMapping", "subtasks", "height", "100%", 3, "dataSource", "contextMenuItems", "filterSettings", "editSettings", "selectionSettings", "pageSettings", "treeColumnIndex"], ["treegrid", ""], ["field", "taskID", "headerText", "Task ID", "width", "100", "textAlign", "Right"], ["field", "taskName", "headerText", "Task Name", "width", "190"], ["field", "startDate", "headerText", "Start Date", "width", "135", "format", "yMd", "textAlign", "Right"], ["field", "approved", "headerText", "Approved", "width", "140", "textAlign", "Center", "type", "boolean", "displayAsCheckBox", "true"], ["field", "priority", "headerText", "Priority", "width", "140"], ["target", ".e-gridheader", 3, "items", "select", "beforeOpen"], ["headercontextmenu", ""], ["target", ".e-content", 3, "items", "select"], ["contextmenu", ""], ["id", "dialog"], ["id", "dlgContent", 1, "dialogContent", 2, "visibility", "hidden"], ["id", "_gridcontrol_dialogEdit_wrapper_dialog-content", 1, "e-dlg-content"], [1, "e-insertedrow"], ["id", "_gridcontrolChildForm", "novalidate", "", 1, "e-gridform", "e-lib", "e-formvalidator"], ["cellspacing", "6px", 1, "e-table"], [1, "e-rowcell", 2, "text-align", "left", "width", "190px"], [1, "e-float-input", "e-control-wrapper"], ["type", "number", "value", "", "id", "_gridcontroltaskIDchild", "name", "taskID", "e-mappinguid", "grid-column1001", "role", "textbox", "aria-labelledby", "label__gridcontroltaskID", 1, "e-field", "e-defaultcell", "e-ralign", "e-control", "e-textbox", "e-lib", 2, "text-align", "Right"], [1, "e-float-line"], ["id", "label__gridcontroltaskID", "for", "_gridcontroltaskID", 1, "e-float-text", "e-label-top"], ["type", "text", "value", "subtask", "id", "_gridcontroltaskName", "name", "taskName", "e-mappinguid", "grid-column1002", "role", "textbox", "aria-labelledby", "label__gridcontroltaskName", 1, "e-field", "e-defaultcell", "e-control", "e-textbox", "e-lib", 2, "text-align", "undefined"], ["id", "label__gridcontroltaskName", "for", "_gridcontroltaskName", 1, "e-float-text", "e-label-top"], ["type", "text", "value", "9/28/2021", "id", "_gridcontrolstartDate", "name", "startDate", "e-mappinguid", "grid-column1003", "role", "textbox", "aria-labelledby", "label__gridcontrolstartDate", 1, "e-field", "e-defaultcell", "e-ralign", "e-control", "e-textbox", "e-lib", 2, "text-align", "Right"], ["id", "label__gridcontrolstartDate", "for", "_gridcontrolstartDate", 1, "e-float-text", "e-label-top"], ["type", "text", "value", "true", "id", "_gridcontrolapproved", "name", "approved", "e-mappinguid", "grid-column1004", "role", "textbox", "aria-labelledby", "label__gridcontrolapproved", 1, "e-field", "e-defaultcell", "e-control", "e-textbox", "e-lib", 2, "text-align", "Center"], ["id", "label__gridcontrolapproved", "for", "_gridcontrolapproved", 1, "e-float-text", "e-label-top"], ["type", "text", "value", "High", "id", "_gridcontrolpriority", "name", "priority", "e-mappinguid", "grid-column1005", "role", "textbox", "aria-labelledby", "label__gridcontrolpriority", 1, "e-field", "e-defaultcell", "e-control", "e-textbox", "e-lib", 2, "text-align", "undefined"], ["id", "label__gridcontrolpriority", "for", "_gridcontrolpriority", 1, "e-float-text", "e-label-top"], [1, "e-footer-content"], ["type", "button", "data-ripple", "true", 1, "e-control", "e-btn", "e-lib", "e-primary", "e-flat", 3, "click"], ["type", "button", "data-ripple", "true", 1, "e-control", "e-btn", "e-lib", "e-flat", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Tree Grid Extended!");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Instructions:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Multi Sort: Enable Sorting first then Press Ctrl+click on header to excersise multi sort.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Freeze all left: after freeze context menu will be removed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ejs-treegrid", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "e-columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "e-column", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "e-column", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "e-column", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "e-column", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "e-column", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "ejs-contextmenu", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("select", function AppComponent_Template_ejs_contextmenu_select_20_listener($event) { return ctx.select($event); })("beforeOpen", function AppComponent_Template_ejs_contextmenu_beforeOpen_20_listener($event) { return ctx.contextMenuOpen($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "ejs-contextmenu", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("select", function AppComponent_Template_ejs_contextmenu_select_23_listener($event) { return ctx.select($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Task ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Task Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](50, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Start Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "Approved");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](64, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_Template_button_click_68_listener() { return ctx.saveChild(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_Template_button_click_70_listener() { return ctx.closeChild(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.data)("contextMenuItems", ctx.contextMenuItems)("filterSettings", ctx.filterSettings)("editSettings", ctx.editing)("selectionSettings", ctx.selectOptions)("pageSettings", ctx.pageSettings)("treeColumnIndex", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.headermenuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.menuItems);
    } }, directives: [_syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_1__["TreeGridComponent"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_1__["ColumnsDirective"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_1__["AggregateColumnsDirective"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_1__["ColumnDirective"], _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_1__["AggregateColumnDirective"], _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_6__["ContextMenuComponent"]], styles: [".centerdata[_ngcontent-%COMP%]{\n    margin: 0 auto; display: block;text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYyxFQUFFLGNBQWMsQ0FBQyxrQkFBa0I7QUFDckQiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyZGF0YXtcbiAgICBtYXJnaW46IDAgYXV0bzsgZGlzcGxheTogYmxvY2s7dGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-angular-navigations */ "hXFv");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ "jcQU");
/* harmony import */ var _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-angular-treegrid */ "QUNt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");





// import {DragDropModule} from '@angular/cdk/drag-drop';



class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_5__["FilterService"],
        _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_5__["PageService"],
        _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_5__["SortService"],
        _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_5__["ResizeService"],
        _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_5__["ColumnMenuService"],
        _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_5__["ReorderService"],
        _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_5__["ContextMenuService"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_5__["TreeGridModule"],
            _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_4__["DropDownListModule"],
            _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_1__["ContextMenuModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _syncfusion_ej2_angular_treegrid__WEBPACK_IMPORTED_MODULE_5__["TreeGridModule"],
        _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_4__["DropDownListModule"],
        _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_1__["ContextMenuModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map