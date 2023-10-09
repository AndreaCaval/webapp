# Webapp

Le webapp da realizzare, tutta in Angular-cli, deve emulare la parte server tramite la
tecnologia del framework.

Parte server:
- La parte server va emulata con dei json consultabili tramite observable e chiamate
asincrone (oppure con angular json-server json-server - npm)


Parte client
per lo sviluppo dell’applicazione lato client utilizziamo: 
- Angular (16)
- Bootstrap (5)
- SweetAlert per mostrare gli errori o i messaggi di conferma

  
Progetto per test
Gestione dati personali

Applicativo gestione/invio dati personali: si tratta di una piccola webapp che consente di
gestire i dati anagrafici di persone:
- Nome*
- Cognome*
- Indirizzo
- Località
- Comune
- Provincia
- Email*
- Note

*Dati obbligatori

Entrando nell’applicazione, la pagina deve visualizzare un elenco con Nome, Cognome,
Comune ed Email dei clienti.
- Prevedere la possibilità di filtrare l’elenco per i singoli campi
- Consentire all’utente l’ordinamento dei dati
- Prevedere un bottone “Nuova anagrafica”
- Gestire l’eliminazione dell’anagrafica (tasto ELIMINA presente in ogni riga
dell’elenco)
- Gestire la modifica dell’anagrafica (tasto MODIFICA presente in ogni riga
dell’elenco)

La modifica del record deve essere consentita in una pagina di dettaglio in cui :
- è possibile modificare i dati.
- dev’essere gestita la validazione del dato in fase di salvataggio

Dopo l’inserimento o la modifica del dato, deve essere evidenziato il record inserito o
modificato e la pagina si deve posizionare su tale record.
- La navigazione delle pagine dev’essere gestita tramite route di Angular.
- L’applicazione deve essere responsive, utilizzabile da smartphone e tablet
- 
N.B: Il passaggio dalle griglie dati alle maschere di editing deve essere fatto tramite
routing di Angular con componenti dedicati (non con mostra/nascondi)
