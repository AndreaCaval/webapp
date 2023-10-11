# Webapp

## Home page
- table with users information
- ordering by column ascending & descending
- search by every camp
- info/edit/delete button
  
![screencapture-localhost-4200-2023-10-11-15_00_57](https://github.com/AndreaCaval/webapp/assets/74151159/a29465eb-8e43-460c-80ea-93353cc2201e)

## Info page
![screencapture-localhost-4200-info-ylTgC3T-2023-10-11-15_01_18](https://github.com/AndreaCaval/webapp/assets/74151159/0987599a-1d7c-47f3-a8b8-8415d4020b30)
## Edit page
![screencapture-localhost-4200-edit-ylTgC3T-2023-10-11-15_01_29](https://github.com/AndreaCaval/webapp/assets/74151159/81364f97-e627-43a2-9639-e3ef37e3487b)
## New page
![screencapture-localhost-4200-new-2023-10-11-15_01_39](https://github.com/AndreaCaval/webapp/assets/74151159/128bca8b-232c-492c-a05d-ad3f387894c9)


# Traccia Esercizio

Le webapp da realizzare, tutta in Angular-cli, deve emulare la parte server tramite la
tecnologia del framework.

### Parte server:
- La parte server va emulata con dei json consultabili tramite observable e chiamate
asincrone (oppure con angular json-server json-server - npm)


### Parte client
per lo sviluppo dell’applicazione lato client utilizziamo: 
- Angular (16)
- Bootstrap (5)
- SweetAlert per mostrare gli errori o i messaggi di conferma

  
## Progetto per test
### Gestione dati personali

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
