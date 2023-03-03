*** Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere      
    posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
    In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora 
    di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
    La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha 
    rivelato tutte le celle che non sono bombe).
    Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una 
    bomba.
* Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle.
* Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste.

// inizializzo un vettore vuoto
// Creo una funzione che mi generi 16 numeri randomici che inserirò nel vettore facendo in modo che non generi numeri uguali
// le posizioni dell'array con quelle delle celle
// SE l'utente clicca su una posizione che corrisponde sia ad una posizione del vettore, sia all'indice della cella
// ALLORA questa si colora di rosso ed generando un messaggio con all'interno il risultato negativo
// AL CONTRARIO vado avanti, fin quando non saranno state scoperte tutte le posizioni meno quelle del vettore generando un messaggio di vittoria.
// Andando avanti scoprendo le celle, contemporaneamente aumento il contatore del punteggio.