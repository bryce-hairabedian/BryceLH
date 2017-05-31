/**
 * @ngdoc function
 * @name safeRidesWebApp.controller:AssignDriverModalCtrl
 * @description
 * # AssignDriverModalCtrl
 * Controller of the safeRidesWebApp
 */

angular
      .module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
      .controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $mdDialog) {
  var vm = this;
  vm.loadsidenav = false;
/**************Colors *************/

var COLORS = [ '#f22a26', '#f44f1d', '#f75a11', '#f77810', '#ffa30f',
                '#ffc30f', '#ffeb0f', '#e3fc07', '#a2fc07', '#2be506',
                '#20f948', '#04f480', '#04f4b0', '#04f4df', '#04d0f4',
                '#0490e8', '#0440e8', '#1304e8', '#6d00fc', '#b000fc',
                '#8401bc', '#ca02f7', '#72018c', '#f702e2', '#910084',
                '#f2009d', '#91015e', '#f9025d', '#137f16', '#ed0219'
];

/* Skills page */
    $scope.languages = [
      'Java',
      'C',
      'JavaScript',
      'PHP',
      'MySQL',
      'CSS',
      'LESS',
      'HTML5',
      'XML',
      'AngularJS'
    ];
    $scope.tools = [
      'Git',
      'Linux',
      'Visio',
      'Illustrator',
      'PSD',
      'Spring',
      'Eclipse',
      'RESTful',
      'Drupal',
      'Node.JS',
      'Android Studio'
    ];
    $scope.methods = [
      'Scrum',
      'Agile',
      'Iterative'
    ];

var SKILLS = [
{type: 'Languages', skill: 'Java'},
{type: 'Languages', skill: 'C'},
{type: 'Languages', skill: 'JavaScript'},
{type: 'Languages', skill: 'AngularJS'},
{type: 'Languages', skill: 'MySQL'},
{type: 'Languages', skill: 'XML'},
{type: 'Languages', skill: 'PHP'},
{type: 'Languages', skill: 'LESS'},
{type: 'Languages', skill: 'Python'},
{type: 'Languages', skill: 'CSS'},
{type: 'Languages', skill: 'HTML5'},
{type: 'Languages', skill: 'R'},

{type: 'Tools', skill: 'Photoshop'},
{type: 'Tools', skill: 'Illustrator'},
{type: 'Tools', skill: 'Visio'},
{type: 'Tools', skill: 'Git'},
{type: 'Tools', skill: 'Linux'},
{type: 'Tools', skill: 'Spring'},
{type: 'Tools', skill: 'Eclipse'},
{type: 'Tools', skill: 'RESTful API'},
{type: 'Tools', skill: 'Android Studio'},
{type: 'Tools', skill: 'Node.JS'},

{type: 'Methodologies', skill: 'Scrum'},
{type: 'Methodologies', skill: 'Agile'},
{type: 'Methodologies', skill: 'Iterative'}

  ];

var TILEDIM = [
  {column: '1', row:'1'},
  {column: '1', row:'2'},
  {column: '2', row:'2'},
  {column: '1', row:'1'},
  {column: '1', row:'1'},
  {column: '1', row:'1'},
  {column: '2', row:'1'},

  {column: '1', row:'2'},
  {column: '1', row:'1'},
  {column: '1', row:'2'},
  {column: '2', row:'2'},
  {column: '1', row:'3'},

  {column: '3', row:'1'},
  {column: '1', row:'1'},

  {column: '2', row:'2'},
  {column: '1', row:'1'},
  {column: '2', row:'1'},
  {column: '1', row:'2'},
  {column: '1', row:'1'},
  {column: '1', row:'1'},

  {column: '3', row:'1'},
  {column: '3', row:'1'},

  {column: '1', row:'1'},
  {column: '1', row:'1'},
  {column: '1', row:'1'},
  {column: '1', row:'2'},
  {column: '2', row:'2'},
  {column: '1', row:'1'},
  {column: '2', row:'1'},

  {column: '3', row:'1'},
  {column: '2', row:'1'},
  {column: '1', row:'1'}
];

/*SideNav toggler */
            $scope.toggleLeft = buildToggler('left');
            //var compId = "left";
            function buildToggler(componentId) {
              compId = componentId;
              return function() {
                $mdSidenav(componentId).toggle();
              }
            }



/* Dynamic tiles skills page */
          function randomColor() {
              return COLORS[Math.floor(Math.random() * COLORS.length)];
            }

          function randomRow() {
            var x = Math.random();
              if (x < 0.8) {
                return 1;
              } else if (x < 0.9) {
                return 2;
              } else {
                return 3;
              }
          }

this.tiles = (function() {
            var tiles = [];
            var skillLength = SKILLS.length;
            for (var i = 0; i < skillLength; i++) {
              tiles.push({
                color: COLORS[i],
                colspan: TILEDIM[i].column,
                rowspan: TILEDIM[i].row,
                type: SKILLS[i].type,
                skill: SKILLS[i].skill
              });
            }
            return tiles;
          })();


        $scope.showAdvanced = function(ev) {
          $mdDialog.show({
            controller: DialogController,
            templateUrl: 'skillsDialog.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints
          });
      };


/* Dialog - Gmail  */
  $scope.showAlert = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app

    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Email Me')
        .textContent('Bryce.Hairabedian@Gmail.com')
        .ariaLabel('Gmail Dialog')
        .ok('Done')
        .targetEvent(ev)
    );
  };


  function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };

  $scope.cancel = function() {
    $mdDialog.cancel();
  };

  $scope.closeDialog_openSidenav = function(){
    $mdDialog.cancel();

    $mdSidenav(compId).toggle();

  };
}

/* Portfolios Page */
    $scope.portfolios_left = [
      {imagePath:'images/red_dead_card_header_img.png',
      title:'Red Dead QuickCodes',
      description:'Native Android application deployed to the Google Play Store in my spare time with Java, XML, Android Studio, and Photoshop providing users around the world up-to-date Red Dead codes. Google Play Rating 4.8',
      skills: 'Android Development, Java, XML, Photoshop',
      alt:'Red Dead QuickCodes',
      githubButton_display:'display',
      github_link:'https://github.com/blh22buck/',
      linkButton_display:'none',
      linkButton_link:'',
      linkButton_color:'',
      linkButton_text:'',
      color:'#cc0001',
      hide_playstorebutton: false,
      hide_github: true,
      hide_moreinfo: true,
      header_class:'red-dead-card-header',
	  moreImages: true,
	  img1: 'images/scrnsht/rdq_main1.png'
      },
	  {imagePath:'images/gtaQuickCodes_small_200.png',
      title:'GTA QuickCodes',
      description:'Comming soon. Very fast, light, and customizable mobile app. Provides GTA codes quickly and up-to-date.',
	  skills: 'Android Development, Java, XML, Photoshop',
      alt:'GTA Code Quick',
      githubButton_display:'display',
      github_link:'https://github.com/blh22buck/GTA_QuickCodes',
      linkButton_display:'none',
      linkButton_link:'',
      linkButton_color:'gta-quickcodes-info-button',
      linkButton_text:'',
      color:'#F44336',
      hide_playstorebutton: true,
      hide_github: true,
      hide_moreinfo: true,
      header_class:'gta-quickcodes-card-header',
	  moreImages: false,
	  img1: undefined
  	  },
	  {
		  imagePath:'images/myWebsite_small_200.jpg',
	      title:'My Website',
    		description:'Created a personal web application. AngularJS, JavaScript, Node.js, NPM, Grunt, Bower, CSS, & HTML were used.',
	        skills: 'AngularJS Material Design, JavaScript, CSS, HTML',
	        alt:'Bryce Hairabedian Website',
	        githubButton_display:'display',
	        github_link:'https://github.com/blh22buck/BryceLH',
	        linkButton_display:'none',
	        linkButton_link:'https://github.com/blh22buck/BryceLH',
	        linkButton_color:'mywebsite-info-button',
	        linkButton_text:'GitHub',
	        color:'#3F51B5',
	        hide_playstorebutton: true,
	        hide_github: false,
	        hide_moreinfo: true,
	        header_class:'my-website-card-header',
			moreImages: false,
	  	  img1: undefined
	  }
  ];
    $scope.portfolios_right = [
      {imagePath:'images/cardHeader_saferides_small_200.jpg',
      title:'Sacramento State Safe Rides',
      description:'Lead team in creation of Sacramento States first Uber like ride share application using Java, AngularJS, Spring, RESTful, MySQL, CSS, & HTML saving Sacramento State over $7,000 a year. Scrum SDLC. Launch date Sept 2017.',
      skills: 'Java, AngularJS, Spring, RESTful, MySQL, HTML5, CSS3, Grunt, Bower, NPM',
      alt:'asi SafeRides',
      github_link:'https://github.com/blh22buck/safe-rides',
      linkButton_display:'display',
      linkButton_link:'http://www.asi.csus.edu/programs/safe-rides/',
      linkButton_color:'asi-info-button',
      linkButton_text:'More Info',
      color:'#7e9f2a',
      hide_playstorebutton: true,
      hide_github: true,
      hide_moreinfo: false,
      header_class:'asi-card-header',
	  moreImages: true,
	  img1: 'images/scrnsht/current-ride.jpg'
      },
      {imagePath:'images/myWebsite_small_200.jpg',
      title:'Data Mining',
      description:'Mined & warehoused over 1,000 student records with Random Forest decision tree classification. Autonomous machine learning was used to predict scores based upon student facts with 91% accuracy.',
      skills: 'R, Python',
      alt:'Data Mining',
      githubButton_display:'display',
      github_link:'https://github.com/davidjudilla/csc177_data_mining_warehousing_student_performance',
      linkButton_display:'none',
      linkButton_link:'http://athena.ecs.csus.edu/~hairabeb/pdfs/Team6-Final-Report-DW-DM.pdf',
      linkButton_color:'mywebsite-info-button',
      linkButton_text:'Read Report',
      color:'#3F51B5',
      hide_playstorebutton: true,
      hide_github: false,
      hide_moreinfo: true,
      header_class:'my-website-card-header',
	  moreImages: true,
	  img1: 'images/scrnsht/mining-classification.jpg'
    },
      {imagePath:'images/sacState_200.png',
      title:'Data Mart Web App',
      description:'Designed data mart web app & RESTful server using Python, AngularJS, SQLite, CSS, and HTML5 to provide educational institutions ability to visually explore student life & grade performance with Google Charts',
      skills: 'Python, RESTful, AngularJS, JavaScript, SQLite, Google Charts, CSS, HTML5',
      alt:'Data mart web app',
      githubButton_display:'display',
      github_link:'https://github.com/davidjudilla/csc177_data_mining_warehousing_student_performance/tree/master/web-app',
      linkButton_display:'none',
      linkButton_link:'https://github.com/davidjudilla/csc177_data_mining_warehousing_student_performance/tree/master/web-app',
      linkButton_color:'mywebsite-info-button',
      linkButton_text:'GitHub',
      color:'#cfb668',
      hide_playstorebutton: true,
      hide_github: false,
      hide_moreinfo: true,
      header_class:'csus-rideshare-card-header',
	  moreImages: true,
	  img1: 'images/scrnsht/dm-line.jpg'
      }
    ];

    $(document).ready(function() {
    $("div#sidenav").removeClass("hidden");
});

/*Begin on tab1, and transition between tabs */
/*
	$scope.data = {selectedIndex: 1};

    $scope.next = function() {
      $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
    };
    $scope.previous = function() {
      $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
    };
	*/

});
