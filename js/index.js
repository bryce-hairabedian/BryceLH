angular
      .module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
      .controller('AppCtrl', function($scope, $timeout, $mdSidenav){

/*SideNav toggler */
        var toggles = document.querySelectorAll(".c-hamburger");
        for(var i=toggles.length-1;i>=0;i--){
          var toggle = toggles[i];
          toggleHandler(toggle);

        };
        function toggleHandler(toggle) {
            toggle.addEventListener( "click", function(e) {
              e.preventDefault();
              (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
            });
          }

            $scope.toggleLeft = buildToggler('left');
            $scope.toggleRight = buildToggler('right');

            function buildToggler(componentId) {
              return function() {
                $mdSidenav(componentId).toggle();
              }
            }
/* Skills page */
    $scope.languages = [
      {lang: 'Java'},
      {lang: 'C/C++'},
      {lang: 'JS'},
      {lang: 'PHP'},
      {lang: 'MySQL'},
      {lang: 'XML'},
      {lang: 'CSS'},
      {lang: 'Codename One'}
    ];
    $scope.methods = [
      {method: 'Scrum'},
      {method: 'Agile'},
      {method: 'Iterative'}
    ];
    $scope.tools = [
      {tool: 'JUnit'},
      {tool: 'Visio'},
      {tool: 'Spring'},
      {tool: 'REST'}
    ];
/* Portfolios Page */
    $scope.portfolios_left = [
      {imagePath:'images/cardHeader_saferides_small_200.jpg',
      title:'ASI SafeRides',
      description:'Currently developing App with small team using Scrum with Agile. Mobile dispatching system used to find student or faculty a safe ride home. Deliverable date May 2017',
      skills: 'JS, PHP, REST, Spring, MySQL, HTML, CSS',
      alt:'asi SafeRides',
      github_visible:'visible',
      github_link:'https://github.com/blh22buck/safe-rides',
      linkButton_visible:'visible',
      linkButton_link:'http://www.asi.csus.edu/programs/safe-rides/',
      linkButton_color:'#7e9f2a',
      linkButton_text:'More Info',
      asi_visible:'visible',
      color:'#7e9f2a'
      },
      {imagePath:'images/dogCatcher_small_200.jpg',
      title:'Dog Catcher',
      description:'2D Mobile cross platform game. Includes touch screen controls, scoreview, and mapview. Based on observer design pattern. Written with Codename One.',
      skills: 'Codename One, Java',
      alt:'Dog in net',
      github_visible:'visible',
      github_link:'https://github.com/blh22buck/DogCatcher_CodenameOne',
      linkButton_visible:'hidden',
      linkButton_link:'',
      linkButton_color:'',
      linkButton_text:'',
      asi_visible:'hidden',
      color:'#a15a2c'
      },
      {imagePath:'images/gtaQuickCodes_small_200.jpg',
      title:'GTA Codes Quick',
      description:'Currently developing a App in my own time to be deployed. Very fast, light, and customizable mobile app. Provides GTA codes quickly and up to date.',
      skills: 'Java, XML, Android Development',
      alt:'GTA Code Quick',
      github_visible:'visible',
      github_link:'https://github.com/blh22buck/GTA_QuickCodes',
      linkButton_visible:'hidden',
      linkButton_link:'',
      linkButton_color:'',
      linkButton_text:'',
      asi_visible:'hidden',
      color:'#F44336'
      }
    ];
    $scope.portfolios_right = [
      {imagePath:'images/myWebsite_small_200.jpg',
      title:'My Website',
      description:'My own personal webapp built from scratch for the fun of learning AngularJS. Designed aesthetically with a passion for Google’s Material Design.',
      skills: 'JS, AngularJS, Node.js, CSS, HTML',
      alt:'Bryce Hairabedian Website',
      github_visible:'visible',
      github_link:'https://github.com/blh22buck/BryceLH',
      linkButton_visible:'hidden',
      linkButton_link:'',
      linkButton_color:'',
      linkButton_text:'',
      asi_visible:'hidden',
      color:'#3F51B5'
    },
      {imagePath:'images/sacState_200.png',
      title:'CSUS Ride Share',
      description:'Lead team of 5 in development of Android App. CSUS Students willing to share rides to & from campus. App was reviewed by CSUS VP of Student Affairs.',
      skills: 'Java, PHP, MySQL, XML, Android Development',
      alt:'CSUS Ride Share',
      github_visible:'visible',
      github_link:'https://github.com/blh22buck/SacStateRideshare',
      linkButton_visible:'hidden',
      linkButton_link:'',
      linkButton_color:'',
      linkButton_text:'',
      asi_visible:'hidden',
      color:'#cfb668'
      }
    ];

/*Begin on tab1, and transition between tabs */
    $scope.data = {selectedIndex: 0};

    $scope.next = function() {
      $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
    };
    $scope.previous = function() {
      $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
    };


});


/**
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
**/
