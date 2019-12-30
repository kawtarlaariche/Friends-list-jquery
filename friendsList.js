
$(function () {


    var friends = [
        { name: "sara", img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", isOnline: true },
        { name: "kalthoum", img: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", isOnline: true },
        { name: "said", img: "https://img2.goodfon.com/wallpaper/nbig/b/74/florida-miami-florida-mayami-7614.jpg", isOnline: false },
        { name: "kawtar", img: "https://img2.goodfon.com/wallpaper/nbig/b/74/florida-miami-florida-mayami-7614.jpg", isOnline: true },
        { name: "malika", img: "https://img2.goodfon.com/wallpaper/nbig/b/74/florida-miami-florida-mayami-7614.jpg", isOnline: true }
    ]

    for (i = 0; i < friends.length; i++) {
          
        var blabla="status"
        
        if(friends[i].isOnline == true) {
            color = "green"
        } else {
            color = "gray"
        }

        $("#friendsList").append(
            '<div class="friendListItem" style="display: block; border: solid 1px rgba(71, 71, 71, 0.26); width: 100%; height: 60px;">'
            + '<table style="width: 100%;">'
            + '  <tr>'
            + ' <td style="width: 30%">'
            + '  <img id="image" style="object-fit: cover; border-radius:50%;width: 50px; height: 50px;"src="'+friends[i].img +'" />'
            + '</td>'
            + ' <td style="width:55%">'
            + '<span>'+friends[i].name+'</span>'
            + '</td>'
            + ' <td style="width: 10%" >'
            + '<div id="online" style="background-color: '+color+'; object-fit: cover; border-radius:50%;width: 10px; height: 10px;">'
            + '</div>'
            + '</td >'
            + '</tr >'
            + '</table >'
            + '</div >')
      
            
    }
    // var list = ["aimad", "ali", "ahmed", "mounir", "karim", "hassan", "kawtar", "said", "smail", "sara"]


    $('#searchFiendName').on('keyup change', function () {
        friendName = $(this).val();

        $("#friendsList").html("")

        for (i = 0; i < friends.length; i++) {
            var subname = friends[i].name.substr(0, friendName.length);
            if (subname == friendName) {
                if(friends[i].isOnline == true) {
                    color = "green"
                } else {
                    color = "gray"
                }

                $("#friendsList").append(
                    '<div class="friendListItem" style="display: block; border: solid 1px rgba(71, 71, 71, 0.26); width: 100%; height: 60px;">'
                    + '<table style="width: 100%;">'
                    + '  <tr>'
                    + ' <td style="width: 30%">'
                    + '  <img id="image" style="object-fit: cover; border-radius:50%;width: 50px; height: 50px;"src="'+friends[i].img +'" />'
                    + '</td>'
                    + ' <td style="width:55%">'
                    + '<span>'+friends[i].name+'</span>'
                    + '</td>'
                    + ' <td style="width: 10%" >'
                    + '<div id="online" style="background-color: '+color+'; object-fit: cover; border-radius:50%;width: 10px; height: 10px;">'
                    + '</div>'
                    + '</td >'
                    + '</tr >'
                    + '</table >'
                    + '</div >')
            }
        }
        // $("#friendsList").append("<p><h1>"+name"</h1></p>")

    })
















})



