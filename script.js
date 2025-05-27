
 const link = document.querySelectorAll('strong');

function highlight() {
    //Write your code here
 
const boldWords = document.querySelectorAll('strong');
    boldWords.forEach(bold => {
        bold.style.color = 'rgb(0, 128, 0)'; 
    });


}


function return_normal() {
    //Write your code here
	 const boldWords = document.querySelectorAll('strong');
    boldWords.forEach(bold => {
        bold.style.color = 'rgb(0, 0, 0)'; 
    });

    
}



