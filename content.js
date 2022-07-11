var amount_node_list2 = document.getElementsByClassName('_3Hghg');
var amount_regex2 = /\d+.\d*/g;
var counter = 0;
var total_amount2 = 0
for (i = 0; i < amount_node_list2.length; i++) 
{
    counter++;
    current_amount = amount_node_list2[i].innerHTML;
    if (current_amount.match(amount_regex2)) 
    {
        integer_amount = parseInt(current_amount.match(amount_regex2)[0])
        total_amount2 += integer_amount;
    }
}
console.log("Total spent = ₹ ", total_amount2);
console.log("Total orders = ", counter);