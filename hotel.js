/**
* @author      Steve Fallet <steve.fallet@divtec.ch>
* @version     1.0
* @since       2023-10-09
*
* http://usejsdoc.org/
*/

"use strict";

// Récupère le formulaire
const form = document.querySelector("#formHotel");
console.log(form);

// Récupère les différents champs du formulaire
const lisHotel = document.querySelector("#lis-hotel");
const txtNbrChambre = document.querySelector("#txt-nbrChambre");
console.log(lisHotel, lisHotel.value);
console.log(txtNbrChambre, txtNbrChambre.value, parseFloat(txtNbrChambre.value));

/**
 * Retourne le nom de l'hotel sélectionné par le visiteur
 * @returns {String} Nom de l'hotêl ou "0" si pas de sélection
 */
function getHotel() {
    return lisHotel.value;
}
console.log(getHotel());

/**
 * Retourne le nombre de chambres saisi par le visiteur
 * @returns {Number} Nombre de chambres ou NaN (Not A Number)
 */
function getNbChambre() {
    return parseFloat(txtNbrChambre.value);
}
console.log(getNbChambre());

/**
 * Retourne le type de chambre sélectionné ou ""
 * @returns {String} Type de chambre ou ""
 */
function getChambre() {

}

/**
 * Retourne les options choisies par le visiteur
 * @returns {Array} tableau des éléments checkbox cochés
 */
function getOptions() {

}

/**
 * Valide la saisie utilisateur
 * Retourne un message d'erreur au format HTML "<ul><li>erreur 1</li>...</ul>"
 * ou chaine vide si tout est OK.
 *
 * @returns {String}    Chaine vide si pas d'erreur ou <ul> d'erreurs
 */
function valideSaisie() {

}

/**
 * Affiche la confirmation de réservation
 */
function afficheConfirmation() {

}

/**
 * Fonction appellé lors de l'envoi du formulaire
 * Test la saisie et affiche la confirmation ou le message d'erreur
 * @param event Objet représentant l'événement
 */
function reserver(event) {

    // Stoppe l'envoi du formulaire
    event.preventDefault();
}

form.addEventListener("submit", reserver);
