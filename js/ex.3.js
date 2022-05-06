var tabbuttons=document.querySelectorAll('button');
var tabpanels=document.querySelectorAll('.box1');

function showPanel(panelIndex,colorCode){
tabbuttons.forEach(function(node)
{
    node.style.backgroundColor="";
});
tabbuttons[panelIndex].style.backgroundColor=colorCode;

tabpanels.forEach(function(node)
{
    node.style.display="none";
    node.style.backgroundColor="";
    
});
tabpanels[panelIndex].style.display="block";
tabpanels[panelIndex].style.backgroundColor=colorCode;
}
// showPanel(0,'#FFFF00');