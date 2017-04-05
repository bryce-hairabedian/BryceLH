angular
      .module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
      .controller('AppCtrl', function($scope, $timeout, $mdSidenav, $mdDialog){
  var vm = this;
  vm.loadsidenav = false;
/**************Colors *************/

var COLORS = [ '#f22a26', '#f44f1d', '#f75a11', '#f77810', '#ffa30f', '#ffc30f', '#ffeb0f', '#e3fc07', '#a2fc07', '#2be506', '#20f948', '#04f480', '#04f4b0', '#04f4df', '#04d0f4', '#0490e8', '#0440e8', '#1304e8', '#6d00fc', '#b000fc', '#8401bc', '#ca02f7', '#72018c', '#f702e2', '#910084', '#f2009d', '#91015e', '#f9025d', '#137f16', '#ed0219'
];

var SKILLS = [
{type: 'Languages', skill: 'Java'},
{type: 'Languages', skill: 'C'},
{type: 'Languages', skill: 'C++'},
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
{type: 'Tools', skill: 'Drupal'},

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
          function shuffle(a) {
              for (var i = a.length; i; i--) {
                  var j = Math.floor(Math.random() * i);
                  a[i - 1], a[j] = a[j], a[i - 1];
              }
          }
this.tiles = (function() {
            var tiles = [];
            shuffle(SKILLS);
            shuffle(COLORS);
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
        }




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

/* Skills page */
    $scope.languages = [
      {lang: 'Java'},
      {lang: 'C'},
      {lang: 'C++'},
      {lang: 'JavaScript'},
      {lang: 'PHP'},
      {lang: 'MySQL'},
      //{lang: 'Python'},
      {lang: 'CSS'},
      {lang: 'LESS'},
      {lang: 'HTML5'},
      {lang: 'XML'},
      {lang: 'AngularJS'},
    ];
    $scope.tools = [
      {tool: 'Git'},
      {tool: 'Linux'},
      {tool: 'Visio'},
      {tool: 'Illustrator'},
      {tool: 'PSD'},
      {tool: 'Spring'},
      //{tool: 'Eclipse'},
      {tool: 'RESTful'},
      {tool: 'Drupal'},
      {tool: 'Node.JS'},
      {tool: 'Android Studio'}
    ];
    $scope.methods = [
      {method: 'Scrum'},
      {method: 'Agile'},
      {method: 'Iterative'}
    ];
/* Portfolios Page */
    $scope.portfolios_left = [
      {imagePath:'images/red_dead_card_header_img.png',
      title:'Red Dead QuickCodes',
      description:'Android application providing all cheats and codes for Red Dead series. '
      +'Get all cheats for Red Dead and soon Red Dead 2 once released.',
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
      header_class:'red-dead-card-header'
      },
      {imagePath:'images/dogCatcher_small_200.jpg',
      title:'Dog Catcher',
      description:'2D Mobile cross platform game. Includes touch screen controls, scoreview, and mapview. Based on observer design pattern. Written with Codename One.',
      skills: 'Codename One, Java',
      alt:'Dog in net',
      githubButton_display:'display',
      github_link:'https://github.com/blh22buck/DogCatcher_CodenameOne',
      linkButton_display:'none',
      linkButton_link:'',
      linkButton_color:'dog-catcher-info-buton',
      linkButton_text:'',
      color:'#a15a2c',
      hide_playstorebutton: true,
      hide_github: false,
      hide_moreinfo: true,
      header_class:'dog-catcher-card-header'
      },
      {imagePath:'images/gtaQuickCodes_small_200.jpg',
      title:'GTA QuickCodes',
      description:'Currently developing a App in my own time to be deployed. Very fast, light, and customizable mobile app. Provides GTA codes quickly and up to date.',
      skills: 'Java, XML, Android Development',
      alt:'GTA Code Quick',
      githubButton_display:'display',
      github_link:'https://github.com/blh22buck/GTA_QuickCodes',
      linkButton_display:'none',
      linkButton_link:'',
      linkButton_color:'gta-quickcodes-info-button',
      linkButton_text:'',
      color:'#F44336',
      hide_playstorebutton: true,
      hide_github: false,
      hide_moreinfo: true,
      header_class:'gta-quickcodes-card-header'
      }
    ];
    $scope.portfolios_right = [
      {imagePath:'images/cardHeader_saferides_small_200.jpg',
      title:'ASI SafeRides',
      description:'Currently developing App with small team using Scrum with Agile. Mobile dispatching system used to find student or faculty a safe ride home. Deliverable date May 2017',
      skills: 'JS, PHP, REST, Spring, MySQL, HTML, CSS',
      alt:'asi SafeRides',
      githubButton_display:'none',
      github_link:'https://github.com/blh22buck/safe-rides',
      linkButton_display:'display',
      linkButton_link:'http://www.asi.csus.edu/programs/safe-rides/',
      linkButton_color:'asi-info-button',
      linkButton_text:'More Info',
      color:'#7e9f2a',
      hide_playstorebutton: true,
      hide_github: true,
      hide_moreinfo: false,
      header_class:'asi-card-header'
      },
      {imagePath:'images/myWebsite_small_200.jpg',
      title:'My Website',
      description:'My own personal webapp built from scratch for the fun of learning AngularJS. Designed aesthetically with a passion for Google Material Design.',
      skills: 'JS, AngularJS, Node.js, CSS, HTML',
      alt:'Bryce Hairabedian Website',
      githubButton_display:'display',
      github_link:'https://github.com/blh22buck/BryceLH',
      linkButton_display:'none',
      linkButton_link:'',
      linkButton_color:'mywebsite-info-button',
      linkButton_text:'GitHub',
      color:'#3F51B5',
      hide_playstorebutton: true,
      hide_github: false,
      hide_moreinfo: true,
      header_class:'my-website-card-header'
    },
      {imagePath:'images/sacState_200.png',
      title:'CSUS Ride Share',
      description:'Lead team of 5 in development of Android App. CSUS Students willing to share rides to & from campus. App was reviewed by CSUS VP of Student Affairs.',
      skills: 'Java, PHP, MySQL, XML, Android Development',
      alt:'CSUS Ride Share',
      githubButton_display:'display',
      github_link:'https://github.com/blh22buck/SacStateRideshare',
      linkButton_display:'none',
      linkButton_link:'',
      linkButton_color:'',
      linkButton_text:'',
      color:'#cfb668',
      hide_playstorebutton: true,
      hide_github: true,
      hide_moreinfo: true,
      header_class:'csus-rideshare-card-header'
      }
    ];

    $(document).ready(function() {
    $("div#sidenav").removeClass("hidden");
});

/*Begin on tab1, and transition between tabs */
    $scope.data = {selectedIndex: 0};

    $scope.next = function() {
      $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
    };
    $scope.previous = function() {
      $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
    };
});
