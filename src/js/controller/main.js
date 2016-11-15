const SERVER_URL = 'https://class-server.herokuapp.com/collections/Jeremy-contactInfo/';

function Infocontroller ($scope,$http){
	$scope.Messages = [];
	$scope.errors = {};

	function init (){
		$http.get(SERVER_URL).then(function (page) {
			console.log(page.data);
			$scope.Messages = page.data;

		});

	};
    
    init();

  $scope.validateName = function (name){
  	console.log(name)
      if (name === ''){

          $scope.errors.name = "Name cannot be left empty"
      }else{
      	$scope.errors.name =''
      }
  };

  $scope.validateEmail=function(emial){
  	if (emial ===''){

  		$scope.errors.email = "Email cannot be left empty"
	}else{

		   $scope.errors.email=''
         }
  }

$scope.validateWeb=function(Web){
  	if (Web ===''){

  		$scope.errors.Web = "Website cannot be left empty"
	}else{

		   $scope.errors.Web=''
         }
  }



    $scope.tallyInfo=function(message){
    	console.log(message)
       	$http.post(SERVER_URL,message).then(function(page){
       		let message = page.data;
       		$scope.Messages.push(message);
       		console.log($scope.Messages)
       	});
    }
};


Infocontroller.$inject = ['$scope', '$http'];
export { Infocontroller };