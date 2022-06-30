// Milestone 5
// Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
// Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti

Vue.config.devtools = true

var app = new Vue(
 {
    el: '#root',
    data: {
        messageActive: 0,
        menuIsVisible: false,
        contactSearchFilter: '',
        lastAccess: dayjs().format('10:mm'),
        currentActiveElement: 0,
        userNewMessageText: '',
    contacts: [
        {
            name: 'Michele',
            avatar: '_1',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Fabio',
            avatar: '_2',
            visible: true,
            messages: [
                {
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Samuele',
            avatar: '_3',
            visible: true,
            messages: [
                {
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Luisa',
            avatar: '_4',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
            ],
        },
      ]
    },
// ! *************** inizio methods ********************
    methods : {
        setActiveElement(Index) {
            // this.currentActiveElement sarà uguale all'indice 
            // dell'elemento su cui ho cliccato
            this.currentActiveElement = Index;
            },
    
        sendNewMessage(){
        // se la stringa non è vuota invio il messaggio,
        // creo un nuovo oggetto e lo pusho in messages 
            if(this.userNewMessageText.length > 0) {
                this.contacts[this.currentActiveElement].messages.push(
                    {
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        text: this.userNewMessageText,
                        status: 'sent'   
                    }
                );
                // Svuoto la input
                this.userNewMessageText = '';
            }
          },   
        // funzione per la risposta, quasi uguale a quella di invio 
        sendAnswer(){
            this.contacts[this.currentActiveElement].messages.push(
                {
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: 'ok',
                    status: 'received'   
                }
            );
            },

            filterContacts(){
                // per ogni elemento di contacts, se contiene le stesse
                // lettere, il contatto saraà visible se no scomparirà
                this.contacts.forEach((element) => {
                    if(element.name.toLowerCase().includes(this.contactSearchFilter.toLowerCase())) {
                        element.visible = true;
                    } else {
                        element.visible = false;
                    }
                });
             },
              
             showMenu(index) {
              // toggle per mostrare il menu al click sulla chevron
                this.menuIsVisible = !this.menuIsVisible;
                this.messageActive = index;
            },
            
            hideMenu(){
            //    la tendina aperta si chiuderà cliccando fuori
                this.menuIsVisible = false;
                this.messageActive = 0;
            },

            deleteMessage(Index) {
            //  cliccando su "Delete message" si cancellerà il messaggio  
                this.contacts[this.currentActiveElement].messages.splice(Index, 1);
            },
        }
        // ! *************** fine methods ********************
 } );
