const SERVER_URL = 'https://class-server.herokuapp.com/collections/Jeremy-contactInfo/';

function Infocontroller ($scope,$http){
	$scope.Messages = [];
	$scope.errors = {
		name:"Name is Requried",
		emial:"Email must contain an @",
		Web:"Website cannot be left empty"

	};

	function init (){
		$http.get(SERVER_URL).then(function (page) {
			console.log(page.data);
			$scope.Messages = page.data;

		});

	};
    
    init();

  $scope.validateName = function (name){
  	// console.log(name)
      if (name === ''){

          $scope.errors.name = "Name cannot be left empty"
      }else{
      	$scope.errors.name =''
      }
  };

  $scope.validateEmail=function(email){
  	if (!email.startWith('http')){
       
       $scope.errors.email = "Email cannot be left empty"
       
       return false;
     }

  		if(email===''){
        $scope.errors.email='';
         };
         return true;
       };
  

$scope.validateWeb=function(Web){
  	if (!Web.startWith('http')){

  		$scope.errors.Web = "Website must start with http://"
	 return false;
  }
       
      if(Web ===''){
		    $scope.errors.Web='';
         }
         return true;
      };
  
$scope.validateArea=function(Area){
  	if (Area ===''){

  		$scope.errors.Area = "Message cannot be left empty"
	}else{

		   $scope.errors.Area=''
         }
  }


    $scope.tallyInfo=function(message){
    	// console.log(message)
       	$http.post(SERVER_URL,message).then(function(page){
       		let message = page.data;
       		$scope.Messages.push(message);
       		// console.log($scope.Messages)
       	});
    }
    $scope.remove = function (message) {
    	console.log(message._id, $scope.Messages.length)
        $http.delete(SERVER_URL + message._id).then(function (page) {

        	console.log("response data: ", page)
            $scope.Messages = $scope.Messages.filter(function (x) {
                return x._id !== message._id;
           	});
        })
    }
}

Infocontroller.$inject = ['$scope', '$http'];
export { Infocontroller };