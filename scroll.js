function clicker() 
{
    document.getElementsByClassName('_2pWZz')[0].click()
}
const element = document.getElementsByClassName('d_rQj')[0]
element.remove();

for(i=0;i<30;i++)
{
    const scrollingElement = (document.scrollingElement || document.body);
    scrollingElement.scrollTop = scrollingElement.scrollHeight;
    setTimeout(clicker, 10);
}