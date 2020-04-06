var siteName=document.getElementById('siteName');
var siteUrl=document.getElementById('siteUrl');
var websites=[];

function addSites(){
    var website={
    websiteName:siteName.value,
    websiteUrl:siteUrl.value
    }
    websites.push(website);
    displayWebsites();
    clear();
}
var bookmarksResults=document.getElementById('bookmarksResults')

function displayWebsites(){
    var display="";
    for(var i=0; i<websites.length;i++){
        display+=`<div class="well"> <span>
      `+websites[i].websiteName+`</span><a href=`+websites[i].websiteUrl+`>
      <input type="button" class="btn-primary" value=vist>
      </a>
      <input type="button" class="btn-danger" value=delete id="deleteBtn" 
      onclick="deleteWebsite()">
        </div>`;
    }
    bookmarksResults.innerHTML=display;
}
function clear(){
  siteName.value="";
  siteUrl.value="";
}
function deleteWebsite(){
 var item= document.getElementById('deleteBtn');
 var parentDiv =item.parentElement;
 parentDiv.classList.add('none');
 
 
}
