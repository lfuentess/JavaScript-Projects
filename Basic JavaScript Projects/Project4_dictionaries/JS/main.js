function my_Dictionary(){
    var Cars = {  // defining Dictionary and Keys-values
        Model:"HR-V",
        Color:"Black",
        Brand:"Honda",
        Doors:5,
        Engine:"Gas"
    };
    delete Cars.Engine; // remove key Engine from dictionary
    document.getElementById("Dictionary").innerHTML = Cars.Brand +" - "+ Cars.Engine;
}