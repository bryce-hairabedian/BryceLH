(function () {
  'use strict';

  angular
      .module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
      .controller('AppCtrl', AppCtrl);

  function AppCtrl ( $scope ) {
    $scope.cards = [
      {imagePath:'images/cardHeader_saferides_small_200.jpg',
      title:'ASI SafeRides',
      description:'Ride Safe ',
      skills: 'REST, CSS',
      alt:'asi SafeRides'
      },
      {imagePath:'images/cardHeader_saferides_small_200.jpg',
      title:'next title',
      description:'next description',
      skills: 'more skills',
      alt:'more alt'
      },
    ];

    $scope.portfolios = [
      {imagePath:'images/cardHeader_saferides_small_200.jpg',
      title:'ASI SafeRides',
      description:'Currently developing App on small team using Scrum with Agile. Mobile dispatching system used to find student or faculty a safe ride home. Deliverable date May 2017',
      skills: 'JS, PHP, REST, Spring, MySQL, HTML, CSS',
      alt:'asi SafeRides'
      },
      {imagePath:'images/dogCatcher_small_200.jpg',
      title:'Dog Catcher',
      description:'2D Mobile cross platform game. Includes touch screen controls, scoreview, and mapview. Based on observer design pattern.',
      skills: 'Codename One, Java',
      alt:'Dog in net'
      },
      {imagePath:'images/myWebsite_small_200.jpg',
      title:'My Website',
      description:'My own personal webapp built from scratch for the fun of learning AngularJS. Designed aesthetically with a passion for Google’s Material Design.',
      skills: 'JS, AngularJS, Node.js, CSS, HTML',
      alt:'Bryce Hairabedian Website'
      },
      {imagePath:'images/gtaQuickCodes_small_200.jpg',
      title:'GTA Codes Quick',
      description:'Currently developing a App in my own time to be deployed. Very fast, light, and customizable mobile app. Provides GTA codes quickly and up to date.',
      skills: 'Java, XML, Android Development',
      alt:'GTA Code Quick'
      },
      {imagePath:'images/cardHeader_saferides_small_200.jpg',
      title:'CSUS Ride Share',
      description:'Lead team of 5 in development of Android App. CSUS Students willing to share rides to & from campus. App was reviewed by CSUS VP of Student Affairs.',
      skills: 'Java, PHP, MySQL, XML, Android Development',
      alt:'CSUS Ride Share'
      }
    ];


    $scope.data = {selectedIndex: 0};

    $scope.next = function() {
      $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
    };
    $scope.previous = function() {
      $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
    };
  }
})();


/**
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
**/
