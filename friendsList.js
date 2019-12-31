var friends = [
    { name: "sara", img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", isOnline: true },
    { name: "kalthoum", img: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", isOnline: true },
    { name: "said", img: "https://img2.goodfon.com/wallpaper/nbig/b/74/florida-miami-florida-mayami-7614.jpg", isOnline: false },
    { name: "kawtar", img: "https://img2.goodfon.com/wallpaper/nbig/b/74/florida-miami-florida-mayami-7614.jpg", isOnline: true },
    { name: "malika", img: "https://img2.goodfon.com/wallpaper/nbig/b/74/florida-miami-florida-mayami-7614.jpg", isOnline: true }
]



var friendListItemHtml = function(friend) {
    if(friend.isOnline == true) {
        color = "green"
    } else {
        color = "gray"
    }

    
     var html = '<div class="friendListItem" style="display: block; border: solid 1px rgba(71, 71, 71, 0.26); width: 100%; height: 60px;">'
        + '<table style="width: 100%;">'
        + '  <tr>'
        + ' <td style="width: 30%">'
        + '  <img id="image" style="object-fit: cover; border-radius:50%;width: 50px; height: 50px;"src="'+friend.img +'" />'
        + '</td>'
        + ' <td style="width:55%">'
        + '<span>'+friend.name+'</span>'
        + '</td>'
        + ' <td style="width: 10%" >'
        + '<div id="online" style="background-color: '+color+'; object-fit: cover; border-radius:50%;width: 10px; height: 10px;">'
        + '</div>'
        + '</td >'
        + '</tr >'
        + '</table >'
        + '</div >'
  
    return html
}

var initializeList = function () {

    for (i = 0; i < friends.length; i++) {
          $("#friendsList").append(friendListItemHtml(friends[i]))         
    }

    console.log("list initialized !!")
}


// On ready
$(function () {

 
    initializeList();

    // event keyup change
    $("#searchFiendName").on("keyup change", function () {
        console.log("keyup  change  fired !")
        friendName = $(this).val();
        
        $("#friendsList").html("")

        for (i = 0; i < friends.length; i++) {
            var subname = friends[i].name.substr(0, friendName.length);
            if (subname == friendName) {

                $("#friendsList").append(friendListItemHtml(friends[i])) 

            }
        }

    })


  

    




})



