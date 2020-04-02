// ricreo lo slider come fatto questa mattina (o da zero, o partendo dall’html [ref sempre mio repo su github]);
// faccio funzionare il tracciamento dei pallini anche in prev (stamattina lo abbiam fatto solo in next);
// creo anche la possibilità di poter navigare cliccando anche sui pallini (quindi se clicco sul pallino 3, l’img vista è la 3 e il pallino 3 rimane rosso);
// cerco di fare un refactoring del mio codice per renderlo il più chiaro, lineare, mantenibile e secco possibile (dobbiamo iniziare a farlo, e quindi prima del bonus).


$(document).ready(function(){

// creo funzione next per far cambiare le img nel carousel

var next = $(".fa-angle-right");
var prev = $(".fa-angle-left");
var thisPln = $(".pallini .fas");
var contImg = $(".imgs img");

thisPln.click(function(){

  thisPln.removeClass("active");
  $(this).addClass("active");

  if ($(".pallini .uno").hasClass("active")){
    $(".imgs img").removeClass("active")
    $(".imgs .uno").addClass("active")
  } else if ($(".pallini .due").hasClass("active")){
    $(".imgs img").removeClass("active")
    $(".imgs .due").addClass("active")
  } else if ($(".pallini .tre").hasClass("active")){
    $(".imgs img").removeClass("active")
    $(".imgs .tre").addClass("active")
  } else if ($(".pallini .quattro").hasClass("active")){
    $(".imgs img").removeClass("active")
    $(".imgs .quattro").addClass("active")
  }

// VOLEVO FARE UN CICLO MA NON SAPEVO COME FARE


console.log($(this).css("color"));
})

next.click(function(){
  nextImg();
})

prev.click(function(){
  prevImg();
})



function prevImg(){
  // trovo qual'è la classe attivata
  var activeImg = $(".imgs img.active");
  var activePln = $(".pallini .active")
  // rimuovo l'attivazione
  activeImg.removeClass("active");
  activePln.removeClass("active");
  //creo la condizione per far apparire l'immagine dopo
  activeImg.prev().addClass("active");
  activePln.prev().addClass("active");

  if (activeImg.hasClass("first")){
    $(".imgs img.last").addClass("active");
    $(".pallini .last").addClass("active");
  }
}

function nextImg(){
  // trovo qual'è la classe attivata
  var activeImg = $(".imgs img.active");
  var activePln = $(".pallini .active")
  // rimuovo l'attivazione
  activeImg.removeClass("active");
  activePln.removeClass("active");
  //creo la condizione per far apparire l'immagine dopo
  activeImg.next().addClass("active");
  activePln.next().addClass("active");

  if (activeImg.hasClass("last")){
    $(".imgs img.first").addClass("active");
    $(".pallini .first").addClass("active");
  }
}



console.log("ciao");

})
