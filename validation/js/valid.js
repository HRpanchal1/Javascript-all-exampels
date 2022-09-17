function validation()
{
    if(document.frm.name.value=="")
    {
        // alert('Please enter your firstname')
        document.getElementById("name").innerHTML="Please enter your firstname";
        document.frm.name.focus();
        return false;
    }

    var fnm=/^[A-Za-z]+$/;
    if(!fnm.test(document.frm.name.value))
    {
        alert('Please enter your firstname only alphbetic character')
        document.frm.name.focus();
        return false;
    }

    var e= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!e.test(document.frm.email.value))
    {
        alert('Please enter your valid email address')
        document.frm.email.focus();
        return false;
    }

   
    
    if(document.frm.mobile.value=="")
    {
        alert('Please enter your Mobile')
        document.frm.mobile.focus();
        return false;
    }

    if(document.frm.subject.value=="")
    {
        alert('Please enter your subject')
        document.frm.subject.focus();
        return false;
    }
    if(document.frm.comment.value=="")
    {
        alert('Please enter your comment')
        document.frm.comment.focus();
        return false;
    }
}