function validar(){
    var id = document.getElementById('id_name').value;
    var name = document.getElementById('movie_name').value;
    var cost = Number(document.getElementById('ticket_cost').value);
    var hour = document.getElementById('movie_hour').value;

    if (isNaN(id || cost)){
        alert('Rellene los campos correctamente');
        return false;
    }
    if (id == length || name == length || cost == length || hour == length){
        alert('Rellene todos los campos');
        return false;
    }

    const movie = {
        id_movie: id,
        name_movie: name,
        initial_cost:cost,
        total_cost: ((cost*0.16)+cost),
        hour_movie: hour
    }

    let LSmovie =  JSON.parse(localStorage.getItem('movie'))  || [] ;

    LSmovie.push(movie);

    localStorage.setItem('movie', JSON.stringify(LSmovie))

    return false;
}


function search(){
        const tickets = JSON.parse(localStorage.getItem('movie'))

        const ticketsFiltered =  tickets.filter(function(movie){
            return movie.total_cost <= 7500;
        });
    
        // Guardar eventos filtrados en el local storage
        localStorage.setItem('lowTickets', JSON.stringify(ticketsFiltered));
    
        console.log(localStorage.getItem('lowTickets'))
}
