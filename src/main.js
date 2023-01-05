function getFood(id) {
    $.ajax({
        url: "https://spoonacular.com/food-api",
        dataType: "json",
        type: "GET",
        success: function(datas) {
            datas.data.forEach(item =>{
                console.log(item)
            });
        }
    });

}


