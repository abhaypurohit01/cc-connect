/* $(document).ready(function() {
    $('#example').DataTable();
} );
 */


/* $.notify({
	icon: 'la la-bell',
	title: 'Bootstrap notify',
	message: 'Turning standard Bootstrap alerts into "notify" like notifications',
},{
	type: 'success',
	placement: {
		from: "bottom",
		align: "right"
	},
	time: 1000,
}); */

// monthlyChart



// salesChart

// chart-end

/* 
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
}); */

// Bar Chart



// Bar Chart

// Bar Chart


// Bar Chart

window.onscroll = function() {myFunction()};

var header = document.getElementById("headertop");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}