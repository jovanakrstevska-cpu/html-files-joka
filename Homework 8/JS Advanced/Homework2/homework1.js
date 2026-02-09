$('#loadData').click(function () {

    $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon?limit=10',
        method: 'GET',
        success: function (response) {

            //clears the old list
            $('#list').empty();

            //loops through each pokemon
            response.results.forEach(function (pokemon) {
                $('#list').append('<li>' + pokemon.name + '</li>');
            });
        },
        error: function () {
            console.log('Request failed');
        }
    });

});
