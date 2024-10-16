var produit=document.getElementsByClassName("box")
for(i=0;i<produit.length;i++){
    let btnplus=produit[i].children[4].children[2]
    let prixUnit=produit[i].children[2].children[1]
    let totalUnit=produit[i].children[3].children[1]
    let btnmoins=produit[i].children[4].children[0]
    let icon1=produit[i].children[5].children[0].children[0]
    let del=produit[i].children[5].children[1].children[0]
    let box=produit[i]
    let num=produit[i].children[4].children[1]
    let qty=parseInt(num.innerText)
    let prixUnitaire=parseInt(prixUnit.innerText)

    
    

    btnplus.addEventListener("click",function(){
       qty++;
       num.innerHTML=qty
       totalUnit.innerHTML=prixUnitaire*qty
       updateTotalCommande()
    })
    btnmoins.addEventListener("click",function(){
       if (qty>0) {
        qty--;
       } 
        num.innerHTML=qty
        totalUnit.innerHTML=prixUnitaire*qty
        updateTotalCommande()
    })
    icon1.addEventListener("click",function(){
    
        if (icon1.style.color =="red") {
            icon1.style.color = "grey"
        }
        else{
            icon1.style.color = "red"
        }
        
    })
 
 if (box) {
    del.addEventListener("click",function (){
    box.remove()
    })
}
}


var btnhvar1 = document.getElementsByClassName('icon3');
function updateTotalCommande() {
    let totalCommande = 0;
    for (let i = 0; i < produit.length; i++) {
        let totalUnit = produit[i].children[3].children[1];
        totalCommande += parseInt(totalUnit.innerText);
    }
    document.getElementById("tyu").innerHTML = totalCommande;
}