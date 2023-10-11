/**
* @author      Steve Fallet <steve.fallet@divtec.ch>
* @version     1.0
* @since       2023-10-09
*
* http://usejsdoc.org/
*/

"use strict";

// Récupère les zones de message d'erreur, formulaire, et réservation
const message = document.querySelector("#message");
const formulaire = document.querySelector("#formHotel");
const reservation = document.querySelector("#reservation");
console.log(message, formulaire, reservation);

// Récupère les différents champs du formulaire
const formHotel = formulaire.querySelector("#lis-hotel");
const formNumChambre = formulaire.querySelector("#txt-nbrChambre");
console.log(formHotel, formHotel.value);
console.log(formNumChambre, formNumChambre.value, parseFloat(formNumChambre.value));

// Récupère les éléments de la div réservation
const reservPhoto = reservation.querySelector("#photo");
const reservHotel = reservation.querySelector("h2");
const reservNumChambre = reservation.querySelector("#chambre_nombre");
const reservTypeChambre = reservation.querySelector("#chambre_type");
const reservOptions = reservation.querySelector("#options");
console.log(reservPhoto, reservHotel,
    reservNumChambre, reservTypeChambre, reservOptions);

/**
 * Retourne le nom de l'hotel sélectionné par le visiteur
 * @returns {String} Nom de l'hotêl ou "0" si pas de sélection
 */
function getHotel() {
    return formHotel.value;
}
console.log("hotel :", getHotel());

/**
 * Retourne le nombre de chambres saisi par le visiteur
 * @returns {Number} Nombre de chambres ou NaN (Not A Number)
 */
function getNbChambre() {
    return parseFloat(formNumChambre.value);
}
console.log("numChambre :", getNbChambre());

/**
 * Retourne le type de chambre sélectionné ou ""
 * @returns {String} Type de chambre ou ""
 */
function getChambre() {
    const formTypeChambre = formulaire.querySelector("[name='type-chambre']:checked");
    if (formTypeChambre === null) {
        return "";
    }
    return formTypeChambre.value;
}
console.log("typeChambre :", getChambre());

/**
 * Retourne les options choisies par le visiteur
 * @returns {Array} tableau des éléments checkbox cochés
 */
function getOptions() {
    return formulaire.querySelectorAll("[name='options']:checked");
}
console.log("options :", getOptions());

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
console.log("messageErreur :", valideSaisie());

/**
 * Affiche la confirmation de réservation
 */
function afficheConfirmation() {

    // Change la photo
    reservPhoto.src = `images/${getHotel().toLowerCase()}.jpg`;

    // Change le nom de l'hôtel
    reservHotel.innerHTML = formHotel.querySelector("option:checked").innerText;

    // Change le nombre et type de chambre
    reservNumChambre.innerHTML = getNbChambre().toString();
    reservTypeChambre.innerHTML = getChambre();

    // Ajoute les options sélectionnées
    reservOptions.innerHTML = "";
    for (let option of getOptions()) {
        reservOptions.innerHTML += `<li>${option.id}</li>`;
    }

    // Affiche la zone de réservation
    reservation.style.display = "block";
    console.log(`images/${formHotel.value.toLowerCase()}.jpg`,
        formHotel.querySelector("option:checked").innerText,
        getNbChambre().toString(), getChambre());
}

/**
 * Fonction appellé lors de l'envoi du formulaire
 * Test la saisie et affiche la confirmation ou le message d'erreur
 * @param event Objet représentant l'événement
 */
function reserver(event) {

    // Stoppe l'envoi du formulaire
    event.preventDefault();

    // Vide et cache la div #message
    message.innerHTML = "";
    message.style.display = "none";

    // Affiche soit le mesage d'erreur soit la zone de réservation
    let messageErreur = valideSaisie();
    if (messageErreur !== "") {
        message.innerHTML = `<ul>${messageErreur}</ul>`;
        message.style.display = "block";
        reservation.removeAttribute("style");
    } else {
        afficheConfirmation();
    }
}

formulaire.addEventListener("submit", reserver);

formulaire.addEventListener("reset", () => {
    message.removeAttribute("style");
    reservation.removeAttribute("style");
});