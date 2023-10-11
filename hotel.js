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
const reservation = document.querySelector("#reservation");
console.log(form, reservation);

// Récupère les différents champs du formulaire
const lisHotel = form.querySelector("#lis-hotel");
const txtNbrChambre = form.querySelector("#txt-nbrChambre");
console.log(lisHotel, lisHotel.value);
console.log(txtNbrChambre, txtNbrChambre.value, parseFloat(txtNbrChambre.value));

// Récupère les éléments de la div réservation
const photo = reservation.querySelector("#photo");
const titre = reservation.querySelector("h2");
const chambreNombre = reservation.querySelector("#chambre_nombre");
const chambreType = reservation.querySelector("#chambre_type");
const optionsList = reservation.querySelector("#options");
console.log(photo, titre);
console.log(chambreNombre, chambreType, optionsList);

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
    const typeChambre = form.querySelector("[name='type-chambre']:checked");
    if (typeChambre === null) {
        return "";
    }
    return typeChambre.value;
}
console.log(getChambre());

/**
 * Retourne les options choisies par le visiteur
 * @returns {Array} tableau des éléments checkbox cochés
 */
function getOptions() {
    const options = form.querySelectorAll("[name='options']:checked");
    return options;
}
console.log(getOptions());

/**
 * Valide la saisie utilisateur
 * Retourne un message d'erreur au format HTML "<ul><li>erreur 1</li>...</ul>"
 * ou chaine vide si tout est OK.
 *
 * @returns {String}    Chaine vide si pas d'erreur ou <ul> d'erreurs
 */
function valideSaisie() {

    let messageErreur = "";

    if (getHotel() === "0") {
        messageErreur += "<li>Sélectionnez un hôtel !</li>";
    }
    if (getNbChambre() < 1 || getNbChambre() > 12 || isNaN(getNbChambre())) {
        messageErreur += "<li>Saisissez un nombre de chambres entre 1 et 12 !</li>";
    }
    if (getChambre() === "") {
        messageErreur += "<li>Sélectionnez un type de chambre !</li>";
    }
    return messageErreur;
}
console.log(valideSaisie());

/**
 * Affiche la confirmation de réservation
 */
function afficheConfirmation() {
    getHotel();
    photo.src = `images/${lisHotel.value.toLowerCase()}.jpg`;
    titre.innerHTML = lisHotel.querySelector("option:checked").innerText;
    chambreNombre.innerHTML = getNbChambre().toString();
    chambreType.innerHTML = getChambre();
    for (let option of getOptions()) {
        optionsList.innerHTML += `<li>${option.id}</li>`;
    }
    reservation.style.display = "block";
    console.log(`images/${lisHotel.value.toLowerCase()}.jpg`,
        lisHotel.querySelector("option:checked").innerText,
        getNbChambre().toString(), getChambre());
}

afficheConfirmation();

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