$(document).ready(function(){
    $("*").on("click",function(e){
        
        console.log(e.target)
        console.log("The event type is: " + e.type)
        console.log("x co-ordinate of the event " + e.pageX);
        console.log("x co-ordinate of the event " + e.pageY)
        e.stopPropagation()
    })
})











// $(function(){
    
    
    
// })

// $(window).load(function(){
    
    
// })


// $("#lead-banner").dblclick(function(){
//     alert("you click me");
    
// })







// var myLis = $("#points-of-sale li");

// myLis.on("click", function(){
    
//     $(this).css({"background" : "pink"})
    
//     myLis.off("click")
    
    
// })



// $("#social-nav").css({
//     "top": "-400px",
//     "left":"1500px",
//     "opacity": "0.5",
//     "border-top": "4px solid red"
// });











// var button = $("#lead-banner a");

// button[0].onclick = function(){
//     $("#points-of-sale").toggleClass("open");
//     return false;
// }








// $("header .wrapper").removeClass("wrapper");
// $("header > div").addClass("wrapper");






// $("#social-nav").css({
//     "top": "-400px",
//     "left":"1500px",
//     "opacity": "0.5",
//     "border-top": "4px solid red"
// })




// $(".button").empty();
// $("#point-of-sale").empty()
// $("#contact img").remove()









// var wrapper ="<div class = 'wrapper'>"
// var button = $(".button");
// var wrapped = true

// button[0].onclick = function(){
//     if(wrapped){
//         $("section").unwrap();
//         wrapped = false;
//         button.text("Wrap");
//     } else { 
//         $("section").wrapAll(wrapper);
//         wrapped = true;
//         button.text("UnWrap");
        
//     }
// }







// $("section").wrap("<div>")
// $("section").unwrap()
// $("section").wrapAll("<div>")

// var tweet = "<div style='margin: 20px 0; padding: 10px; background: #eee'> The big fight live: Rams vs Cheese!</div>"

// // $("#tweets div p").before(tweet)
// // $("#tweets div").append(tweet)
// // $("#tweets div p").after(tweet)
// // $("#tweets div p").html(tweet)






// // $("#contact-methods").css({border: "2px solid red"}).next().css









// ({border: "2px solid green"}).closet("section").css({border: "2px solid blue"});



// // // // $('#contact-methods').next().css({border: "3px solid red"});
// // // $("#social-nav").prev().css({border: "3px solid pink"});
// // // $(".banner-title").parent().css({border: "3px solid pink"})
// // // $("#social-nav").children().css({border: "3px solid green"})

// // // $("#contact").find(".facebook").css({border: " 3px solid green "});

// // $("#social-nav").closest(".wrapper").css({border:"3px solid orange"})




























// // // // $("header nav li:first").css({border: "2px solid red"})
// // // $("header nav li: last").css({border: "2px solid red"})
// // // $("#contact ul:first-child").css({border: "2px solid red"});
// // // $("#contact ul:last-child").css({border: "2px solid red"});

// // // $("header nav li:even").css({border: "2px solid blue"})
// // // $("header nav li:odd").css({border: "2px solid yellow"})

// // // $("section:not('#contact')").css({border: "2px solid green"});
// // // $("#social-nav li:li(3)").css({border: "2px solid blue"})
// // // $("#social-nav li:gt(2)").css({border: "2px solid blue"});

// // // $("img[alt]").css({border: "2px solid pink"})
// //   $("img[alt=quote]").css({border: "3px solid purple"})