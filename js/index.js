angular
      .module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
      .controller('AppCtrl', function($scope, $timeout, $mdSidenav, $mdDialog){

/**************Colors *************/
var COLORS = ['#ffebee', '#ffcdd2', '#ef9a9a', '#e57373', '#ef5350', '#f44336',
'#e53935', '#d32f2f', '#c62828', '#b71c1c', '#ff8a80', '#ff5252', '#ff1744',
'#d50000', '#f8bbd0', '#f48fb1', '#f06292', '#ec407a', '#e91e63', '#d81b60',
'#c2185b', '#ad1457', '#880e4f', '#ff80ab', '#ff4081', '#f50057', '#c51162',
'#e1bee7', '#ce93d8', '#ba68c8', '#ab47bc', '#9c27b0', '#8e24aa', '#7b1fa2',
'#4a148c', '#ea80fc', '#e040fb', '#d500f9', '#aa00ff', '#ede7f6', '#d1c4e9',
'#b39ddb', '#9575cd', '#7e57c2', '#673ab7', '#5e35b1', '#4527a0', '#311b92',
'#b388ff', '#7c4dff', '#651fff', '#6200ea', '#c5cae9', '#9fa8da', '#7986cb',
'#5c6bc0', '#3f51b5', '#3949ab', '#303f9f', '#283593', '#1a237e', '#8c9eff',
'#536dfe', '#3d5afe', '#304ffe', '#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6',
'#42a5f5', '#2196f3', '#1e88e5', '#1976d2', '#1565c0', '#0d47a1', '#82b1ff',
'#448aff', '#2979ff', '#2962ff', '#b3e5fc', '#81d4fa', '#4fc3f7', '#29b6f6',
'#03a9f4', '#039be5', '#0288d1', '#0277bd', '#01579b', '#80d8ff', '#40c4ff',
'#00b0ff', '#0091ea', '#e0f7fa', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da',
'#00bcd4', '#00acc1', '#0097a7', '#00838f', '#006064', '#84ffff', '#18ffff',
'#00e5ff', '#00b8d4', '#e0f2f1', '#b2dfdb', '#80cbc4', '#4db6ac', '#26a69a',
'#009688', '#00897b', '#00796b', '#00695c', '#a7ffeb', '#64ffda', '#1de9b6',
'#00bfa5', '#e8f5e9', '#c8e6c9', '#a5d6a7', '#81c784', '#66bb6a', '#4caf50',
'#43a047', '#388e3c', '#2e7d32', '#1b5e20', '#b9f6ca', '#69f0ae', '#00e676',
'#00c853', '#f1f8e9', '#dcedc8', '#c5e1a5', '#aed581', '#9ccc65', '#8bc34a',
'#7cb342', '#689f38', '#558b2f', '#33691e', '#ccff90', '#b2ff59', '#76ff03',
'#64dd17', '#f9fbe7', '#f0f4c3', '#e6ee9c', '#dce775', '#d4e157', '#cddc39',
'#c0ca33', '#afb42b', '#9e9d24', '#827717', '#f4ff81', '#eeff41', '#c6ff00',
'#aeea00', '#fffde7', '#fff9c4', '#fff59d', '#fff176', '#ffee58', '#ffeb3b',
'#fdd835', '#fbc02d', '#f9a825', '#f57f17', '#ffff8d', '#ffff00', '#ffea00',
'#ffd600', '#fff8e1', '#ffecb3', '#ffe082', '#ffd54f', '#ffca28', '#ffc107',
'#ffb300', '#ffa000', '#ff8f00', '#ff6f00', '#ffe57f', '#ffd740', '#ffc400',
'#ffab00', '#fff3e0', '#ffe0b2', '#ffcc80', '#ffb74d', '#ffa726', '#ff9800',
'#fb8c00', '#f57c00', '#ef6c00', '#e65100', '#ffd180', '#ffab40', '#ff9100',
'#ff6d00', '#fbe9e7', '#ffccbc', '#ffab91', '#ff8a65', '#ff7043', '#ff5722',
'#f4511e', '#e64a19', '#d84315', '#bf360c', '#ff9e80', '#ff6e40', '#ff3d00',
'#dd2c00', '#d7ccc8', '#bcaaa4', '#795548', '#d7ccc8', '#bcaaa4', '#8d6e63',
'#eceff1', '#cfd8dc', '#b0bec5', '#90a4ae', '#78909c', '#607d8b', '#546e7a',
'#cfd8dc', '#b0bec5', '#78909c'];

var SKILLS = [
{type: 'Languages', skill: 'PHP'},
{type: 'Languages', skill: 'Java'},
{type: 'Languages', skill: 'C'},
{type: 'Languages', skill: 'C++'},
{type: 'Languages', skill: 'JavaScript'},
{type: 'Languages', skill: 'MySQL'},
{type: 'Languages', skill: 'Python'},
{type: 'Languages', skill: 'LESS'},
{type: 'Languages', skill: 'CSS'},
{type: 'Languages', skill: 'HTML'},
{type: 'Languages', skill: 'XML'},
{type: 'Languages', skill: 'AngularJS'},
{type: 'Languages', skill: 'Scheme'},
{type: 'Languages', skill: 'R'},

{type: 'Tools', skill: 'Photoshop'},
{type: 'Tools', skill: 'Illustrator'},
{type: 'Tools', skill: 'Visio'},
{type: 'Tools', skill: 'Git'},
{type: 'Tools', skill: 'Linux'},
{type: 'Tools', skill: 'Spring'},
{type: 'Tools', skill: 'Android Studio'},
{type: 'Tools', skill: 'Eclipse'},
{type: 'Tools', skill: 'RESTful'},

{type: 'Methodologies', skill: 'Scrum'},
{type: 'Methodologies', skill: 'Agile'},
{type: 'Methodologies', skill: 'Iterative'}

  ];



/*SideNav toggler */
            $scope.toggleLeft = buildToggler('left');
            $scope.toggleRight = buildToggler('right');
            var compId = "left";
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
              for (let i = a.length; i; i--) {
                  let j = Math.floor(Math.random() * i);
                  [a[i - 1], a[j]] = [a[j], a[i - 1]];
              }
          }
this.tiles = (function() {
            var tiles = [];
            shuffle(SKILLS);
            var skillLength = SKILLS.length;
            for (var i = 0; i < skillLength; i++) {
              //var randomI = Math.floor(Math.random() * skillLength);
              tiles.push({
                color: randomColor(),
                colspan: randomRow(),
                rowspan: randomRow(),
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
      {lang: 'Python'},
      {lang: 'CSS'},
      {lang: 'LESS'},
      {lang: 'HTML'},
      {lang: 'XML'},
      {lang: 'AngularJS'},
      {lang: 'Scheme'},
      {lang: 'R'}
    ];
    $scope.tools = [
      {tool: 'Git'},
      {tool: 'Linux'},
      {tool: 'Visio'},
      {tool: 'Photoshop'},
      {tool: 'Illustrator'},
      {tool: 'Spring'},
      {tool: 'Android Studio'},
      {tool: 'Eclipse'},
      {tool: 'RESTful'}
    ];
    $scope.methods = [
      {method: 'Scrum'},
      {method: 'Agile'},
      {method: 'Iterative'}
    ];
/* Portfolios Page */
    $scope.portfolios_left = [
      {imagePath:'images/cardHeader_saferides_small_200.jpg',
      title:'ASI SafeRides',
      description:'Currently developing App with small team using Scrum with Agile. Mobile dispatching system used to find student or faculty a safe ride home. Deliverable date May 2017',
      skills: 'JS, PHP, REST, Spring, MySQL, HTML, CSS',
      alt:'asi SafeRides',
      githubButton_display:'display',
      github_link:'https://github.com/blh22buck/safe-rides',
      linkButton_display:'display',
      linkButton_link:'http://www.asi.csus.edu/programs/safe-rides/',
      linkButton_color:'#7e9f2a',
      linkButton_text:'More Info',
      color:'#7e9f2a'
      },
      {imagePath:'images/dogCatcher_small_200.jpg',
      title:'Dog Catcher',
      description:'2D Mobile cross platform game. Includes touch screen controls, scoreview, and mapview. Based on observer design pattern. Written with Codename One.',
      skills: 'Codename One, Java',
      alt:'Dog in net',
      githubButton_display:'display',
      github_link:'https://github.com/blh22buck/DogCatcher_CodenameOne',
      linkButton_display:'hidden',
      linkButton_link:'',
      linkButton_color:'',
      linkButton_text:'',
      color:'#a15a2c'
      },
      {imagePath:'images/gtaQuickCodes_small_200.jpg',
      title:'GTA Codes Quick',
      description:'Currently developing a App in my own time to be deployed. Very fast, light, and customizable mobile app. Provides GTA codes quickly and up to date.',
      skills: 'Java, XML, Android Development',
      alt:'GTA Code Quick',
      githubButton_display:'display',
      github_link:'https://github.com/blh22buck/GTA_QuickCodes',
      linkButton_display:'hidden',
      linkButton_link:'',
      linkButton_color:'',
      linkButton_text:'',
      color:'#F44336'
      }
    ];
    $scope.portfolios_right = [
      {imagePath:'images/myWebsite_small_200.jpg',
      title:'My Website',
      description:'My own personal webapp built from scratch for the fun of learning AngularJS. Designed aesthetically with a passion for Google’s Material Design.',
      skills: 'JS, AngularJS, Node.js, CSS, HTML',
      alt:'Bryce Hairabedian Website',
      githubButton_display:'display',
      github_link:'https://github.com/blh22buck/BryceLH',
      linkButton_display:'hidden',
      linkButton_link:'',
      linkButton_color:'',
      linkButton_text:'',
      color:'#3F51B5'
    },
      {imagePath:'images/sacState_200.png',
      title:'CSUS Ride Share',
      description:'Lead team of 5 in development of Android App. CSUS Students willing to share rides to & from campus. App was reviewed by CSUS VP of Student Affairs.',
      skills: 'Java, PHP, MySQL, XML, Android Development',
      alt:'CSUS Ride Share',
      githubButton_display:'display',
      github_link:'https://github.com/blh22buck/SacStateRideshare',
      linkButton_display:'hidden',
      linkButton_link:'',
      linkButton_color:'',
      linkButton_text:'',
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
