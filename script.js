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
        }


        $("#hpSpan").text(healthPoints)
        $("#apSpan").text(abilityPoints)
        $("#ap-meter").val(abilityPoints)
        $("#hp-meter").val(healthPoints)
    }


    }




  


   
 

    // When you click an attack button:
    // -  update _state_ variable(s) to make the Freaky Fungus lose hit points (HP), and to reduce your attack points (AP). 
    // - See [Attacks](#attacks) below, for the AP and HP values of each attack
    // - State may be held in one our more variables of your choosing
    // - HP and AP values may not be negative (set to zero, if they would otherwise be negative)
// - Update the text above the attack buttons (eg, "100 AP")
// - Update the text above the enemy fungus (eg, "100 HP")
// - If the Freaky Fungus runs out of HP, the monster is dead and you win!
//  Replace the `walk` class with a `dead` class on the freaky-fungus element,
//  to make them fall over and die.
// - If you run out of AP, the monster wins and humanity is doomed 😢
//  Replace the `walk` class with a `jump` class on the freaky-fungus element, 
//  to make them jump for the glory of the fungal race.
//   - You may no longer attack, if AP is `0`. 
// Give all of the attack buttons a [`disabled`]
// (https://www.w3schools.com/tags/att_button_disabled.asp) attribute, so they may no longer be used. 
