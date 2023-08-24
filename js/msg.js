const cname=document.getElementById("cname");
const cemail=document.getElementById("cemail");
const cphone=document.getElementById("cphone");
const cfeedback=document.getElementById("cfeedback");
const csubmit=document.getElementsByClassName("contact-form")[0];
const cform=document.getElementById('contact-form');
const cscriptURL = 'https://script.google.com/macros/s/AKfycbxF4n6ZhGXh2M3TyojJ6QNOkvxp0VvyRifwkWhpz9mSx2VynHgfTyEmVvLLIfD_2yh_/exec'

csubmit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("clicked");
    console.log(cform);
    let bdy=`
                <b>Name:</b>${cname.value}
                <br>
                <b>Email:</b>${cemail.value}
                <br>
                <b>Phone:</b>${cphone.value}
                <br>
                <b>Feedback:</b>${cfeedback.value}
                <br>
    `;
    Email.send({
        SecureToken : "869f282d-b735-4c97-95e6-a3d300869d3c",
        To : 'shreedentalclinicchimur@gmail.com',
        From : "tarunpal13982@gmail.com",
        Subject : "New query/feedback from "+ cname.value,
        Body : bdy
    })
    // .then(message => alert(message))
    ;
    fetch(cscriptURL, { method: 'POST', body: new FormData(cform)})
                .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                .catch(error => console.error('Error!', error.message));
    // location.reload();
});

const aname=document.getElementById("aname");
const aemail=document.getElementById("aemail");
const aphone=document.getElementById("aphone");
const adate=document.getElementById("adate");
const asubmit=document.getElementsByClassName("appointment-form")[0];
const aform=document.getElementById('appointment-form');
const ascriptURL = 'https://script.google.com/macros/s/AKfycbxlqktA9WM15sPor6yeOihbc0z6BkjfikjnDt74zd56FjoGITswr3rkEQvWK4GogWQOEw/exec'

asubmit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("clicked");
    console.log(aform);
    let bdy=`
                Book an appointment:
                <br>
                <b>Name:</b>${aname.value}
                <br>
                <b>Email:</b>${aemail.value}
                <br>
                <b>Phone:</b>${aphone.value}
                <br>
                <b>Date:</b>${adate.value}
                <br>
    `;
    Email.send({
        SecureToken : "869f282d-b735-4c97-95e6-a3d300869d3c",
        To : 'shreedentalclinicchimur@gmail.com',
        From : "tarunpal13982@gmail.com",
        Subject : "New Appointment of "+ aname.value,
        Body : bdy
    })
    // .then(message => alert(message))
    ; 
    fetch(ascriptURL, { method: 'POST', body: new FormData(aform)})
                .then(response => alert("Thanks for choosing us. Your Appointment has been booked sucessfully. "))
                .catch(error => console.error('Error!', error.message));
    
    // location.reload();
});