$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;


function onReady() {
    
    let  abilityPoints = 100
    let healthPoints =  100

    $(".attacks").on("click", ".entangle", entangleAttack)
    $(".attacks").on("click", ".dragon-blade", dragonBladeAttack)
    $(".attacks").on("click", ".star-fire", starFireAttack)
    $(".attacks").on("click", ".arcane-scepter", arcaneAttack)
    $("body").on("click", checkLow )

    function arcaneAttack(){
        if (abilityPoints >= 12 && healthPoints > 0) {
            abilityPoints = Number($("#apSpan").text() - 12)
            healthPoints = Number($("#hpSpan").text() - 14)
            if (abilityPoints < 0 ) {
                abilityPoints = 0
                $(".walk").replaceWith(`<div class="freaky-fungus jump"></div>`)
            }
            if (healthPoints <= 0) {
                healthPoints = 0
                $(".walk").replaceWith(`<div class="freaky-fungus dead"></div>`)
           }
        } else {
            $(".arcane-scepter").replaceWith(`<button class="attack-btn arcane-scepter" disabled></button>`)
        }

        
        $("#hpSpan").text(healthPoints)
        $("#apSpan").text(abilityPoints)
        $("#ap-meter").val(abilityPoints)
        $("#hp-meter").val(healthPoints)
    } 

     //    **AP Cost:** 12
     //    - **HP Damage:** 14

     function entangleAttack(){
        if (abilityPoints >= 23 && healthPoints > 0) {
            abilityPoints = Number($("#apSpan").text() - 23)
            healthPoints = Number($("#hpSpan").text() - 9)
            if (abilityPoints < 0 ) {
                abilityPoints = 0
                $(".walk").replaceWith(`<div class="freaky-fungus jump"></div>`)
            }
            if (healthPoints < 0) {
                healthPoints = 0
                $(".walk").replaceWith(`<div class="freaky-fungus dead"></div>`)
           }
        } else {
            $(".entangle").replaceWith(`<button class="attack-btn entangle" disabled></button>`)
        }

        
        $("#hpSpan").text(healthPoints)
        $("#apSpan").text(abilityPoints)
        $("#ap-meter").val(abilityPoints)
        $("#hp-meter").val(healthPoints)
    } 



    function dragonBladeAttack(){
        if (abilityPoints >= 38 && healthPoints > 0) {
            abilityPoints = Number($("#apSpan").text() - 38)
            healthPoints = Number($("#hpSpan").text() - 47)
            if (abilityPoints < 0 ) {
                abilityPoints = 0
                $(".walk").replaceWith(`<div class="freaky-fungus jump"></div>`)
            }
            if (healthPoints < 0) {
                healthPoints = 0
                $(".walk").replaceWith(`<div class="freaky-fungus dead"></div>`)
           }
        } else {
            $(".dragon-blade").replaceWith(`<button class="attack-btn dragon-blade" disabled></button>`)
        }

        
        $("#hpSpan").text(healthPoints)
        $("#apSpan").text(abilityPoints)
        $("#ap-meter").val(abilityPoints)
        $("#hp-meter").val(healthPoints)
    }


    function starFireAttack(){
        if (abilityPoints >= 33 && healthPoints > 0) {
            abilityPoints = Number($("#apSpan").text() - 33)
            healthPoints = Number($("#hpSpan").text() - 25)
            if (abilityPoints < 0 ) {
                abilityPoints = 0
                $(".walk").replaceWith(`<div class="freaky-fungus jump"></div>`)
            }
            if (healthPoints < 0) {
                healthPoints = 0
                $(".walk").replaceWith(`<div class="freaky-fungus dead"></div>`)
           }
        } else {
            $(".star-fire").replaceWith(`<button class="attack-btn star-fire" disabled></button>`)
        }


        $("#hpSpan").text(healthPoints)
        $("#apSpan").text(abilityPoints)
        $("#ap-meter").val(abilityPoints)
        $("#hp-meter").val(healthPoints)
    }



    function checkLow(){
        if (healthPoints < 50) {
            setInterval(incrementHealthPoints, 1000);
          }
    
        if (abilityPoints < 50) {
            setInterval(incrementAbilityPoints, 1000)
        }
    
        function incrementHealthPoints() {
            healthPoints++;
            $("#hpSpan").text(healthPoints);
            $("#hp-meter").val(healthPoints);
          }
          function incrementAbilityPoints() {
            abilityPoints++;
            $("#apSpan").text(abilityPoints);
            $("#ap-meter").val(abilityPoints);
          }
        }

    }
