let amount_node_list = document.getElementsByClassName('_3Hghg');
let amount_regex = /\d+.\d*/g;
var total_amount = 0
for (i = 0; i < amount_node_list.length; i++) 
{
    current_amount = amount_node_list[i].innerHTML;
    if (current_amount.match(amount_regex)) 
    {
        integer_amount = parseInt(current_amount.match(amount_regex)[0])
        total_amount += integer_amount;
    }
}
document.getElementsByClassName("_3RkS-")[0].innerHTML = "Total amount spent on Swiggy so far is ₹ "+total_amount;
document.getElementsByClassName("-dIwe")[0].innerHTML = "Total amount spent on Swiggy so far is ₹ "+total_amount;
// console.log("Total amount spent on Swiggy so far is ₹", total_amount);




// let p = document.getElementsByTagName('h1');
// let q = document.getElementsByTagName('p');
// for(i=0;i<p.length;i++)
// {
//     p[i].innerHTML="Manav";
// }
// for(i=0;i<q.length;i++)
// {
//     q[i].innerHTML="hello world";
// }