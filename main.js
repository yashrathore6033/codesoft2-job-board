var findJob=document.getElementsByClassName('find-job')[0];
var postJob=document.getElementsByClassName('post-job')[0];
var findJobSection=document.getElementsByClassName('find-job-section')[0];
var postJobSection=document.getElementsByClassName('post-job-section')[0];
var view=true;
findJob.addEventListener('click',()=>{
    view=true;
    if(view){
        findJobSection.style.display="block";
        postJobSection.style.display="none";
        view=false;
    }
});
postJob.addEventListener('click',()=>{
    view=false;
    if(!view){
        findJobSection.style.display="none";
        postJobSection.style.display="block";
        view=true;
    }
});
function validation(){
    let searchJob=document.getElementsByClassName('search-job')[0].value;
    let locationJob=document.getElementsByClassName('location-job')[0].value;
    if(searchJob=="" || locationJob==""){
        alert("Fields are Empty");
    }
    else{
        if(searchJob.match(/^[a-zA-Z0-9]+$/)){
            if(locationJob.match(/^[a-zA-Z]+$/)){
                alert("Search Success!, It is Under Construction");
            }
            else{
                alert("Invalid Location");
            }
        }
        else{
            alert("Invalid Search");
        }
    }
}
document.getElementsByClassName('load-more-btn')[0].addEventListener('click',()=>{
    alert("Loading Under Contruction");
});
var totalList=document.querySelectorAll('.lists ul li button');
for(var i=0;i<totalList.length;i++){
    totalList[i].addEventListener('click',()=>{
        alert("Under Construction");
    });
}
var detailsButton=document.querySelectorAll('.job-details button');
for(var i=0;i<detailsButton.length;i++){
    detailsButton[i].addEventListener('click',()=>{
        alert('under Construction');
    });
}
window.addEventListener('resize',()=>{
    if(window.innerWidth<760){
        document.getElementsByClassName('job-contents')[0].style.gridTemplateColumns="1fr";
        document.getElementsByClassName('lists')[0].style.marginRight="90px";
    }
    else{
        document.getElementsByClassName('job-contents')[0].style.gridTemplateColumns="1fr 1fr";
        document.getElementsByClassName('lists')[0].style.marginRight="120px";
    }
});