$("button").click(function(){
    var hours = $("#hours").val();
    var gender = $("#gender").val();
    
if (hours >= 12 && gender === "boy") {
     $("#title").html("Natsu");
     $("#answer").html("Your hot headed and doesn't think about the consequences of your actions.");
     $("#pic").attr("src", "https://cdn.shopify.com/s/files/1/1222/3190/products/Natsu_Dragneel_from_fairy_tail_anime_firey_poster_in_India_by_Silly_Punter.jpg?v=1473234819");
     
} else if (hours <= 12 && gender === "boy") {
     $("#title").html("Gray");
     $("#answer").html("You have a laid back personality, but will get serious when the time calls for it.");
     $("#pic").attr("src", "https://vignette.wikia.nocookie.net/fairytail/images/2/2b/Gray_in_Tartaros_arc.png/revision/latest?cb=20151025194126");
     
} else if (hours >=12 && gender === "girl") {
    $("#title").html("Lucy");
    $("#answer").html("You are a clever, kind and genuienly caring person.");
    $("#pic").attr("src", "https://www.nautiljon.com/images/perso/00/36/lucy_heartfillia_6063.jpg");
    
} else if (hours <=12 && gender === "girl") {
    $("#title").html("Erza");
    $("#answer").html("You are a strict person, often criticizing the bad behavior and bad habit of your friends.");
    $("#pic").attr("src", "https://vignette.wikia.nocookie.net/fairytail/images/b/b6/Erza_in_OVA_8.png/revision/latest/scale-to-width-down/300?cb=20161204123706");
    
} else {
    $("#title").html("Your alien");
    $("#answer").html("You didn't choose one of my options! Try again!");
    $("#pic").attr("src", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/19c67e03-4089-4af6-bcd7-6d0b90698ce9/da1zaeb-b778ad10-1458-40fa-9c6d-a55c84dbc310.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE5YzY3ZTAzLTQwODktNGFmNi1iY2Q3LTZkMGI5MDY5OGNlOVwvZGExemFlYi1iNzc4YWQxMC0xNDU4LTQwZmEtOWM2ZC1hNTVjODRkYmMzMTAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vgEEWADO2oCVy8qrk-T4Z-FhcmERfjDBy96OIDYvm_8");
    }
});
